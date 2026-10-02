const highlights = [
  {
    title: "Free delivery",
    description: "on orders over $60",
  },
  {
    title: "Plant care guide",
    description: "tailored tips for every room",
  },
  {
    title: "Secure checkout",
    description: "with trusted payment partners",
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
