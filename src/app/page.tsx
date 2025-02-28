export const dynamic = 'force-dynamic';

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="mb-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Welcome to NextCommerce</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our curated collection of products with exceptional quality and value.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Featured categories would go here */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-3">Electronics</h3>
            <p className="text-gray-600 mb-4">Latest gadgets and tech accessories</p>
            <button className="text-blue-600 font-medium hover:underline">
              Browse Electronics →
            </button>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-3">Clothing</h3>
            <p className="text-gray-600 mb-4">Stylish apparel for every occasion</p>
            <button className="text-blue-600 font-medium hover:underline">
              Browse Clothing →
            </button>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-3">Home & Living</h3>
            <p className="text-gray-600 mb-4">Beautiful items for your space</p>
            <button className="text-blue-600 font-medium hover:underline">
              Browse Home & Living →
            </button>
          </div>
        </div>
      </section>
      
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Products</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our most popular items, hand-picked for quality and value.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Product cards would go here */}
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-4">
                <h3 className="font-medium">Product Name</h3>
                <p className="text-gray-600 text-sm mb-2">Category</p>
                <div className="flex justify-between items-center">
                  <span className="font-bold">$99.99</span>
                  <button className="text-sm bg-blue-600 text-white px-3 py-1 rounded">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      <section>
        <div className="bg-gray-100 rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Stay updated with the latest products, exclusive offers, and discounts.
          </p>
          <div className="max-w-md mx-auto flex">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow px-4 py-2 rounded-l-md border-y border-l border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600" 
            />
            <button className="bg-blue-600 text-white px-6 py-2 rounded-r-md hover:bg-blue-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
} 