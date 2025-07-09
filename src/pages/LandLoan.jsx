function LandLoan() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-6 py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">รับกู้ซื้อที่ดิน</h1>
        <div className="prose max-w-none">
          <p className="text-lg text-gray-600 mb-6">
            บริการให้คำปรึกษาและช่วยเหลือในการขอสินเชื่อซื้อที่ดิน ด้วยทีมผู้เชี่ยวชาญที่มีประสบการณ์
          </p>
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">สินเชื่อที่ดินเปล่า</h3>
              <p className="text-gray-600">ช่วยขอสินเชื่อสำหรับซื้อที่ดินเปล่า เพื่อการลงทุนหรือสร้างบ้าน</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">สินเชื่อที่ดินพร้อมบ้าน</h3>
              <p className="text-gray-600">สินเชื่อสำหรับซื้อที่ดินที่มีบ้านอยู่แล้ว อัตราดอกเบี้ยพิเศษ</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">ปรึกษาฟรี</h3>
              <p className="text-gray-600">ให้คำปรึกษาฟรีเรื่องการเงิน วางแผนการซื้อที่ดิน</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">ดำเนินการแทน</h3>
              <p className="text-gray-600">ช่วยดำเนินการเอกสารและขั้นตอนต่างๆ แทนลูกค้า</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandLoan
