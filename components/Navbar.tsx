"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import { createContext, useContext, useMemo, useState } from "react";

import { CartDrawer } from "@/components/CartDrawer";
import type { Product } from "@/lib/type/type";

type NavbarProps = {
  navItems?: string[];
};

type CartItem = Product & { quantity: number };

type CartContextValue = {
  cart: CartItem[];
  total: number;
  cartCount: number;
  isCartOpen: boolean;
  setIsCartOpen: (value: boolean) => void;
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  resetCart: () => void;
};

const CartContext = createContext<CartContextValue | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const total = useMemo(
    () => cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cart]
  );

  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);

      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }

      return [...prevCart, { ...product, quantity: 1 }];
    });

    setIsCartOpen(true);
  };

  const removeFromCart = (productId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const resetCart = () => {
    setCart([]);
    setIsCartOpen(false);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        total,
        cartCount,
        isCartOpen,
        setIsCartOpen,
        addToCart,
        removeFromCart,
        resetCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }

  return context;
}

export function Navbar({
  navItems = ["Home", "Shop", "About"],
}: NavbarProps) {
  const { data: session, status } = useSession();
  const pathname = usePathname();
  const { cart, total, cartCount, isCartOpen, setIsCartOpen, removeFromCart, resetCart } =
    useCart();

  const activeItem =
    navItems.find((item) => {
      const href = item === "Home" ? "/" : item === "Shop" ? "/shop" : "#";
      return href === pathname || (item === "Home" && pathname === "/");
    }) ?? "Home";

  return (
    <>
      <header className="sticky top-4 z-20 mb-10 flex flex-wrap items-center justify-between gap-4 rounded-full border border-[#1d2d22]/10 bg-white/70 px-5 py-3 shadow-[0_10px_30px_rgba(29,45,34,0.05)] backdrop-blur-xl sm:px-6">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br from-[#1d4b35] to-[#2f6e4d] text-sm font-bold text-white">
            T
          </span>
          <span className="text-xl font-bold tracking-[-0.06em] text-[#1d2d22]">
            Tree-Shop
          </span>
        </Link>

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-4 px-2 md:flex lg:gap-6"
        >
          {navItems.map((item) => {
            const href = item === "Home" ? "/" : item === "Shop" ? "/shop" : "#";
            const isActive = activeItem === item;

            return (
              <Link
                key={item}
                href={href}
                className={`relative rounded-full px-3 py-1.5 text-sm font-medium tracking-[-0.01em] transition-all duration-200 ease-out ${
                  isActive
                    ? "scale-105 -translate-y-0.5 bg-[#edf7ee] text-[#1d2d22] shadow-[0_6px_18px_rgba(29,45,34,0.04)]"
                    : "text-[#5d6a60] hover:bg-[#f3f7f4] hover:text-[#1d2d22]"
                }`}
              >
                {item}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          {status === "authenticated" && session?.user?.email ? (
            <div className="flex items-center gap-2">
              <div
                className="inline-flex max-w-55 items-center gap-2 truncate rounded-full border border-[#1d4b35]/10 bg-[#eaf5ed] px-4 py-2 text-sm font-semibold text-[#1d4b35] shadow-[0_8px_18px_rgba(29,45,34,0.04)]"
                title={session.user.email}
              >
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#1d4b35] text-[10px] font-bold text-white">
                  {session.user.email.charAt(0).toUpperCase()}
                </span>
                <span className="truncate">{session.user.email}</span>
              </div>

              <button
                type="button"
                onClick={() => signOut({ callbackUrl: "/" })}
                className="inline-flex items-center justify-center rounded-full border border-[#1d2d22]/10 bg-white px-3 py-2 text-xs font-bold text-[#1d2d22] transition hover:-translate-y-0.5"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link
              href="/login"
              className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-white px-4 py-2 text-sm font-semibold text-[#1d2d22] shadow-[0_8px_18px_rgba(0,0,0,0.04)] transition hover:-translate-y-0.5"
            >
              <span
                className="flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-extrabold text-white"
                style={{
                  background:
                    "conic-gradient(from 180deg, #4285f4 0 25%, #db4437 25% 50%, #f4b400 50% 75%, #0f9d58 75% 100%)",
                }}
                aria-hidden="true"
              >
                G
              </span>
              Login with Google
            </Link>
          )}
        </div>
      </header>

      <CartDrawer
        isOpen={isCartOpen}
        cart={cart}
        total={total}
        onClose={() => setIsCartOpen(false)}
        onRemove={removeFromCart}
        onCheckout={resetCart}
      />
    </>
  );
}

export const Header = Navbar;
