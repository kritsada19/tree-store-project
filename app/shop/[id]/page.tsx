"use client";

import { use, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Sun,
  Droplets,
  Wind,
  ShieldCheck,
  ShoppingBag,
  CheckCircle2,
  Plus,
  Minus,
} from "lucide-react";
import { useCart } from "@/components/Navbar"; // ปรับ path ตามโครงสร้างโปรเจกต์ของคุณ
import { products } from "@/lib/data/data"; // ปรับ path ไปยังไฟล์ products ของคุณ

export default function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = use(params);
  const { id } = resolvedParams;
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  // ค้นหาต้นไม้ตาม id (เช่น "p1", "p2") หากไม่เจอให้ใช้ต้นไม้ชิ้นแรกเป็น fallback
  const product = products.find((p) => p.id === id) || products[0];

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F3EC] text-[#1A1A1A] px-4 py-8 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* ปุ่มย้อนกลับ */}
        <Link
          href="/shop"
          className="inline-flex items-center gap-2 text-sm text-[#5d6a60] hover:text-[#1d2d22] transition mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          ย้อนกลับไปร้านค้า
        </Link>

        {/* ส่วนแสดงรายละเอียดสินค้า */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* ฝั่งซ้าย: รูปภาพต้นไม้ */}
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-black/5 flex items-center justify-center">
            <div className="relative w-full h-95 md:h-120 rounded-2xl overflow-hidden bg-[#E8E4D9]">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                priority
              />
            </div>
          </div>

          {/* ฝั่งขวา: ข้อมูลและปุ่มสั่งซื้อ */}
          <div className="flex flex-col gap-6">
            <div>
              {product.botanicalName && (
                <p className="text-xs font-semibold uppercase tracking-wider text-[#2f6e4d] mb-1">
                  {product.botanicalName}
                </p>
              )}
              <h1 className="text-3xl md:text-4xl font-bold text-[#1d2d22]">
                {product.name}
              </h1>
              <p className="text-2xl font-bold text-[#1d2d22] mt-3">
                ${product.price}
              </p>
            </div>

            {product.description && (
              <p className="text-sm text-gray-600 leading-relaxed">
                {product.description}
              </p>
            )}

            {/* คุณสมบัติเด่น */}
            {product.features && product.features.length > 0 && (
              <div className="space-y-2">
                {product.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 text-xs md:text-sm text-gray-700"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#2f6e4d] shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            )}

            {/* ตัวเลือกจำนวน & ปุ่มใส่ตะกร้า */}
            <div className="pt-4 border-t border-gray-200 flex flex-wrap items-center gap-4">
              <div className="flex items-center border border-gray-300 bg-white rounded-full px-3 py-1.5 shadow-sm">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-7 h-7 flex items-center justify-center font-bold text-gray-600 hover:text-black transition"
                  aria-label="ลดจำนวน"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-8 text-center font-semibold text-sm">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-7 h-7 flex items-center justify-center font-bold text-gray-600 hover:text-black transition"
                  aria-label="เพิ่มจำนวน"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                className="flex-1 min-w-50 flex items-center justify-center gap-2 bg-[#1d4b35] hover:bg-[#163828] text-white py-3 px-6 rounded-full font-semibold text-sm shadow-md transition transform active:scale-95"
              >
                <ShoppingBag className="w-4 h-4" />
                เพิ่มลงในตะกร้า (${product.price * quantity})
              </button>
            </div>

            {/* คำแนะนำการดูแล (Care Guide) */}
            {product.care && (
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 border border-black/5 space-y-4 mt-2">
                <h3 className="font-bold text-sm text-[#1d2d22] flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#2f6e4d]" />
                  คู่มือการดูแลต้นไม้
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div className="bg-[#F5F3EC] p-3 rounded-xl flex flex-col gap-1">
                    <div className="flex items-center gap-1.5 font-bold text-gray-700">
                      <Sun className="w-3.5 h-3.5 text-amber-500" /> แสงแดด
                    </div>
                    <span className="text-gray-600">{product.care.light}</span>
                  </div>

                  <div className="bg-[#F5F3EC] p-3 rounded-xl flex flex-col gap-1">
                    <div className="flex items-center gap-1.5 font-bold text-gray-700">
                      <Droplets className="w-3.5 h-3.5 text-blue-500" /> การรดน้ำ
                    </div>
                    <span className="text-gray-600">{product.care.water}</span>
                  </div>

                  <div className="bg-[#F5F3EC] p-3 rounded-xl flex flex-col gap-1">
                    <div className="flex items-center gap-1.5 font-bold text-gray-700">
                      <Wind className="w-3.5 h-3.5 text-teal-500" /> อากาศ/ความชื้น
                    </div>
                    <span className="text-gray-600">
                      {product.care.humidity}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}