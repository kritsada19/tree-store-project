"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { products } from "../lib/data/data";
import { Product } from "../lib/type/type";

const navItems = ["Home", "Shop", "Collections", "About", "Journal"];

export default function Home() {
  const [cart, setCart] = useState<(Product & { quantity: number })[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (productId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <div className="mx-auto max-w-6xl px-4 pb-16 pt-6 sm:px-6 lg:px-8">
        <header className="sticky top-4 z-20 mb-10 flex flex-wrap items-center justify-between gap-4 rounded-full border border-[#1d2d22]/10 bg-white/70 px-5 py-3 shadow-[0_10px_30px_rgba(29,45,34,0.05)] backdrop-blur-xl sm:px-6">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#1d4b35] to-[#2f6e4d] text-sm font-bold text-white">
              V
            </span>
            <span className="text-xl font-bold tracking-[-0.06em] text-[#1d2d22]">
              Verdant
            </span>
          </div>

          <nav aria-label="Main navigation" className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <a key={item} href="#" className="text-sm text-[#5d6a60] transition hover:text-[#1d2d22]">
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setIsCartOpen(true)}
              aria-label="Open cart"
              className="relative inline-flex items-center gap-2 rounded-full border border-[#1d2d22]/10 bg-white/80 px-4 py-2 text-sm font-medium text-[#1d2d22] transition hover:-translate-y-0.5"
            >
              Cart
              {cartCount > 0 && (
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#2f6e4d] text-[10px] font-bold text-white">
                  {cartCount}
                </span>
              )}
            </button>

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
          </div>
        </header>

        <main className="pt-4">
          <section className="grid items-center gap-10 pb-10 pt-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <span className="inline-block rounded-full bg-[#dfeee5] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-[#1d4b35]">
                New season collection
              </span>
              <h1 className="mt-5 text-5xl font-semibold leading-[0.9] tracking-[-0.08em] text-[#1d2d22] sm:text-6xl lg:text-7xl">
                Bring life and calm to your space.
              </h1>
              <p className="mt-5 max-w-xl text-base leading-7 text-[#5d6a60] sm:text-lg">
                Curated indoor plants, statement pots, and easy-care essentials
                designed for a greener, healthier lifestyle.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#collection"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#1d4b35] to-[#2f6e4d] px-6 py-3 text-sm font-bold text-white shadow-[0_18px_30px_rgba(36,86,57,0.2)] transition hover:-translate-y-0.5"
                >
                  Shop collection
                </a>
                <Link
                  href="/login"
                  className="inline-flex items-center justify-center rounded-full border border-[#1d2d22]/10 bg-white/80 px-6 py-3 text-sm font-bold text-[#1d2d22] transition hover:-translate-y-0.5"
                >
                  Continue with Google
                </Link>
              </div>

              <div className="mt-9 flex flex-wrap gap-8">
                <div className="flex flex-col gap-1">
                  <strong className="text-2xl font-bold text-[#1d2d22]">12k+</strong>
                  <span className="text-sm text-[#5d6a60]">happy plants</span>
                </div>
                <div className="flex flex-col gap-1">
                  <strong className="text-2xl font-bold text-[#1d2d22]">4.9/5</strong>
                  <span className="text-sm text-[#5d6a60]">customer love</span>
                </div>
                <div className="flex flex-col gap-1">
                  <strong className="text-2xl font-bold text-[#1d2d22]">48h</strong>
                  <span className="text-sm text-[#5d6a60]">dispatch time</span>
                </div>
              </div>
            </div>

            <div className="relative flex min-h-[420px] items-center justify-center lg:min-h-[560px]">
              <div className="absolute left-6 top-8 z-10 rounded-full border border-[#1d2d22]/10 bg-white/80 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.12em] text-[#1d2d22]">
                Best seller
              </div>

              <div className="relative h-[420px] w-full max-w-[480px] overflow-hidden rounded-[32px] bg-gradient-to-b from-[#6d9370]/20 to-[#6d9370]/5 shadow-[0_24px_50px_rgba(29,45,34,0.08)] sm:h-[520px]">
                <Image
                  src={products[0].image}
                  alt={products[0].name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              <div className="absolute bottom-6 right-6 flex flex-col gap-1 rounded-2xl border border-[#1d2d22]/10 bg-white/85 px-4 py-3 shadow-[0_12px_28px_rgba(29,45,34,0.08)] backdrop-blur-sm">
                <span className="text-xs text-[#5d6a60]">Monstera Deliciosa</span>
                <strong className="text-2xl font-bold text-[#1d2d22]">$48</strong>
              </div>
            </div>
          </section>

          <section className="mt-4 grid gap-4 rounded-[28px] border border-[#1d2d22]/10 bg-white/40 p-4 md:grid-cols-3">
            <div className="flex flex-col gap-1 rounded-2xl p-3">
              <strong className="text-base font-bold text-[#1d2d22]">Free delivery</strong>
              <span className="text-sm text-[#5d6a60]">on orders over $60</span>
            </div>
            <div className="flex flex-col gap-1 rounded-2xl p-3">
              <strong className="text-base font-bold text-[#1d2d22]">Plant care guide</strong>
              <span className="text-sm text-[#5d6a60]">tailored tips for every room</span>
            </div>
            <div className="flex flex-col gap-1 rounded-2xl p-3">
              <strong className="text-base font-bold text-[#1d2d22]">Secure checkout</strong>
              <span className="text-sm text-[#5d6a60]">with trusted payment partners</span>
            </div>
          </section>

          <section id="collection" className="mt-16 flex items-end justify-between gap-4">
            <div>
              <span className="inline-block rounded-full bg-[#dfeee5] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-[#1d4b35]">
                Featured picks
              </span>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.06em] text-[#1d2d22] sm:text-5xl">
                Fresh favorites for every corner.
              </h2>
            </div>
            <Link href="/login" className="text-sm font-bold text-[#1d4b35]">
              Member login
            </Link>
          </section>

          <section className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {products.map((product) => (
              <article
                key={product.id}
                className="overflow-hidden rounded-[28px] border border-[#1d2d22]/10 bg-white/55 shadow-[0_10px_24px_rgba(29,45,34,0.03)] transition hover:-translate-y-1 hover:shadow-[0_20px_36px_rgba(29,45,34,0.08)]"
              >
                <div className="relative h-80 bg-gradient-to-b from-[#355a41]/10 to-[#355a41]/5">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                <div className="flex items-end justify-between gap-4 p-4 sm:p-5">
                  <div>
                    <h3 className="text-xl font-semibold tracking-[-0.04em] text-[#1d2d22]">
                      {product.name}
                    </h3>
                    <p className="mt-1 text-sm font-semibold text-[#5d6a60]">
                      ${product.price}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => addToCart(product)}
                    className="inline-flex items-center justify-center rounded-full border border-[#1d2d22]/10 bg-white px-4 py-2 text-sm font-bold text-[#1d2d22] transition hover:-translate-y-0.5"
                  >
                    Add
                  </button>
                </div>
              </article>
            ))}
          </section>
        </main>

        <footer className="mt-16 flex flex-col gap-4 border-t border-[#1d2d22]/10 pt-6 text-[#5d6a60] sm:flex-row sm:items-center sm:justify-between">
          <div>
            <span className="text-xl font-bold tracking-[-0.06em] text-[#1d2d22]">
              Verdant
            </span>
            <p className="mt-2">Thoughtful plants for a calmer home.</p>
          </div>

          <div className="flex flex-wrap gap-5">
            <a href="#" className="text-sm transition hover:text-[#1d2d22]">
              Shipping
            </a>
            <a href="#" className="text-sm transition hover:text-[#1d2d22]">
              Support
            </a>
            <a href="#" className="text-sm transition hover:text-[#1d2d22]">
              Instagram
            </a>
          </div>
        </footer>
      </div>

      <div
        className={`fixed inset-0 z-[998] bg-[#161a17]/30 backdrop-blur-sm transition ${
          isCartOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setIsCartOpen(false)}
      />

      <aside
        className={`fixed right-0 top-0 z-[999] flex h-screen w-full max-w-[420px] flex-col bg-white shadow-[-8px_0_44px_rgba(29,45,34,0.12)] transition-transform duration-300 ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-[#1d2d22]/10 px-6 py-6">
          <h2 className="text-2xl font-semibold tracking-[-0.06em] text-[#1d2d22]">
            Your Cart
          </h2>
          <button
            type="button"
            onClick={() => setIsCartOpen(false)}
            className="text-3xl leading-none text-[#1d2d22]"
          >
            &times;
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6">
          {cart.length === 0 ? (
            <p className="text-[#5d6a60]">Your cart is empty.</p>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="mb-5 flex gap-4 border-b border-[#1d2d22]/10 pb-4 last:border-b-0 last:pb-0">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={86}
                  height={104}
                  className="h-[104px] w-[86px] rounded-xl object-cover"
                />

                <div className="flex flex-1 flex-col justify-between gap-2">
                  <div>
                    <h4 className="text-base font-semibold text-[#1d2d22]">
                      {item.name}
                    </h4>
                    <span className="text-sm text-[#5d6a60]">
                      ${item.price} x {item.quantity}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => removeFromCart(item.id)}
                    className="self-start text-sm text-[#5d6a60] underline"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="border-t border-[#1d2d22]/10 px-6 py-5">
          <div className="mb-5 flex items-center justify-between text-xl font-bold text-[#1d2d22]">
            <span>Total</span>
            <span>${total}</span>
          </div>

          <button
            type="button"
            disabled={cart.length === 0}
            onClick={() => alert("Checkout not implemented in demo")}
            className="w-full rounded-full bg-gradient-to-r from-[#1d4b35] to-[#2f6e4d] px-4 py-3 text-sm font-bold text-white disabled:cursor-not-allowed disabled:opacity-50"
          >
            Checkout
          </button>
        </div>
      </aside>
    </>
  );
}
