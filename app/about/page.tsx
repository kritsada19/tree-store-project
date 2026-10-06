import Link from 'next/link'
import Image from 'next/image'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#F5F3EC] text-[#1A1A1A] font-sans px-4 py-6 md:px-12 flex flex-col justify-between">
    <main className="max-w-6xl mx-auto w-full my-12">
        {/* Section Heading */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-3">
            About Tree-Shop
          </h1>
          <p className="text-gray-600 text-sm md:text-base max-w-xl mx-auto">
            Bringing nature closer to your living space with carefully curated plants for a calmer home.
          </p>
        </div>

        {/* 3 Column Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Our Story */}
          <div className="bg-white rounded-3xl p-4 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div className="relative w-full h-64 rounded-2xl overflow-hidden bg-[#E8E4D9] mb-4">
              <Image
                src="https://images.unsplash.com/photo-1545241047-6083a3684587?q=80&w=800&auto=format&fit=crop"
                alt="Our Story"
                fill
                className="object-cover"
              />
            </div>
            <div className="px-2 pb-2">
              <h2 className="font-bold text-lg text-[#1A1A1A] mb-2">
                Our Story
              </h2>
              <p className="text-xs text-gray-500 leading-relaxed">
                Tree-Shop เริ่มต้นจากความเชื่อที่ว่าต้นไม้ไม่ใช่แค่ของตกแต่ง แต่คือส่วนหนึ่งที่ช่วยเติมเต็มชีวิตและสร้างบรรยากาศผ่อนคลายภายในบ้าน
              </p>
            </div>
          </div>

          {/* Card 2: Thoughtful Quality */}
          <div className="bg-white rounded-3xl p-4 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div className="relative w-full h-64 rounded-2xl overflow-hidden bg-[#E8E4D9] mb-4">
              <Image
                src="https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=800&auto=format&fit=crop"
                alt="Thoughtful Quality"
                fill
                className="object-cover"
              />
            </div>
            <div className="px-2 pb-2">
              <h2 className="font-bold text-lg text-[#1A1A1A] mb-2">
                Thoughtful Quality
              </h2>
              <p className="text-xs text-gray-500 leading-relaxed">
                คัดสรรต้นไม้ทุกต้นด้วยความใส่ใจจากสวนที่ได้มาตรฐาน พร้อมจัดส่งในกระถางดีไซน์เรียบหรู มินิมอล เข้ากับทุกสไตล์การตกแต่ง
              </p>
            </div>
          </div>

          {/* Card 3: Safe Delivery */}
          <div className="bg-white rounded-3xl p-4 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div className="relative w-full h-64 rounded-2xl overflow-hidden bg-[#E8E4D9] mb-4">
              <Image
                src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=800&auto=format&fit=crop"
                alt="Safe Delivery"
                fill
                className="object-cover"
              />
            </div>
            <div className="px-2 pb-2">
              <h2 className="font-bold text-lg text-[#1A1A1A] mb-2">
                Safe & Eco Delivery
              </h2>
              <p className="text-xs text-gray-500 leading-relaxed">
                บรรจุภัณฑ์รักษ์โลกที่ถูกออกแบบเป็นพิเศษ ป้องกันความเสียหายอย่างมั่นใจ เพื่อให้ต้นไม้ส่งถึงมือคุณในสภาพที่สดชื่นและสมบูรณ์ที่สุด
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Section */}
      <footer className="max-w-6xl mx-auto w-full pt-8 border-t border-gray-300/50 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h3 className="font-bold text-base text-[#1A1A1A]">Tree-Shop</h3>
          <p className="text-xs text-gray-500 mt-1">
            Thoughtful plants for a calmer home.
          </p>
        </div>

        <div className="flex items-center gap-6 text-xs font-medium text-gray-600">
          <Link href="/shipping" className="hover:text-black transition-colors">
            Shipping
          </Link>
          <Link href="/support" className="hover:text-black transition-colors">
            Support
          </Link>
          <Link href="https://instagram.com" target="_blank" className="hover:text-black transition-colors">
            Instagram
          </Link>
        </div>
      </footer>
    </div>
  )
}