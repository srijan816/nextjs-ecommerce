import Link from 'next/link';
import Image from 'next/image';
import { FiArrowRight, FiShoppingBag, FiTruck, FiHeadphones } from 'react-icons/fi';
import { getCategories, getFeaturedProducts, getProducts } from '../lib/api/products';
import ProductCard from '../components/ui/product-card';
import CategoryCard from '../components/ui/category-card';
// Import chatbot wrapper component
import ChatbotWrapper from '../components/chatbot/chatbot-wrapper';

// Force dynamic rendering to ensure data is always fresh
export const fetchCache = 'force-no-store';
export const revalidate = 0; // Revalidate this page on every request

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
      
      {/* Chatbot component */}
      <ChatbotWrapper />
    </div>
  );
}
