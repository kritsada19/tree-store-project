"use client";

import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";

import { products } from "@/lib/data/data";

export function HeroSection() {
  const { status } = useSession();
  const isAuthenticated = status === "authenticated";

  return (
    <section className="grid items-center gap-10 pb-10 pt-10 lg:grid-cols-[1.15fr_0.85fr]">
      <div>
        <span className="inline-block rounded-full bg-[#dfeee5] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-[#1d4b35]">
          New season collection
        </span>
        <h1 className="mt-5 text-5xl font-semibold leading-[0.9] tracking-[-0.08em] text-[#1d2d22] sm:text-6xl lg:text-7xl">
          ต้นไม้ไม่เหม็นเเต่เวียขี้เหม็น
        </h1>
        <p className="mt-5 max-w-xl text-base leading-7 text-[#5d6a60] sm:text-lg">
          Curated indoor plants, statement pots, and easy-care essentials designed
          for a greener, healthier lifestyle.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#collection"
            className="inline-flex items-center justify-center rounded-full bg-linear-to-r from-[#1d4b35] to-[#2f6e4d] px-6 py-3 text-sm font-bold text-white shadow-[0_18px_30px_rgba(36,86,57,0.2)] transition hover:-translate-y-0.5"
          >
            Shop collection
          </a>

          {!isAuthenticated && (
            <Link
              href="/login"
              className="inline-flex items-center justify-center rounded-full border border-[#1d2d22]/10 bg-white/80 px-6 py-3 text-sm font-bold text-[#1d2d22] transition hover:-translate-y-0.5"
            >
              Continue with Google
            </Link>
          )}
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

      <div className="relative flex min-h-105 items-center justify-center lg:min-h-140">
        <div className="absolute left-6 top-8 z-10 rounded-full border border-[#1d2d22]/10 bg-white/80 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.12em] text-[#1d2d22]">
          Best seller
        </div>

        <div className="relative h-105 w-full max-w-120 overflow-hidden rounded-4xl bg-linear-to-b from-[#6d9370]/20 to-[#6d9370]/5 shadow-[0_24px_50px_rgba(29,45,34,0.08)] sm:h-130">
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
  );
}
