const fs = require('fs');
const path = require('path');

// Define the files to create
const files = [
  {
    path: 'src/lib/store/chatbot-store.ts',
    content: `import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Message = {
  role: 'user' | 'assistant';
  content: string;
};

type ChatbotState = {
  isOpen: boolean;
  messages: Message[];
  unreadMessages: number;
  isLoading: boolean;
  setIsOpen: (isOpen: boolean) => void;
  addMessage: (message: Message) => void;
  setUnreadMessages: (count: number) => void;
  incrementUnreadMessages: () => void;
  setIsLoading: (isLoading: boolean) => void;
  clearMessages: () => void;
};

export const useChatbotStore = create<ChatbotState>()(
  persist(
    (set) => ({
      isOpen: false,
      messages: [],
      unreadMessages: 0,
      isLoading: false,
      setIsOpen: (isOpen) => set({ isOpen, unreadMessages: isOpen ? 0 : 0 }),
      addMessage: (message) => 
        set((state) => ({ 
          messages: [...state.messages, message],
          unreadMessages: state.isOpen 
            ? 0 
            : message.role === 'assistant' 
              ? state.unreadMessages + 1 
              : state.unreadMessages
        })),
      setUnreadMessages: (count) => set({ unreadMessages: count }),
      incrementUnreadMessages: () => 
        set((state) => ({ unreadMessages: state.unreadMessages + 1 })),
      setIsLoading: (isLoading) => set({ isLoading }),
      clearMessages: () => set({ messages: [] }),
    }),
    {
      name: 'chatbot-storage',
    }
  )
);`
  },
  {
    path: 'src/lib/api/products.ts',
    content: `// Mock product data
export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  categoryName: string;
  image: string;
  featured?: boolean;
};

// In a real application, this would fetch from your database using Prisma
export async function getProducts(): Promise<Product[]> {
  return [
    {
      id: "1",
      name: "Wireless Headphones",
      description: "Premium noise-cancelling wireless headphones with long battery life",
      price: 149.99,
      category: "electronics",
      categoryName: "Electronics",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60",
      featured: true
    },
    {
      id: "2",
      name: "Smart Watch",
      description: "Track your fitness, health, and stay connected with notifications",
      price: 199.99,
      category: "electronics",
      categoryName: "Electronics",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60",
      featured: true
    },
    {
      id: "3",
      name: "Cotton T-Shirt",
      description: "Soft and comfortable cotton t-shirt for everyday wear",
      price: 24.99,
      category: "clothing",
      categoryName: "Clothing",
      image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=500&auto=format&fit=crop&q=60",
      featured: true
    },
    {
      id: "4",
      name: "Thermal Water Bottle",
      description: "Double-wall insulated bottle that keeps drinks hot or cold for hours",
      price: 34.99,
      category: "home-kitchen",
      categoryName: "Home & Kitchen",
      image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&auto=format&fit=crop&q=60",
      featured: true
    },
    {
      id: "5",
      name: "Wireless Charging Pad",
      description: "Fast wireless charging for compatible smartphones",
      price: 29.99,
      category: "electronics",
      categoryName: "Electronics",
      image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500&auto=format&fit=crop&q=60"
    },
    {
      id: "6",
      name: "Denim Jacket",
      description: "Classic denim jacket for all seasons",
      price: 59.99,
      category: "clothing",
      categoryName: "Clothing",
      image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=500&auto=format&fit=crop&q=60"
    },
    {
      id: "7",
      name: "Air Purifier",
      description: "HEPA filter air purifier for cleaner indoor air",
      price: 129.99,
      category: "home-kitchen",
      categoryName: "Home & Kitchen",
      image: "https://images.unsplash.com/photo-1585569695019-98543f55f817?w=500&auto=format&fit=crop&q=60"
    },
    {
      id: "8",
      name: "Ceramic Coffee Mug",
      description: "Elegant ceramic coffee mug",
      price: 19.99,
      category: "home-kitchen",
      categoryName: "Home & Kitchen",
      image: "https://images.unsplash.com/photo-1481833761820-0509d3217039?w=500&auto=format&fit=crop&q=60"
    }
  ];
}

export async function getFeaturedProducts(): Promise<Product[]> {
  const products = await getProducts();
  return products.filter(product => product.featured);
}

// Mock function to get categories
export type Category = {
  id: string;
  name: string;
  description: string;
  image: string;
  productCount?: number;
};

export async function getCategories(): Promise<Category[]> {
  return [
    {
      id: "electronics",
      name: "Electronics",
      description: "Latest gadgets and tech accessories",
      image: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=500&auto=format&fit=crop&q=60",
      productCount: 24
    },
    {
      id: "clothing",
      name: "Clothing",
      description: "Stylish and comfortable clothing for all seasons",
      image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=500&auto=format&fit=crop&q=60",
      productCount: 36
    },
    {
      id: "home-kitchen",
      name: "Home & Kitchen",
      description: "Essential items for your home and kitchen",
      image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=500&auto=format&fit=crop&q=60",
      productCount: 18
    },
    {
      id: "beauty",
      name: "Beauty",
      description: "Premium beauty and personal care products",
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500&auto=format&fit=crop&q=60",
      productCount: 12
    }
  ];
}`
  },
  {
    path: 'src/components/ui/product-card.tsx',
    content: `import Image from 'next/image';
import Link from 'next/link';
import { FiShoppingCart } from 'react-icons/fi';
import { Product } from '@/lib/api/products';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { id, name, price, categoryName, image } = product;
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <Link href={\`/products/\${id}\`}>
        <div className="relative h-48 overflow-hidden bg-gray-200">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      </Link>
      
      <div className="p-4">
        <Link href={\`/products/\${id}\`} className="hover:text-blue-600 transition-colors">
          <h3 className="font-medium line-clamp-1">{name}</h3>
        </Link>
        <p className="text-gray-600 text-sm mb-2">{categoryName}</p>
        
        <div className="flex justify-between items-center">
          <span className="font-bold">\${price.toFixed(2)}</span>
          <button 
            className="flex items-center gap-1 text-sm bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition-colors"
            aria-label={\`Add \${name} to cart\`}
          >
            <FiShoppingCart className="w-4 h-4" />
            <span>Add</span>
          </button>
        </div>
      </div>
    </div>
  );
}`
  },
  {
    path: 'src/components/ui/category-card.tsx',
    content: `import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';
import { Category } from '@/lib/api/products';

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  const { id, name, description, image } = category;
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="relative h-48 -mt-10 mb-6 rounded-lg overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <h3 className="absolute bottom-4 left-4 text-xl font-semibold text-white">{name}</h3>
      </div>
      
      <p className="text-gray-600 mb-4">{description}</p>
      
      <Link
        href={\`/categories/\${id}\`}
        className="inline-flex items-center text-blue-600 font-medium hover:underline"
      >
        Browse {name}
        <FiArrowRight className="ml-2" />
      </Link>
    </div>
  );
}`
  },
  {
    path: 'src/components/chatbot/chatbot-button.tsx',
    content: `import { useEffect } from 'react';
import { FiMessageCircle } from 'react-icons/fi';
import { useChatbotStore } from '@/lib/store/chatbot-store';

export default function ChatbotButton() {
  const { isOpen, setIsOpen, unreadMessages } = useChatbotStore();

  // Handle keyboard shortcut (Cmd/Ctrl + /)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === '/') {
        e.preventDefault();
        setIsOpen(!isOpen);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, setIsOpen]);

  return (
    <button
      onClick={() => setIsOpen(true)}
      className="fixed bottom-6 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-lg transition-all duration-200 ease-in-out flex items-center justify-center"
      aria-label="Open customer support chat"
    >
      <FiMessageCircle className="w-6 h-6" />
      {unreadMessages > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center">
          {unreadMessages}
        </span>
      )}
    </button>
  );
}`
  },
  {
    path: 'src/components/chatbot/chatbot-dialog.tsx',
    content: `import { useState, useRef, useEffect } from 'react';
import { FiSend, FiX } from 'react-icons/fi';
import { useChatbotStore } from '@/lib/store/chatbot-store';

type Message = {
  role: 'user' | 'assistant';
  content: string;
};

export default function ChatbotDialog() {
  const { 
    isOpen, 
    setIsOpen, 
    messages, 
    addMessage, 
    isLoading, 
    setIsLoading, 
    clearMessages 
  } = useChatbotStore();
  
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom of messages when new message is added
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  // Handle sending a message
  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!input.trim() || isLoading) return;
    
    // Add user message to chat
    const userMessage: Message = { role: 'user', content: input };
    addMessage(userMessage);
    
    // Clear input and set loading
    setInput('');
    setIsLoading(true);
    
    try {
      // Send message to API
      const response = await fetch('/api/chatbot', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ messages: [...messages, userMessage] }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to get response from chatbot');
      }
      
      const data = await response.json();
      
      // Add assistant response to chat
      addMessage({ role: 'assistant', content: data.response });
    } catch (error) {
      console.error('Error sending message:', error);
      addMessage({ 
        role: 'assistant', 
        content: "Sorry, I'm having trouble connecting right now. Please try again later."
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-24 right-6 z-50 w-96 max-w-[calc(100vw-2rem)] h-[32rem] max-h-[calc(100vh-10rem)] bg-white rounded-lg shadow-xl flex flex-col overflow-hidden border border-gray-200">
      {/* Chat header */}
      <div className="bg-blue-600 text-white px-4 py-3 flex justify-between items-center">
        <h3 className="font-medium">Customer Support</h3>
        <button 
          onClick={() => setIsOpen(false)}
          className="text-white hover:text-gray-200 transition-colors"
          aria-label="Close chat"
        >
          <FiX className="w-5 h-5" />
        </button>
      </div>
      
      {/* Chat messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.length === 0 ? (
          <div className="text-center text-gray-500 py-8">
            <p>Welcome to customer support! How can I help you today?</p>
          </div>
        ) : (
          messages.map((message, index) => (
            <div 
              key={index} 
              className={\`flex \${message.role === 'user' ? 'justify-end' : 'justify-start'}\`}
            >
              <div className={\`max-w-[75%] rounded-lg px-4 py-2 \${
                message.role === 'user' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-100 text-gray-800'
              }\`}>
                <p className="whitespace-pre-wrap">{message.content}</p>
              </div>
            </div>
          ))
        )}
        
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-gray-100 rounded-lg px-4 py-2 max-w-[75%]">
              <div className="flex space-x-2 items-center">
                <div className="w-2 h-2 rounded-full bg-gray-400 animate-pulse"></div>
                <div className="w-2 h-2 rounded-full bg-gray-400 animate-pulse delay-75"></div>
                <div className="w-2 h-2 rounded-full bg-gray-400 animate-pulse delay-150"></div>
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>
      
      {/* Chat input */}
      <form onSubmit={handleSendMessage} className="border-t border-gray-200 p-4">
        <div className="flex items-center">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 border border-gray-300 rounded-l-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <button
            type="submit"
            disabled={!input.trim() || isLoading}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-md transition-colors disabled:bg-blue-400"
          >
            <FiSend className="w-5 h-5" />
          </button>
        </div>
      </form>
    </div>
  );
}`
  },
  {
    path: 'src/app/api/chatbot/route.ts',
    content: `import { NextResponse } from 'next/server';

// Mock function to simulate OpenAI API call
// In a real implementation, you would call the OpenAI API here
async function getChatbotResponse(messages: any[]): Promise<string> {
  try {
    // Simulate API latency
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Get the last user message
    const lastMessage = messages[messages.length - 1];
    const userQuery = lastMessage.content.toLowerCase();
    
    // Simple response logic based on keywords
    if (userQuery.includes('hello') || userQuery.includes('hi')) {
      return "Hello! Welcome to NextCommerce. How can I assist you today?";
    } else if (userQuery.includes('shipping') || userQuery.includes('delivery')) {
      return "We offer free shipping on orders over $50. Standard delivery takes 3-5 business days, and express shipping is available for an additional fee.";
    } else if (userQuery.includes('return') || userQuery.includes('refund')) {
      return "Our return policy allows you to return items within 30 days of delivery for a full refund. Please visit our Returns page for more details.";
    } else if (userQuery.includes('payment') || userQuery.includes('pay')) {
      return "We accept all major credit cards, PayPal, and Apple Pay. Your payment information is securely processed and never stored on our servers.";
    } else if (userQuery.includes('contact') || userQuery.includes('support')) {
      return "You can reach our customer support team at support@nextcommerce.com or call us at 1-800-123-4567 during business hours (9 AM - 5 PM ET, Monday to Friday).";
    } else if (userQuery.includes('discount') || userQuery.includes('coupon')) {
      return "You can use the code WELCOME10 for 10% off your first order. We also regularly offer seasonal discounts to our newsletter subscribers.";
    } else if (userQuery.includes('thanks') || userQuery.includes('thank you')) {
      return "You're welcome! Is there anything else I can help you with?";
    } else {
      return "Thank you for your message. I'd be happy to help with that. Could you provide more details so I can assist you better?";
    }
  } catch (error) {
    console.error('Error getting chatbot response:', error);
    return "Sorry, I'm having trouble connecting to my brain right now. Please try again later.";
  }
}

export async function POST(request: Request) {
  try {
    // Parse the incoming request
    const { messages } = await request.json();
    
    // Validate the messages
    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: 'Invalid request body. Expected an array of messages.' },
        { status: 400 }
      );
    }
    
    // Get a response from the chatbot
    const response = await getChatbotResponse(messages);
    
    // Return the response
    return NextResponse.json({ response });
  } catch (error) {
    console.error('Error in chatbot API:', error);
    return NextResponse.json(
      { error: 'Failed to process chatbot request' },
      { status: 500 }
    );
  }
}`
  }
];

// Create directories recursively if they don't exist
function ensureDirectoryExists(filePath) {
  const dirname = path.dirname(filePath);
  if (fs.existsSync(dirname)) {
    return true;
  }
  ensureDirectoryExists(dirname);
  fs.mkdirSync(dirname);
}

// Create each file
files.forEach(file => {
  try {
    ensureDirectoryExists(file.path);
    fs.writeFileSync(file.path, file.content);
    console.log(`Created file: ${file.path}`);
  } catch (error) {
    console.error(`Error creating file ${file.path}:`, error);
  }
});

console.log('All files created successfully!'); 