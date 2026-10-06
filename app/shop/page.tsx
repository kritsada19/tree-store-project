"use client";

import Image from "next/image";
import Link from "next/link";

import { useCart } from "@/components/Navbar";
import { products } from "@/lib/data/data";

export default function ShopPage() {
  const { addToCart } = useCart();

  return (
    <main className="mx-auto max-w-6xl px-4 pb-16 pt-6 sm:px-6 lg:px-8">
      <header className="mb-10 flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#1d4b35]">
            Shop all
          </p>
          <h1 className="mt-2 text-4xl font-semibold tracking-[-0.08em] text-[#1d2d22] md:text-5xl">
            Tree-Shop collection
          </h1>
        </div>

        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-full border border-[#1d2d22]/10 bg-white px-5 py-2.5 text-sm font-bold text-[#1d2d22] shadow-[0_10px_24px_rgba(29,45,34,0.03)] transition hover:-translate-y-0.5"
        >
          กลับหน้าแรก
        </Link>
      </header>

      <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {products.map((product) => (
          <article
            key={product.id}
            className="overflow-hidden rounded-[28px] border border-[#1d2d22]/10 bg-white/60 shadow-[0_10px_24px_rgba(29,45,34,0.03)] transition hover:-translate-y-1 hover:shadow-[0_20px_36px_rgba(29,45,34,0.08)]"
          >
            <div className="relative h-80 bg-linear-to-b from-[#355a41]/10 to-[#355a41]/5">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>

            <div className="flex items-end justify-between gap-4 p-5">
              <div>
                <h2 className="text-xl font-semibold tracking-[-0.04em] text-[#1d2d22]">
                  {product.name}
                </h2>
                <p className="mt-1 text-sm font-semibold text-[#5d6a60]">
                  ${product.price}
                </p>
              </div>

              <button
                type="button"
                onClick={() => addToCart(product)}
                className="inline-flex items-center justify-center rounded-full border border-[#1d2d22]/10 bg-white px-4 py-2 text-sm font-bold text-[#1d2d22] transition hover:-translate-y-0.5"
              >
                เพิ่มลงในตะกร้า
              </button>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
