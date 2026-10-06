import Image from "next/image";
import Link from "next/link";

import type { Product } from "@/lib/type/type";

type ProductGridProps = {
    products: Product[];
    onAddToCart: (product: Product) => void;
};

export function ProductGrid({ products, onAddToCart }: ProductGridProps) {
    return (
        <>
            <section id="collection" className="mt-16 flex items-end justify-between gap-4">
                <div>
                    <span className="inline-block rounded-full bg-[#dfeee5] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-[#1d4b35]">
                        สินค้าแนะนำ
                    </span>
                    <h2 className="mt-3 text-3xl font-semibold tracking-[-0.06em] text-[#1d2d22] sm:text-5xl">
                        เติมความสดชื่นให้ทุกมุมบ้าน
                    </h2>
                </div>
            </section>

            <section className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {products.map((product) => (
                    <article
                        key={product.id}
                        className="overflow-hidden rounded-[28px] border border-[#1d2d22]/10 bg-white/55 shadow-[0_10px_24px_rgba(29,45,34,0.03)] transition hover:-translate-y-1 hover:shadow-[0_20px_36px_rgba(29,45,34,0.08)]"
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
                                onClick={() => onAddToCart(product)}
                                className="inline-flex items-center justify-center rounded-full border border-[#1d2d22]/10 bg-white px-4 py-2 text-sm font-bold text-[#1d2d22] transition hover:-translate-y-0.5"
                            >
                                เพิ่มลงตะกร้า
                            </button>
                        </div>
                    </article>
                ))}
            </section>
        </>
    );
}
