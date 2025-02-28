'use client';

import { useState, useRef, useEffect } from 'react';
import { FiSend, FiX } from 'react-icons/fi';
import { useChat } from 'ai/react';
import { useChatbotStore, Message as StoreMessage } from '../../lib/store/chatbot-store';

export default function ChatbotDialog() {
  const { 
    isOpen, 
    setIsOpen, 
    messages: storeMessages, 
    addMessage, 
    clearMessages 
  } = useChatbotStore();
  
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Use the Vercel AI SDK's useChat hook
  const {
    messages,
    input: aiInput,
    handleInputChange,
    handleSubmit,
    isLoading,
    error
  } = useChat({
    api: '/api/chatbot',
    streamProtocol: 'text', // Add this line to fix stream parsing issues
    onFinish: (message) => {
      // Add the assistant's message to the store for persistence
      addMessage({ role: 'assistant', content: message.content });
    }
  });

  // Sync input state with AI SDK
  useEffect(() => {
    setInput(aiInput);
  }, [aiInput]);

  // Sync store messages with AI SDK on initial load
  useEffect(() => {
    if (storeMessages.length > 0 && messages.length === 0) {
      // The messages from the store are already in the UI
      console.log('Loaded messages from store:', storeMessages);
    }
  }, [storeMessages, messages]);

  // Scroll to bottom of messages when new message is added
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, storeMessages]);

  // Handle sending a message
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!input.trim() || isLoading) return;
    
    console.log('Sending message:', input);
    
    // Add user message to store for persistence
    const userMessage: StoreMessage = { role: 'user', content: input };
    addMessage(userMessage);
    
    // Use the AI SDK to handle the submission
    handleSubmit(e);
  };

  // Display error if there is one
  useEffect(() => {
    if (error) {
      console.error('Chat error:', error);
      addMessage({ 
        role: 'assistant', 
        content: "Sorry, I'm having trouble connecting right now. Please try again later."
      });
    }
  }, [error, addMessage]);

  if (!isOpen) return null;

  // Determine which messages to display - use store messages for persistence
  const displayMessages = storeMessages.length > 0 ? storeMessages : messages;

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
        {displayMessages.length === 0 ? (
          <div className="text-center text-gray-500 py-8">
            <p>Welcome to customer support! How can I help you today?</p>
          </div>
        ) : (
          displayMessages.map((message, index) => (
            <div 
              key={index} 
              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`max-w-[75%] rounded-lg px-4 py-2 ${
                message.role === 'user' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-100 text-gray-800'
              }`}>
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
            onChange={(e) => {
              setInput(e.target.value);
              handleInputChange(e);
            }}
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
}
