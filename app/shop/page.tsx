"use client";

import Image from "next/image";
import Link from "next/link";
import { Search, X } from "lucide-react";
import { useState } from "react";

import { useCart } from "@/components/Navbar";
import { products } from "@/lib/data/data";

export default function ShopPage() {
  const { addToCart } = useCart();
  const [searchQuery, setSearchQuery] = useState("");
  const normalizedQuery = searchQuery.trim().toLowerCase();
  const filteredProducts = products.filter((product) => {
    const searchableText = [
      product.name,
      product.botanicalName,
      product.description,
      ...(product.features ?? []),
      ...Object.values(product.care ?? {}),
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();

    return searchableText.includes(normalizedQuery);
  });

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

      <div className="mb-8 max-w-xl">
        <label htmlFor="shop-search" className="sr-only">
          ค้นหาสินค้า
        </label>
        <div className="flex items-center gap-3 rounded-full border border-[#1d2d22]/15 bg-white px-5 py-3 shadow-[0_8px_20px_rgba(29,45,34,0.04)] transition focus-within:border-[#1d4b35]/50 focus-within:ring-2 focus-within:ring-[#1d4b35]/10">
          <Search className="h-5 w-5 shrink-0 text-[#5d6a60]" aria-hidden="true" />
          <input
            id="shop-search"
            type="search"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            placeholder="ค้นหาชื่อต้นไม้ หรือวิธีดูแล..."
            className="min-w-0 flex-1 bg-transparent text-sm text-[#1d2d22] outline-none placeholder:text-[#879188]"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              aria-label="ล้างคำค้นหา"
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[#5d6a60] transition hover:bg-[#f0f3ee] hover:text-[#1d2d22]"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
          )}
        </div>
        {normalizedQuery && (
          <p className="mt-3 text-sm text-[#5d6a60]" aria-live="polite">
            พบ {filteredProducts.length} รายการ
          </p>
        )}
      </div>

      {filteredProducts.length > 0 ? (
        <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {filteredProducts.map((product) => (
            <article
              key={product.id}
              className="overflow-hidden rounded-[28px] border border-[#1d2d22]/10 bg-white/60 shadow-[0_10px_24px_rgba(29,45,34,0.03)] transition hover:-translate-y-1 hover:shadow-[0_20px_36px_rgba(29,45,34,0.08)]"
            >
              <Link href={`/shop/${product.id}`} >
                <div className="relative h-80 bg-linear-to-b from-[#355a41]/10 to-[#355a41]/5">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"

                  />

                </div></Link>

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
      ) : (
        <p className="rounded-2xl border border-[#1d2d22]/10 bg-white/60 px-6 py-12 text-center text-[#5d6a60]">
          ไม่พบสินค้าที่ตรงกับ “{searchQuery.trim()}” ลองค้นหาด้วยคำอื่นดูนะคะ
        </p>
      )}
    </main>
  );
}
