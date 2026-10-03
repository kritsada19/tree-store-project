import Image from "next/image";

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
        className={`fixed inset-0 z-[998] bg-[#161a17]/30 backdrop-blur-sm transition ${
          isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={onClose}
      />

      <aside
        className={`fixed right-0 top-0 z-[999] flex h-screen w-full max-w-[420px] flex-col bg-white shadow-[-8px_0_44px_rgba(29,45,34,0.12)] transition-transform duration-300 ${
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
                <Image
                  src={item.image}
                  alt={item.name}
                  width={86}
                  height={104}
                  className="h-[104px] w-[86px] rounded-xl object-cover"
                />

                <div className="flex flex-1 flex-col justify-between gap-2">
                  <div>
                    <h4 className="text-base font-semibold text-[#1d2d22]">{item.name}</h4>
                    <span className="text-sm text-[#5d6a60]">
                      ${item.price} × {item.quantity} ชิ้น
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => onRemove(item.id)}
                    className="self-start text-sm text-[#5d6a60] underline"
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
            className="w-full rounded-full bg-gradient-to-r from-[#1d4b35] to-[#2f6e4d] px-4 py-3 text-sm font-bold text-white disabled:cursor-not-allowed disabled:opacity-50"
          >
            ดำเนินการชำระเงิน
          </button>
        </div>
      </aside>
    </>
  );
}
