function HouseConstruction() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-6 py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">รับสร้างบ้าน</h1>
        <div className="prose max-w-none">
          <p className="text-lg text-gray-600 mb-6">
            บริการรับสร้างบ้านครบวงจร ด้วยทีมงานมืออาชีพ วัสดุคุณภาพสูง และการออกแบบที่ตอบโจทย์ความต้องการของลูกค้า
          </p>
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">บ้านเดี่ยว</h3>
              <p className="text-gray-600">ออกแบบและสร้างบ้านเดี่ยวตามความต้องการ พร้อมการควบคุมคุณภาพในทุกขั้นตอน</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">บ้านแฝด</h3>
              <p className="text-gray-600">บ้านแฝดสไตล์โมเดิร์น ใช้พื้นที่อย่างคุ้มค่า เหมาะสำหรับครอบครัวขนาดกลาง</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">ทาวน์เฮาส์</h3>
              <p className="text-gray-600">ทาวน์เฮาส์หลายชั้น ออกแบบให้ใช้งานได้อย่างมีประสิทธิภาพ</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">บ้านพักอาศัย</h3>
              <p className="text-gray-600">บ้านพักอาศัยทุกรูปแบบ ตั้งแต่แบบประหยัดไปจนถึงแบบหรูหรา</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HouseConstruction
