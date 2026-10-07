"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";

type ChatMessage = {
  id: number;
  sender: "visitor" | "shop";
  text: string;
};

const initialMessage: ChatMessage = {
  id: 0,
  sender: "shop",
  text: "สวัสดีค่ะ 🌿 สอบถามเรื่องต้นไม้ การดูแล การจัดส่ง หรือพิมพ์ “ล็อกอิน” เพื่อดูวิธีเข้าสู่ระบบได้เลยนะคะ",
};

function getReply(message: string) {
  const normalizedMessage = message.toLowerCase();

  if (/ล็อกอิน|ล็อคอิน|เข้าสู่ระบบ|ลงชื่อเข้าใช้|login|log in|sign in/.test(normalizedMessage)) {
    return "วิธีเข้าสู่ระบบ Tree-Shop:\n1. กด “ลงชื่อเข้าใช้ด้วย Google” ที่แถบเมนู หรือเข้าไปที่หน้าล็อกอิน\n2. เลือกบัญชี Google ที่ต้องการใช้\n3. ยืนยันการเข้าสู่ระบบ แล้วระบบจะพากลับมาที่หน้าแรกค่ะ";
  }

  if (/ราคา|ซื้อ|สินค้า|ต้นไม้|plant|price|shop/.test(normalizedMessage)) {
    return "เลือกชมต้นไม้และราคาได้ที่หน้าร้านค้าเลยค่ะ หากอยากให้ช่วยเลือกต้นไม้ บอกสภาพแสงหรือพื้นที่ที่ต้องการวางได้เลยนะคะ";
  }

  if (/ส่ง|จัดส่ง|delivery|shipping/.test(normalizedMessage)) {
    return "เราจัดส่งภายใน 48 ชั่วโมง และจัดส่งฟรีเมื่อซื้อครบ $60 ค่ะ หากมีคำถามเกี่ยวกับพื้นที่จัดส่ง ติดต่อทีมงานทางอีเมลได้เลยนะคะ";
  }

  if (/ดูแล|รดน้ำ|ใบเหลือง|แสง|care|water/.test(normalizedMessage)) {
    return "การดูแลขึ้นอยู่กับชนิดของต้นไม้และปริมาณแสงค่ะ บอกชื่อต้นไม้หรือส่งรายละเอียดอาการมาได้เลย หรือดูต้นไม้แต่ละชนิดได้ที่หน้าร้านค้าค่ะ";
  }

  if (/คำสั่งซื้อ|ออเดอร์|สถานะ|order/.test(normalizedMessage)) {
    return "สำหรับสอบถามสถานะคำสั่งซื้อ กรุณาส่งรายละเอียดไปที่ hello@tree-shop.com แล้วทีมงานจะช่วยตรวจสอบให้ค่ะ";
  }

  return "ขอบคุณที่สอบถามนะคะ แชตนี้ช่วยตอบคำถามเบื้องต้น หากต้องการคุยกับทีมงานโดยตรง สามารถไปที่หน้า “ติดต่อเรา” ได้ค่ะ";
}

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [draft, setDraft] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([initialMessage]);
  const messageEndRef = useRef<HTMLDivElement>(null);
  const nextMessageId = useRef(1);

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isOpen]);

  function sendMessage(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const text = draft.trim();
    if (!text) return;

    setMessages((currentMessages) => [
      ...currentMessages,
      { id: nextMessageId.current++, sender: "visitor", text },
      {
        id: nextMessageId.current++,
        sender: "shop",
        text: getReply(text),
      },
    ]);
    setDraft("");
  }

  return (
    <div className="fixed bottom-6 right-4 z-50 flex flex-col items-end sm:right-6">
      {isOpen && (
        <section
          id="chat-panel"
          aria-label="แชตกับ Tree-Shop"
          className="mb-4 flex max-h-[min(36rem,calc(100dvh-8rem))] w-[min(24rem,calc(100vw-2rem))] flex-col overflow-hidden rounded-3xl border border-[#1d2d22]/10 bg-[#fffdfa] shadow-[0_24px_70px_rgba(29,45,34,0.2)]"
        >
          <header className="flex items-center justify-between bg-[#1d4b35] px-5 py-4 text-white">
            <div>
              <h2 className="font-semibold">คุยกับ Tree-Shop</h2>
              <p className="mt-0.5 text-xs text-white/75">ระบบตอบคำถามเบื้องต้น</p>
            </div>
            <button
              type="button"
              aria-label="ปิดหน้าต่างแชต"
              onClick={() => setIsOpen(false)}
              className="flex h-9 w-9 items-center justify-center rounded-full text-2xl leading-none text-white/80 transition hover:bg-white/10 hover:text-white"
            >
              ×
            </button>
          </header>

          <div
            aria-live="polite"
            className="flex min-h-48 flex-1 flex-col gap-3 overflow-y-auto px-4 py-5"
          >
            {messages.map((message) => (
              <p
                key={message.id}
                className={`max-w-[88%] whitespace-pre-wrap rounded-2xl px-4 py-3 text-sm leading-6 ${
                  message.sender === "visitor"
                    ? "self-end rounded-br-md bg-[#1d4b35] text-white"
                    : "self-start rounded-bl-md bg-[#f0f3ee] text-[#1d2d22]"
                }`}
              >
                {message.text}
              </p>
            ))}
            <div ref={messageEndRef} />
          </div>

          <div className="border-t border-[#1d2d22]/10 px-4 py-3">
            <a
              href="/contact"
              className="mb-3 inline-flex text-xs font-semibold text-[#1d4b35] hover:underline"
            >
              ต้องการคุยกับเจ้าหน้าที่? ไปที่ติดต่อเรา
            </a>
            <form onSubmit={sendMessage} className="flex items-center gap-2">
              <label className="sr-only" htmlFor="chat-message">
                พิมพ์ข้อความ
              </label>
              <input
                id="chat-message"
                value={draft}
                onChange={(event) => setDraft(event.target.value)}
                placeholder="พิมพ์ข้อความ..."
                className="min-w-0 flex-1 rounded-full border border-[#1d2d22]/15 bg-white px-4 py-2.5 text-sm outline-none transition placeholder:text-[#879188] focus:border-[#1d4b35] focus:ring-2 focus:ring-[#1d4b35]/10"
              />
              <button
                type="submit"
                disabled={!draft.trim()}
                className="rounded-full bg-[#1d4b35] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#163b29] disabled:cursor-not-allowed disabled:opacity-50"
              >
                ส่ง
              </button>
            </form>
          </div>
        </section>
      )}

      <button
        type="button"
        aria-label={isOpen ? "ปิดแชต" : "เปิดแชต"}
        aria-expanded={isOpen}
        aria-controls="chat-panel"
        title="Chat with us"
        onClick={() => setIsOpen((open) => !open)}
        className="flex h-14 w-14 items-center justify-center rounded-full border border-white/15 bg-linear-to-br from-[#1d4b35] to-[#2f6e4d] text-white shadow-[0_18px_38px_rgba(29,75,53,0.32)] transition hover:-translate-y-0.5 hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1d4b35]"
      >
        {isOpen ? (
          <span aria-hidden="true" className="text-3xl leading-none">
            ×
          </span>
        ) : (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
            aria-hidden="true"
          >
            <path d="M8 10h8M8 14h5M7 18.5l-2.5 2.5V7.2A2.2 2.2 0 0 1 6.7 5h10.6A2.2 2.2 0 0 1 19.5 7.2v7.6a2.2 2.2 0 0 1-2.2 2.2H7Z" />
          </svg>
        )}
      </button>
    </div>
  );
}
