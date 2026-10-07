# Tree-Shop

เว็บไซต์ร้านค้าออนไลน์สำหรับขายต้นไม้และของแต่งบ้านที่ให้ความรู้สึกสดชื่นและเป็นมิตรกับชีวิตประจำวัน

## ภาพรวมของโปรเจกต์

Tree-Shop เป็นเว็บไซต์แบบ e-commerce ที่ใช้ Next.js ในการสร้างหน้าเว็บแบบ modern และตอบสนองต่อการใช้งานบนมือถือและเดสก์ท็อป โดยมีฟีเจอร์หลักดังนี้

- หน้า Landing Page แนะนำสินค้าและคุณสมบัติของร้าน
- หน้าร้านค้าแสดงสินค้าให้เลือกซื้อ
- ระบบตะกร้าสินค้าและยอดรวมการสั่งซื้อ
- ระบบเข้าสู่ระบบด้วย Google OAuth ผ่าน NextAuth
- หน้าข้อมูลร้านค้า และหน้า Contact

## เทคโนโลยีที่ใช้

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- NextAuth
- Lucide React

## ข้อกำหนดเบื้องต้น

ก่อนเริ่มใช้งาน โปรดตรวจสอบว่าติดตั้งสิ่งต่อไปนี้แล้ว

- Node.js 20 หรือสูงกว่า
- npm หรือ pnpm
- Google Account สำหรับตั้งค่า OAuth

## วิธีติดตั้ง

1. Clone โปรเจกต์

```bash
git clone <repository-url>
cd tree-store-project
```

2. ติดตั้ง Dependencies

```bash
npm install
```

3. สร้างไฟล์ `.env.local`

```bash
copy .env.example .env.local
```

> หากไม่มีไฟล์ `.env.example` ให้สร้างไฟล์ `.env.local` เอง และใส่ค่าต่อไปนี้

```env
AUTH_SECRET=your_long_random_secret
AUTH_GOOGLE_ID=your-google-client-id.apps.googleusercontent.com
AUTH_GOOGLE_SECRET=your-google-client-secret
NEXTAUTH_URL=http://localhost:3000
```

4. ตั้งค่า Google OAuth

- เข้าเว็บไซต์ Google Cloud Console
- สร้าง Project หรือเลือก Project ที่มีอยู่
- เปิดใช้งาน Google OAuth
- สร้าง OAuth Client ID
- เพิ่ม Redirect URI ต่อไปนี้

```text
http://localhost:3000/api/auth/callback/google
```

- นำ Client ID และ Client Secret ใส่ใน `.env.local`

## วิธีใช้งาน

1. เริ่มต้นเซิร์ฟเวอร์ในโหมดพัฒนา

```bash
npm run dev
```

2. เปิดเบราว์เซอร์ที่

```text
http://localhost:3000
```

3. ใช้งานเว็บไซต์ได้ตามฟีเจอร์

- ดูสินค้าแนะนำที่หน้าแรก
- คลิกเข้าสู่ระบบเพื่อล็อกอินด้วย Google
- เพิ่มสินค้าลงตะกร้า
- ดูข้อมูลร้านค้าและช่องทางติดต่อ

## โครงสร้างโปรเจกต์

```text
tree-store-project/
├── app/
│   ├── api/
│   ├── about/
│   ├── contact/
│   ├── login/
│   ├── shop/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
├── lib/
├── public/
├── auth.ts
├── next.config.ts
├── package.json
├── tsconfig.json
├── postcss.config.mjs
└── README.md
```

## รายชื่อสมาชิก

- นายกฤษฎา มูลเเจ่ม 6804101304
- นายอัครา แซ่จู 6804101398
- นายอชิระ อินต๊ะนางแล 6804101395
- นายวรวัตน์ ไชยาโส 6804101378
- นายภูภิพัฒน์ ใหม่น้อย 6804101368

## หมายเหตุ

โปรเจกต์นี้เป็นเวิร์กช็อปสำหรับการสร้างเว็บไซต์ร้านค้าออนไลน์แบบใช้งานจริง โดยมีเป้าหมายเพื่อฝึกฝนการพัฒนา Frontend, Authentication, Routing และการออกแบบ UI/UX ด้วย Next.js

## License

โครงการนี้ใช้สำหรับการศึกษาและพัฒนาต่อยอดภายในกลุ่ม
