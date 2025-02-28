# NextCommerce - Modern eCommerce Platform

A scalable eCommerce website built with Next.js 15, featuring a responsive design, robust product filtering, and an AI-powered chatbot for enhanced customer support.

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![Next.js](https://img.shields.io/badge/Next.js-15.0-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)

## 🚀 Features

- **Product Catalog**: Browse products with advanced filtering by category, price range, and sorting options
- **Shopping Cart**: Add products to cart, update quantities, and proceed to checkout
- **User Authentication**: Sign up, sign in, and manage your account with secure authentication
- **Checkout Process**: Secure and streamlined checkout experience with Stripe integration
- **Order Management**: Track and manage your orders with real-time updates
- **Admin Dashboard**: Comprehensive dashboard to manage products, orders, and customers
- **Chatbot Integration**: 24/7 customer support with AI-powered chatbot
- **Responsive Design**: Fully optimized for all devices from mobile to desktop
- **Wishlist**: Save products for later purchase
- **Categories**: Browse products by category with dedicated category pages
- **Search**: Find products quickly with powerful search functionality

## 🛠️ Tech Stack

### Frontend
- **Next.js 15**: Server-side rendering, static site generation, and app router
- **TypeScript**: Type safety and better developer experience
- **Tailwind CSS**: Responsive design and styling
- **Zustand**: Global state management for cart and user preferences
- **TanStack Query**: Data fetching and caching

### Backend
- **Next.js API Routes**: Serverless backend functionality
- **Prisma ORM**: Database access and migrations
- **NextAuth.js**: Authentication and user management

### Database
- **PostgreSQL**: Primary data storage

### AI Integration
- **OpenAI API**: Natural language processing for the chatbot
- **Vercel AI SDK**: Chatbot implementation

## 📁 Project Structure

```
eCommerce/
├── prisma/                  # Database schema and migrations
├── public/                  # Static assets
├── src/
│   ├── app/                 # Next.js app router
│   │   ├── (admin)/        # Admin routes
│   │   ├── (auth)/         # Authentication routes
│   │   ├── (shop)/         # Shop routes
│   │   ├── (account)/      # User account routes
│   │   ├── api/            # API routes
│   │   ├── globals.css     # Global styles
│   │   └── layout.tsx      # Root layout
│   ├── components/         # React components
│   │   ├── ui/             # UI components
│   │   ├── layout/         # Layout components
│   │   ├── products/       # Product-related components
│   │   ├── cart/           # Cart-related components
│   │   ├── checkout/       # Checkout-related components
│   │   ├── account/        # Account-related components
│   │   ├── admin/          # Admin-related components
│   │   └── chatbot/        # Chatbot components
│   └── lib/                # Utility functions and services
│       ├── db/             # Database utilities
│       ├── auth/           # Authentication utilities
│       ├── api/            # API utilities
│       ├── utils/          # General utilities
│       ├── store/          # Zustand stores
│       └── chatbot/        # Chatbot utilities
├── .env                     # Environment variables
├── next.config.ts          # Next.js configuration
├── package.json            # Project dependencies
└── tsconfig.json           # TypeScript configuration
```

## 🚦 Getting Started

### Prerequisites

- Node.js 18.17.0 or later
- PostgreSQL database
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/srijan816/nextjs-ecommerce.git
   cd nextjs-ecommerce
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory with the following variables:
   ```
   # Database
   DATABASE_URL="postgresql://username:password@localhost:5432/ecommerce?schema=public"
   
   # Authentication
   NEXTAUTH_SECRET="your-nextauth-secret"
   NEXTAUTH_URL="http://localhost:3000"
   
   # Payment Processing
   STRIPE_SECRET_KEY="your-stripe-secret-key"
   STRIPE_WEBHOOK_SECRET="your-stripe-webhook-secret"
   STRIPE_PUBLIC_KEY="your-stripe-public-key"
   
   # AI Chatbot
   OPENAI_API_KEY="your-openai-api-key"
   ```

4. Set up the database:
   ```bash
   npx prisma migrate dev --name init
   # or
   yarn prisma migrate dev --name init
   ```

5. Seed the database with initial data (optional):
   ```bash
   npx prisma db seed
   # or
   yarn prisma db seed
   ```

6. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

7. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 🧪 Testing

Run the test suite with:

```bash
npm test
# or
yarn test
```

For end-to-end testing:

```bash
npm run test:e2e
# or
yarn test:e2e
```

## 🚢 Deployment

This project can be deployed on Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fsrijan816%2Fnextjs-ecommerce)

### Deployment Steps

1. Push your code to the GitHub repository
2. Connect your repository to Vercel
3. Configure environment variables in the Vercel dashboard
4. Deploy your application

## 🔄 Recent Updates

### v1.0.0 (March 2024)
- Initial release with core e-commerce functionality
- Responsive design for all devices
- Admin dashboard for product management
- User authentication and account management

## 🛠️ Troubleshooting

### Common Issues

**Database Connection Issues**
- Ensure your PostgreSQL server is running
- Verify your DATABASE_URL in the .env file is correct
- Check network connectivity to the database server

**Authentication Problems**
- Make sure NEXTAUTH_SECRET and NEXTAUTH_URL are properly set
- Clear browser cookies and try again
- Check for any console errors related to authentication

**API Errors**
- Verify all required environment variables are set
- Check the server logs for detailed error messages
- Ensure API endpoints are correctly formatted

## 👥 Contributing

We welcome contributions to NextCommerce! Here's how you can help:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add some amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

Please make sure to update tests as appropriate and adhere to the existing coding style.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

If you encounter any issues or have questions, please file an issue on the GitHub repository or contact the maintainers directly.
