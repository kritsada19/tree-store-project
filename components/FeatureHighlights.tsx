const highlights = [
  {
    title: "จัดส่งฟรี",
    description: "เมื่อซื้อครบ $60",
  },
  {
    title: "คู่มือดูแลต้นไม้",
    description: "พร้อมเคล็ดลับที่เหมาะกับทุกมุมบ้าน",
  },
  {
    title: "ชำระเงินอย่างปลอดภัย",
    description: "ผ่านผู้ให้บริการชำระเงินที่เชื่อถือได้",
  },
];

export function FeatureHighlights() {
  return (
    <section className="mt-4 grid gap-4 rounded-[28px] border border-[#1d2d22]/10 bg-white/40 p-4 md:grid-cols-3">
      {highlights.map((item) => (
        <div key={item.title} className="flex flex-col gap-1 rounded-2xl p-3">
          <strong className="text-base font-bold text-[#1d2d22]">{item.title}</strong>
          <span className="text-sm text-[#5d6a60]">{item.description}</span>
        </div>
      ))}
    </section>
  );
}
