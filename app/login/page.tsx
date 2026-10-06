"use client";

import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function LoginPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      router.replace("/");
    }
  }, [router, status]);

  const handleGoogleLogin = async () => {
    await signIn("google", { callbackUrl: "/" });
  };

  if (status === "loading") {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[radial-gradient(circle_at_top,rgba(119,169,138,0.2),transparent_30%),#f8f4ef] px-4 py-10">
        <div className="rounded-full border border-[#1d2d22]/10 bg-white/80 px-6 py-3 text-sm font-medium text-[#1d2d22] shadow-[0_24px_50px_rgba(29,45,34,0.08)] backdrop-blur-sm">
          กำลังโหลดเซสชัน...
        </div>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[radial-gradient(circle_at_top,rgba(119,169,138,0.2),transparent_30%),#f8f4ef] px-4 py-10">
      <div className="w-full max-w-md rounded-[28px] border border-[#1d2d22]/10 bg-white/80 p-8 shadow-[0_24px_50px_rgba(29,45,34,0.08)] backdrop-blur-sm">
        <span className="inline-block rounded-full bg-[#dfeee5] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-[#1d4b35]">
          ยินดีต้อนรับกลับมา
        </span>
        <h1 className="mt-4 text-4xl font-semibold tracking-[-0.08em] text-[#1d2d22]">
          {session
            ? `สวัสดี${session.user?.name ? ` คุณ${session.user.name}` : ""}`
            : "เข้าสู่ระบบ Tree-Shop"}
        </h1>
        <p className="mt-3 text-base leading-7 text-[#5d6a60]">
          ดำเนินการต่อด้วยบัญชี Google ของคุณเพื่อบันทึกรายการโปรด
          ติดตามคำสั่งซื้อ และ จัดการคอลเลกชันสีเขียวของคุณ
        </p>

        {status === "authenticated" ? (
          <button
            type="button"
            onClick={() => signOut({ callbackUrl: "/" })}
            className="mt-6 inline-flex w-full items-center justify-center gap-3 rounded-full border border-black/5 bg-white px-4 py-3 text-base font-semibold text-[#1d2d22] shadow-[0_8px_18px_rgba(0,0,0,0.04)] transition hover:-translate-y-0.5"
          >
            ลงชื่อออก
          </button>
        ) : (
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="mt-6 inline-flex w-full items-center justify-center gap-3 rounded-full border border-black/5 bg-white px-4 py-3 text-base font-semibold text-[#1d2d22] shadow-[0_8px_18px_rgba(0,0,0,0.04)] transition hover:-translate-y-0.5"
          >
            <span
              className="flex h-6 w-6 items-center justify-center rounded-full text-[11px] font-extrabold text-white"
              style={{
                background:
                  "conic-gradient(from 180deg, #4285f4 0 25%, #db4437 25% 50%, #f4b400 50% 75%, #0f9d58 75% 100%)",
              }}
              aria-hidden="true"
            >
              G
            </span>
            ลงชื่อเข้าใช้ด้วย Google
          </button>
        )}

        <div className="my-5 grid grid-cols-[1fr_auto_1fr] items-center gap-4 text-sm text-[#5d6a60]">
          <span className="h-px bg-[#1d2d22]/10" />
          <span>or</span>
          <span className="h-px bg-[#1d2d22]/10" />
        </div>

        <Link
          href="/"
          className="block text-center text-sm font-bold text-[#1d4b35]"
        >
          กลับหน้าแรก
        </Link>
      </div>
    </main>
  );
}
