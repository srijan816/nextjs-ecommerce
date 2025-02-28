const fs = require('fs');
const path = require('path');

// Define the files to create with absolute paths instead of aliases
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
import { Product } from '../../lib/api/products';

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
import { Category } from '../../lib/api/products';

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
import { useChatbotStore } from '../../lib/store/chatbot-store';

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
import { useChatbotStore } from '../../lib/store/chatbot-store';

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
  },
  {
    path: 'src/app/page.tsx',
    content: `import Link from 'next/link';
import Image from 'next/image';
import { FiArrowRight, FiShoppingBag, FiTruck, FiHeadphones } from 'react-icons/fi';
import { getCategories, getFeaturedProducts, getProducts } from '../lib/api/products';
import ProductCard from '../components/ui/product-card';
import CategoryCard from '../components/ui/category-card';
import ChatbotButton from '../components/chatbot/chatbot-button';
import ChatbotDialog from '../components/chatbot/chatbot-dialog';

export const dynamic = 'force-dynamic';

export default async function HomePage() {
  // Fetch data
  const categories = await getCategories();
  const featuredProducts = await getFeaturedProducts();
  const products = await getProducts();
  const newArrivals = products.slice(4, 8); // Use the last 4 products for new arrivals
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="relative container mx-auto px-4 py-20 z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Discover Quality Products for Your Lifestyle
              </h1>
              <p className="text-lg mb-6 text-blue-100">
                Shop our curated collection of premium products with exceptional quality and value.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/products" className="bg-white text-blue-600 px-6 py-3 rounded-md font-medium hover:bg-blue-50 transition-colors">
                  Shop Now
                </Link>
                <Link href="/categories" className="bg-transparent border border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white/10 transition-colors">
                  Browse Categories
                </Link>
              </div>
            </div>
            <div className="hidden md:block relative h-96">
              <Image
                src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&auto=format&fit=crop&q=60"
                alt="Shopping"
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
        
        {/* Hero background pattern */}
        <div className="absolute inset-0 opacity-10 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-white"></div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md flex items-start">
            <div className="bg-blue-100 p-3 rounded-full mr-4">
              <FiShoppingBag className="text-blue-600 w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Secure Shopping</h3>
              <p className="text-gray-600">Shop with confidence with our secure payment methods and data protection.</p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md flex items-start">
            <div className="bg-blue-100 p-3 rounded-full mr-4">
              <FiTruck className="text-blue-600 w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Get your orders delivered quickly with our efficient shipping partners.</p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md flex items-start">
            <div className="bg-blue-100 p-3 rounded-full mr-4">
              <FiHeadphones className="text-blue-600 w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">24/7 Support</h3>
              <p className="text-gray-600">Our customer support team is always available to assist you with any queries.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Categories Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Categories</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse our wide selection of products across multiple categories.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </section>
      
      {/* Featured Products Section */}
      <section className="container mx-auto px-4 py-16 bg-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Products</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our most popular items, hand-picked for quality and value.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link href="/products" className="inline-flex items-center text-blue-600 font-medium hover:underline">
            View All Products <FiArrowRight className="ml-2" />
          </Link>
        </div>
      </section>
      
      {/* New Arrivals Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">New Arrivals</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Check out the latest additions to our collection.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {newArrivals.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Stay updated with the latest products, exclusive offers, and discounts.
          </p>
          
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-2">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow px-4 py-3 rounded-md border-0 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300" 
            />
            <button className="bg-blue-900 text-white px-6 py-3 rounded-md hover:bg-blue-800 transition-colors">
              Subscribe
            </button>
          </div>
          
          <p className="text-sm text-blue-100 mt-4">
            By subscribing, you agree to our privacy policy and consent to receive marketing emails.
          </p>
        </div>
      </section>
      
      {/* Chatbot components */}
      <ChatbotButton />
      <ChatbotDialog />
    </div>
  );
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

console.log('All files created with absolute paths!'); 