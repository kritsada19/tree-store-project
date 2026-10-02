export function Footer() {
  return (
    <footer className="mt-16 flex flex-col gap-4 border-t border-[#1d2d22]/10 pt-6 text-[#5d6a60] sm:flex-row sm:items-center sm:justify-between">
      <div>
        <span className="text-xl font-bold tracking-[-0.06em] text-[#1d2d22]">
          Tree-Shop
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
  );
}
