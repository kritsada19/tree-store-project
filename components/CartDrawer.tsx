import Image from "next/image";
import Link from "next/link";

import type { Product } from "@/lib/type/type";

type CartItem = Product & { quantity: number };

type CartDrawerProps = {
  isOpen: boolean;
  cart: CartItem[];
  total: number;
  onClose: () => void;
  onRemove: (productId: string) => void;
  onCheckout: () => void;
};

export function CartDrawer({
  isOpen,
  cart,
  total,
  onClose,
  onRemove,
  onCheckout,
}: CartDrawerProps) {
  return (
    <>
      <div
        className={`fixed inset-0 z-998 bg-[#161a17]/30 backdrop-blur-sm transition ${
          isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={onClose}
      />

      <aside
        className={`fixed right-0 top-0 z-999 flex h-screen w-full max-w-105 flex-col bg-white shadow-[-8px_0_44px_rgba(29,45,34,0.12)] transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-[#1d2d22]/10 px-6 py-6">
          <h2 className="text-2xl font-semibold tracking-[-0.06em] text-[#1d2d22]">
            ตะกร้าสินค้า
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="text-3xl leading-none text-[#1d2d22]"
            aria-label="ปิดตะกร้าสินค้า"
          >
            &times;
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6">
          {cart.length === 0 ? (
            <p className="text-[#5d6a60]">ยังไม่มีสินค้าในตะกร้า</p>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                className="mb-5 flex gap-4 border-b border-[#1d2d22]/10 pb-4 last:border-b-0 last:pb-0"
              >
                {/* แก้ไขเป็น item.id และใส่ onClick={onClose} เพื่อให้ปิดลิ้นชักตะกร้าเมื่อกดดูสินค้า */}
                <Link href={`/shop/${item.id}`} onClick={onClose}>
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={86}
                    height={104}
                    className="h-26 w-21.5 rounded-xl object-cover hover:opacity-80 transition"
                  />
                </Link>

                <div className="flex flex-1 flex-col justify-between gap-2">
                  <div>
                    <Link
                      href={`/shop/${item.id}`}
                      onClick={onClose}
                      className="text-base font-semibold text-[#1d2d22] hover:underline"
                    >
                      <h4>{item.name}</h4>
                    </Link>
                    <span className="text-sm text-[#5d6a60]">
                      ${item.price} × {item.quantity} ชิ้น
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => onRemove(item.id)}
                    className="self-start text-sm text-[#5d6a60] underline hover:text-red-600 transition"
                  >
                    ลบสินค้า
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="border-t border-[#1d2d22]/10 px-6 py-5">
          <div className="mb-5 flex items-center justify-between text-xl font-bold text-[#1d2d22]">
            <span>ยอดรวม</span>
            <span>${total}</span>
          </div>

          <button
            type="button"
            disabled={cart.length === 0}
            onClick={() => {
              onCheckout();
              onClose();
            }}
            className="w-full rounded-full bg-linear-to-r from-[#1d4b35] to-[#2f6e4d] px-4 py-3 text-sm font-bold text-white disabled:cursor-not-allowed disabled:opacity-50"
          >
            ดำเนินการชำระเงิน
          </button>
        </div>
      </aside>
    </>
  );
}