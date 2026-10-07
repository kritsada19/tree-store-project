import Link from "next/link";

import { Footer } from "@/components/Footer";

export default function ContactPage() {
    return (
        <main className="mx-auto max-w-5xl pb-8 pt-6">
            <header className="mb-10 max-w-2xl">
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#1d4b35]">
                    เราพร้อมช่วยคุณ
                </p>
                <h1 className="mt-3 text-4xl font-semibold text-[#1d2d22] sm:text-5xl">
                    ติดต่อ Tree-Shop
                </h1>
                <p className="mt-4 max-w-xl leading-7 text-[#5d6a60]">
                    มีคำถามเรื่องต้นไม้ การดูแล หรือคำสั่งซื้อ ฝากข้อความไว้ได้เลย
                    เราพร้อมช่วยหาคำตอบให้คุณ
                </p>
            </header>

            <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
                <section className="flex flex-col justify-between rounded-3xl bg-[#1d4b35] p-7 text-white sm:p-9">
                    <div>
                        <p className="text-sm font-semibold text-white/70">ช่องทางติดต่อ</p>
                        <h2 className="mt-3 text-2xl font-semibold">คุยกับเราได้ที่นี่</h2>

                        <a
                            href="mailto:hello@tree-shop.com"
                            className="mt-8 inline-flex flex-col gap-1 rounded-xl border border-white/20 px-4 py-3 transition hover:bg-white/10"
                        >
                            <span className="text-xs text-white/65">อีเมล</span>
                            <span className="font-semibold">hello@tree-shop.com</span>
                        </a>
                    </div>

                    <div className="mt-12 border-t border-white/20 pt-6">
                        <p className="text-sm font-semibold text-white/80">เราช่วยเรื่องอะไรได้บ้าง</p>
                        <ul className="mt-4 space-y-3 text-sm text-white/75">
                            <li>เลือกต้นไม้ให้เหมาะกับพื้นที่และแสง</li>
                            <li>วิธีดูแลต้นไม้และแก้ปัญหาเบื้องต้น</li>
                            <li>สอบถามสถานะคำสั่งซื้อและการจัดส่ง</li>
                        </ul>
                    </div>
                </section>

                <section className="rounded-3xl border border-[#1d2d22]/10 bg-white/75 p-6 shadow-[0_10px_24px_rgba(29,45,34,0.04)] sm:p-9">
                    <h2 className="text-2xl font-semibold text-[#1d2d22]">ส่งข้อความถึงเรา</h2>
                    <p className="mt-2 text-sm leading-6 text-[#5d6a60]">
                        กรอกข้อมูลด้านล่าง แล้วเราจะเปิดอีเมลฉบับร่างให้คุณส่งถึงทีมงาน
                    </p>

                    <form
                        action="mailto:hello@tree-shop.com"
                        method="post"
                        encType="text/plain"
                        className="mt-7 space-y-5"
                    >
                        <div className="grid gap-5 sm:grid-cols-2">
                            <label className="space-y-2 text-sm font-semibold text-[#1d2d22]">
                                ชื่อ
                                <input
                                    name="ชื่อ"
                                    type="text"
                                    autoComplete="name"
                                    required
                                    className="w-full rounded-xl border border-[#1d2d22]/15 bg-white px-4 py-3 font-normal outline-none transition placeholder:text-[#879188] focus:border-[#1d4b35] focus:ring-2 focus:ring-[#1d4b35]/10"
                                    placeholder="ชื่อของคุณ"
                                />
                            </label>
                            <label className="space-y-2 text-sm font-semibold text-[#1d2d22]">
                                อีเมลสำหรับติดต่อกลับ
                                <input
                                    name="อีเมล"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="w-full rounded-xl border border-[#1d2d22]/15 bg-white px-4 py-3 font-normal outline-none transition placeholder:text-[#879188] focus:border-[#1d4b35] focus:ring-2 focus:ring-[#1d4b35]/10"
                                    placeholder="you@example.com"
                                />
                            </label>
                        </div>

                        <label className="block space-y-2 text-sm font-semibold text-[#1d2d22]">
                            หัวข้อ
                            <select
                                name="หัวข้อ"
                                className="w-full rounded-xl border border-[#1d2d22]/15 bg-white px-4 py-3 font-normal outline-none transition focus:border-[#1d4b35] focus:ring-2 focus:ring-[#1d4b35]/10"
                            >
                                <option>สอบถามสินค้า</option>
                                <option>วิธีดูแลต้นไม้</option>
                                <option>คำสั่งซื้อและการจัดส่ง</option>
                                <option>อื่น ๆ</option>
                            </select>
                        </label>

                        <label className="block space-y-2 text-sm font-semibold text-[#1d2d22]">
                            ข้อความ
                            <textarea
                                name="ข้อความ"
                                rows={5}
                                required
                                className="w-full resize-y rounded-xl border border-[#1d2d22]/15 bg-white px-4 py-3 font-normal leading-6 outline-none transition placeholder:text-[#879188] focus:border-[#1d4b35] focus:ring-2 focus:ring-[#1d4b35]/10"
                                placeholder="พิมพ์ข้อความที่ต้องการสอบถาม"
                            />
                        </label>

                        <button
                            type="submit"
                            className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[#1d4b35] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#163b29] sm:w-auto"
                        >
                            เขียนอีเมลถึงเรา
                        </button>
                    </form>
                </section>
            </div>

            <div className="mt-8 text-sm text-[#5d6a60]">
                <Link href="/shop" className="font-semibold text-[#1d4b35] hover:underline">
                    เลือกชมต้นไม้ในร้าน
                </Link>
            </div>

            <Footer />
        </main>
    );
}