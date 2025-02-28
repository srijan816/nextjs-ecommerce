// Mock product data
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
}