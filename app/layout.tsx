import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { CartProvider, Navbar } from "@/components/Navbar";
import { Providers } from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tree-Shop | Plant Store",
  description: "A calm, modern plant shop landing page with Google sign-in UI.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Providers>
          <CartProvider>
            <div className="mx-auto w-full max-w-6xl px-4 pb-16 pt-6 sm:px-6 lg:px-8">
              <Navbar />
              <div className="pt-4">{children}</div>
            </div>
          </CartProvider>
        </Providers>
      </body>
    </html>
  );
}
