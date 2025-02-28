import { OpenAI } from 'openai';

// Create an OpenAI API client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Set the system prompt for the chatbot
const systemPrompt = `
You are a helpful customer support assistant for an eCommerce store called NextCommerce.
Your goal is to provide friendly, concise, and accurate information to customers.

Here are some key details about our store:
- We offer free shipping on orders over $50
- Standard delivery takes 3-5 business days
- Express shipping is available for an additional fee
- Our return policy allows returns within 30 days for a full refund
- We accept all major credit cards, PayPal, and Apple Pay
- For customer support: support@example.com or 1-800-123-4567 (9 AM - 5 PM ET, Monday to Friday)
- Use code WELCOME10 for 10% off your first order
- We have a price match guarantee for identical items found at lower prices elsewhere

Always be helpful, concise, and friendly in your responses.
`;

// This function converts an OpenAI stream to a raw text stream
// compatible with the Vercel AI SDK when using streamProtocol: 'text'
function createRawTextStream(stream: AsyncIterable<any>) {
  const encoder = new TextEncoder();
  
  return new ReadableStream({
    async start(controller) {
      // Process each chunk from the OpenAI stream
      for await (const chunk of stream) {
        const content = chunk.choices[0]?.delta?.content || '';
        if (content) {
          // When using streamProtocol: 'text', we just need to send the raw text
          controller.enqueue(encoder.encode(content));
        }
      }
      
      // Close the stream when done
      controller.close();
    },
  });
}

export async function POST(req: Request) {
  try {
    // Parse the request body
    const { messages } = await req.json();
    
    // Validate the messages
    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return new Response(
        JSON.stringify({ error: 'Invalid request body. Expected an array of messages.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }
    
    // Add the system prompt to the messages
    const messagesWithSystemPrompt = [
      { role: 'system', content: systemPrompt },
      ...messages
    ];
    
    // Call the OpenAI API
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: messagesWithSystemPrompt,
      stream: true,
      temperature: 0.7,
      max_tokens: 500,
    });
    
    // Convert the response to a raw text stream
    const stream = createRawTextStream(response);
    
    // Return the stream with the correct headers for text streaming
    return new Response(stream, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
      },
    });
  } catch (error) {
    console.error('Error in chatbot API:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to process chatbot request' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
