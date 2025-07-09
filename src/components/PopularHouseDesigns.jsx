function PopularHouseDesigns() {
  const houseDesigns = [
    {
      id: 1,
      image: "/11.jpg",
      alt: "บ้านชั้นเดียวโมเดิร์น",
      title: "บ้านชั้นเดียวโมเดิร์น",
      description: "ดีไซน์เรียบง่าย สะอาดตา เหมาะสำหรับครอบครัวขนาดเล็ก-กลาง",
      area: "120-180 ตร.ม.",
      budget: "2.5 ล้านบาท",
      badge: {
        text: "ยอดนิยม",
        color: "bg-green-600"
      }
    },
    {
      id: 2,
      image: "/6.jpg",
      alt: "บ้าน 2 ชั้นร่วมสมัย",
      title: "บ้าน 2 ชั้นร่วมสมัย",
      description: "เพิ่มพื้นที่ใช้สอย แยกพื้นที่ส่วนตัวชัดเจน เหมาะกับครอบครัวใหญ่",
      area: "200-300 ตร.ม.",
      budget: "3.5 ล้านบาท",
      badge: {
        text: "แนะนำ",
        color: "bg-blue-600"
      }
    },
    {
      id: 3,
      image: "/12.jpg",
      alt: "Pool Villa ทรอปิคอล",
      title: "Pool Villa ทรอปิคอล",
      description: "บรรยากาศรีสอร์ท สระว่ายน้ำส่วนตัว เหมาะกับการพักผ่อน",
      area: "250-400 ตร.ม.",
      budget: "5.0 ล้านบาท",
      badge: {
        text: "พรีเมี่ยม",
        color: "bg-purple-600"
      }
    },
    {
      id: 4,
      image: "/13.jpg",
      alt: "บ้านสไตล์ลอฟท์",
      title: "บ้านสไตล์ลอฟท์",
      description: "โครงสร้างเปิด เน้นวัสดุดิบ เหมาะกับคนรุ่นใหม่ที่ชอบความแตกต่าง",
      area: "150-250 ตร.ม.",
      budget: "3.0 ล้านบาท",
      badge: {
        text: "ทันสมัย",
        color: "bg-orange-600"
      }
    },
    {
      id: 5,
      image: "/8.jpg",
      alt: "บ้านมินิมอล",
      title: "บ้านมินิมอล",
      description: "เน้นความเรียบง่าย ฟังก์ชันการใช้งาน เหมาะกับคนที่ชอบความเป็นระเบียบ",
      area: "100-200 ตร.ม.",
      budget: "2.2 ล้านบาท",
      badge: {
        text: "เรียบง่าย",
        color: "bg-gray-600"
      }
    },
    {
      id: 6,
      image: "/3.jpg",
      alt: "สมาร์ทโฮม",
      title: "สมาร์ทโฮม",
      description: "เทคโนโลยีอัจฉริยะ ควบคุมทุกอย่างผ่านโทรศัพท์ บ้านแห่งอนาคต",
      area: "180-320 ตร.ม.",
      budget: "4.0 ล้านบาท",
      badge: {
        text: "สมาร์ท",
        color: "bg-red-600"
      }
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <div className="inline-block bg-yellow-500 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
            แบบบ้าน
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-thai-heading" style={{ color: '#36543c' }}>
            แบบบ้านยอดนิยม
          </h2>
          <p className="text-gray-600 text-lg font-thai-body max-w-3xl mx-auto">
            คัดสรรแบบบ้านสวยๆ ที่ได้รับความนิยมมากที่สุด ออกแบบให้เข้ากับไลฟ์สไตล์ของคนยุคใหม่
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {houseDesigns.map((house) => (
            <div 
              key={house.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={house.image}
                  alt={house.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className={`${house.badge.color} text-white px-3 py-1 rounded-full text-xs font-bold`}>
                    {house.badge.text}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 font-thai-heading text-gray-800">
                  {house.title}
                </h3>
                <p className="text-gray-600 mb-4 font-thai-body text-sm leading-relaxed">
                  {house.description}
                </p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">พื้นที่ใช้สอย</span>
                  <span className="font-semibold text-green-600">{house.area}</span>
                </div>
                <div className="flex items-center justify-between text-sm mt-2">
                  <span className="text-gray-500">งบประมาณเริ่มต้น</span>
                  <span className="font-semibold text-yellow-600">{house.budget}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PopularHouseDesigns;
