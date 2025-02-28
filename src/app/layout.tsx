import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NextCommerce - Modern eCommerce Platform",
  description: "A scalable eCommerce platform built with Next.js 15",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col">
          <header className="sticky top-0 z-50 border-b bg-white">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
              {/* Header content will go here */}
            </div>
          </header>
          <main className="flex-1">{children}</main>
          <footer className="border-t bg-white py-6">
            <div className="container mx-auto px-4">
              {/* Footer content will go here */}
              <div className="mt-8 border-t pt-6 text-center text-sm">
                <p>&copy; {new Date().getFullYear()} NextCommerce. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
} 