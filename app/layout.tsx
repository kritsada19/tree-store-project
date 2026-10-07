import type { Metadata } from "next";
import { Noto_Sans_Thai } from "next/font/google";
import "./globals.css";

import { CartProvider, Navbar } from "@/components/Navbar";
import { ChatWidget } from "@/components/ChatWidget";
import { Providers } from "./providers";

const notoSansThai = Noto_Sans_Thai({
  variable: "--font-noto-sans-thai",
  weight: "variable",
  subsets: ["thai", "latin"],
});

export const metadata: Metadata = {
  title: "Tree-Shop | Plant Store",
  description: "A calm, modern plant shop landing page with Google sign-in UI.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="th"
      className={`${notoSansThai.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Providers>
          <CartProvider>
            <div className="mx-auto w-full max-w-6xl px-4 pb-16 pt-6 sm:px-6 lg:px-8">
              <Navbar />
              <div className="pt-4">{children}</div>
            </div>

            <ChatWidget />
          </CartProvider>
        </Providers>
      </body>
    </html>
  );
}
