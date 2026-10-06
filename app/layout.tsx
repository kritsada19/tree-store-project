import type { Metadata } from "next";
import { Noto_Sans_Thai } from "next/font/google";
import "./globals.css";

import { CartProvider, Navbar } from "@/components/Navbar";
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

            <button
              type="button"
              aria-label="Open chat"
              title="Chat with us"
              className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full border border-[#7fe7aa]/30 bg-[#7fe7aa] text-[#0d1711] shadow-[0_18px_38px_rgba(127,231,170,0.35)] transition hover:-translate-y-0.5 hover:scale-105"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
                aria-hidden="true"
              >
                <path d="M8 10h8M8 14h5M7 18.5l-2.5 2.5V7.2A2.2 2.2 0 0 1 6.7 5h10.6A2.2 2.2 0 0 1 19.5 7.2v7.6a2.2 2.2 0 0 1-2.2 2.2H7Z" />
              </svg>
            </button>
          </CartProvider>
        </Providers>
      </body>
    </html>
  );
}
