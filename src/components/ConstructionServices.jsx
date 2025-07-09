import { useState } from 'react'

function ConstructionServices() {
  const [currentServicePage, setCurrentServicePage] = useState(0)

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-3 gap-8 md:gap-12">
          
          {/* Left Side - Service Cards */}
          <div className="lg:col-span-2">
            {/* Header */}
            <div className="mb-12">
              <div className="inline-block bg-green-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
                รับสร้างบ้าน
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-thai-heading" style={{ color: '#36543c' }}>
                บริการก่อสร้างครบวงจร
              </h2>
              <p className="text-gray-600 text-lg font-thai-body">
                เราให้บริการสร้างบ้านทุกประเภท ด้วยความใส่ใจในทุกรายละเอียด
              </p>
            </div>

            {/* Service Cards - Mobile Single Card + Navigation, Desktop Simple Grid */}
            <div>
              {/* Mobile - Navigation */}
              <div className="flex justify-center mb-6 md:hidden">
                <div className="bg-gray-200 rounded-full p-1 flex">
                  <button
                    onClick={() => setCurrentServicePage(0)}
                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                      currentServicePage === 0
                        ? 'bg-green-600 text-white'
                        : 'text-gray-600 hover:text-gray-800'
                    }`}
                  >
                    บ้านชั่นเดียว
                  </button>
                  <button
                    onClick={() => setCurrentServicePage(1)}
                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                      currentServicePage === 1
                        ? 'bg-green-600 text-white'
                        : 'text-gray-600 hover:text-gray-800'
                    }`}
                  >
                    Pool Villa
                  </button>
                  <button
                    onClick={() => setCurrentServicePage(2)}
                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                      currentServicePage === 2
                        ? 'bg-green-600 text-white'
                        : 'text-gray-600 hover:text-gray-800'
                    }`}
                  >
                    บ้าน 2 ชั้น
                  </button>
                  <button
                    onClick={() => setCurrentServicePage(3)}
                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                      currentServicePage === 3
                        ? 'bg-green-600 text-white'
                        : 'text-gray-600 hover:text-gray-800'
                    }`}
                  >
                    อาคารสำนักงาน
                  </button>
                </div>
              </div>

              {/* Mobile - Single Card Display */}
              <div className="md:hidden">
                {currentServicePage === 0 && (
                  <div className="grid grid-cols-1 gap-6">
                    {/* Card 1 - รับสร้างบ้านชั่นเดียว */}
                    <div className="relative rounded-2xl overflow-hidden shadow-md h-96">
                      {/* Background Image */}
                      <div className="absolute inset-0">
                        <img 
                          src="/11.jpg" 
                          alt="รับสร้างบ้านชั่นเดียว" 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/30"></div>
                      </div>
                      
                      {/* Content with shadow overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                        <div className="relative">
                          {/* Shadow backdrop */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent rounded-lg -mx-8 -mb-8 -mt-4 blur-sm"></div>
                          
                          {/* Content */}
                          <div className="relative text-center text-white">
                            <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 font-thai-heading drop-shadow-md">
                              รับสร้างบ้านชั่นเดียว
                            </h3>
                            <p className="text-sm md:text-base leading-relaxed font-thai-body drop-shadow-sm">
                              บ้านชั่นเดียวสไตล์โมเดิร์น เหมาะสำหรับครอบครัวเริ่มต้น
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {currentServicePage === 1 && (
                  <div className="grid grid-cols-1 gap-6">
                    {/* Card 2 - รับสร้างบ้าน Pool Villa */}
                    <div className="relative rounded-2xl overflow-hidden shadow-md h-96">
                      {/* Background Image */}
                      <div className="absolute inset-0">
                        <img 
                          src="/12.jpg" 
                          alt="รับสร้างบ้าน Pool Villa" 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/30"></div>
                      </div>
                      
                      {/* Content with shadow overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                        <div className="relative">
                          {/* Shadow backdrop */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent rounded-lg -mx-8 -mb-8 -mt-4 blur-sm"></div>
                          
                          {/* Content */}
                          <div className="relative text-center text-white">
                            <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 font-thai-heading drop-shadow-md">
                              รับสร้างบ้าน Pool Villa
                            </h3>
                            <p className="text-sm md:text-base leading-relaxed font-thai-body drop-shadow-sm">
                              บ้านพักตากอากาศพร้อมสระว่ายน้ำส่วนตัว สไตล์รีสอร์ท
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {currentServicePage === 2 && (
                  <div className="grid grid-cols-1 gap-6">
                    {/* Card 3 - รับสร้างบ้าน 2 ชั้น */}
                    <div className="relative rounded-2xl overflow-hidden shadow-md h-96">
                      {/* Background Image */}
                      <div className="absolute inset-0">
                        <img 
                          src="/14.jpg" 
                          alt="รับสร้างบ้าน 2 ชั้น" 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/30"></div>
                      </div>
                      
                      {/* Content with shadow overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                        <div className="relative">
                          {/* Shadow backdrop */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent rounded-lg -mx-8 -mb-8 -mt-4 blur-sm"></div>
                          
                          {/* Content */}
                          <div className="relative text-center text-white">
                            <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 font-thai-heading drop-shadow-md">
                              รับสร้างบ้าน 2 ชั้น
                            </h3>
                            <p className="text-sm md:text-base leading-relaxed font-thai-body drop-shadow-sm">
                              บ้าน 2 ชั้นทันสมัย เพิ่มพื้นที่ใช้สอยสูงสุด
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {currentServicePage === 3 && (
                  <div className="grid grid-cols-1 gap-6">
                    {/* Card 4 - รับสร้างอาคาร สำนักงาน */}
                    <div className="relative rounded-2xl overflow-hidden shadow-md h-96">
                      {/* Background Image */}
                      <div className="absolute inset-0">
                        <img 
                          src="/13.jpg" 
                          alt="รับสร้างอาคาร สำนักงาน" 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/30"></div>
                      </div>
                      
                      {/* Content with shadow overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                        <div className="relative">
                          {/* Shadow backdrop */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent rounded-lg -mx-8 -mb-8 -mt-4 blur-sm"></div>
                          
                          {/* Content */}
                          <div className="relative text-center text-white">
                            <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 font-thai-heading drop-shadow-md">
                              รับสร้างอาคาร สำนักงาน
                            </h3>
                            <p className="text-sm md:text-base leading-relaxed font-thai-body drop-shadow-sm">
                              อาคารสำนักงานและพาณิชย์ ออกแบบใช้งานจริง
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Desktop - All cards in 2x2 grid */}
              <div className="hidden md:grid md:grid-cols-2 md:gap-8">
                {/* Card 1 - รับสร้างบ้านชั่นเดียว */}
                <div className="relative rounded-2xl overflow-hidden shadow-md h-96">
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <img 
                      src="/11.jpg" 
                      alt="รับสร้างบ้านชั่นเดียว" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30"></div>
                  </div>
                  
                  {/* Content with shadow overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    <div className="relative">
                      {/* Shadow backdrop */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent rounded-lg -mx-8 -mb-8 -mt-4 blur-sm"></div>
                      
                      {/* Content */}
                      <div className="relative text-center text-white">
                        <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 font-thai-heading drop-shadow-md">
                          รับสร้างบ้านชั่นเดียว
                        </h3>
                        <p className="text-sm md:text-base leading-relaxed font-thai-body drop-shadow-sm">
                          บ้านชั่นเดียวสไตล์โมเดิร์น เหมาะสำหรับครอบครัวเริ่มต้น
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 2 - รับสร้างบ้าน Pool Villa */}
                <div className="relative rounded-2xl overflow-hidden shadow-md h-96">
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <img 
                      src="/12.jpg" 
                      alt="รับสร้างบ้าน Pool Villa" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30"></div>
                  </div>
                  
                  {/* Content with shadow overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    <div className="relative">
                      {/* Shadow backdrop */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent rounded-lg -mx-8 -mb-8 -mt-4 blur-sm"></div>
                      
                      {/* Content */}
                      <div className="relative text-center text-white">
                        <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 font-thai-heading drop-shadow-md">
                          รับสร้างบ้าน Pool Villa
                        </h3>
                        <p className="text-sm md:text-base leading-relaxed font-thai-body drop-shadow-sm">
                          บ้านพักตากอากาศพร้อมสระว่ายน้ำส่วนตัว สไตล์รีสอร์ท
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 3 - รับสร้างบ้าน 2 ชั้น */}
                <div className="relative rounded-2xl overflow-hidden shadow-md h-96">
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <img 
                      src="/14.jpg" 
                      alt="รับสร้างบ้าน 2 ชั้น" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30"></div>
                  </div>
                  
                  {/* Content with shadow overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    <div className="relative">
                      {/* Shadow backdrop */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent rounded-lg -mx-8 -mb-8 -mt-4 blur-sm"></div>
                      
                      {/* Content */}
                      <div className="relative text-center text-white">
                        <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 font-thai-heading drop-shadow-md">
                          รับสร้างบ้าน 2 ชั้น
                        </h3>
                        <p className="text-sm md:text-base leading-relaxed font-thai-body drop-shadow-sm">
                          บ้าน 2 ชั้นทันสมัย เพิ่มพื้นที่ใช้สอยสูงสุด
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 4 - รับสร้างอาคาร สำนักงาน */}
                <div className="relative rounded-2xl overflow-hidden shadow-md h-96">
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <img 
                      src="/13.jpg" 
                      alt="รับสร้างอาคาร สำนักงาน" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30"></div>
                  </div>
                  
                  {/* Content with shadow overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    <div className="relative">
                      {/* Shadow backdrop */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent rounded-lg -mx-8 -mb-8 -mt-4 blur-sm"></div>
                      
                      {/* Content */}
                      <div className="relative text-center text-white">
                        <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 font-thai-heading drop-shadow-md">
                          รับสร้างอาคาร สำนักงาน
                        </h3>
                        <p className="text-sm md:text-base leading-relaxed font-thai-body drop-shadow-sm">
                          อาคารสำนักงานและพาณิชย์ ออกแบบใช้งานจริง
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Design Service - Hidden on mobile, visible on desktop */}
          <div className="hidden lg:block lg:col-span-1 mt-64">
            <div className="relative bg-transparent">
              {/* Background decorative elements */}
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-green-100 rounded-full opacity-30"></div>
              <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-yellow-100 rounded-full opacity-40"></div>
              
              {/* Main content area */}
              <div className="relative z-10 text-center space-y-8">
                
                {/* Service Icon & Title */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2 font-thai-heading">
                      รับออกแบบบ้าน
                    </h3>
                    <div className="w-20 h-1 bg-gradient-to-r from-green-600 via-green-500 to-yellow-400 mx-auto rounded-full"></div>
                  </div>
                </div>

                {/* Featured Badge */}
                <div className="inline-flex items-center space-x-2 bg-yellow-50 border-2 border-yellow-200 rounded-full px-6 py-3">
                  <span className="text-2xl">⭐</span>
                  <span className="text-yellow-800 font-bold text-sm">บริการแนะนำ</span>
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse">
                    ฟรี!
                  </span>
                </div>

                {/* Quote Section */}
                <div className="relative">
                  <div className="text-6xl text-green-200 absolute -top-4 -left-4">"</div>
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-6 border-l-4 border-green-600 relative">
                    <p className="text-lg text-green-700 font-semibold mb-2 font-thai-body italic">
                      ความต้องการลูกค้าสำคัญที่สุด
                    </p>
                    <p className="text-sm text-gray-600 leading-relaxed font-thai-body">
                      เราให้ความสำคัญกับการรับฟังและออกแบบตามความต้องการของลูกค้าเป็นหลัก
                    </p>
                  </div>
                  <div className="text-6xl text-green-200 absolute -bottom-4 -right-4 transform rotate-180">"</div>
                </div>

                {/* Image showcase */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-400 rounded-2xl transform rotate-3 group-hover:rotate-1 transition-transform duration-300 opacity-20"></div>
                  <img 
                    src="/1.jpg" 
                    alt="รับออกแบบบ้าน" 
                    className="relative w-full h-48 object-cover rounded-2xl shadow-lg transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-2xl"></div>
                </div>

                {/* Call to Action */}
                <div className="space-y-4">
                  <button className="w-full bg-gradient-to-r from-green-600 via-green-700 to-green-800 hover:from-green-700 hover:via-green-800 hover:to-green-900 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 font-thai-heading shadow-xl hover:shadow-2xl transform hover:-translate-y-2 relative overflow-hidden group">
                    <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    <span className="relative flex items-center justify-center space-x-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                      <span>ปรึกษาฟรี</span>
                    </span>
                  </button>
                  
                  <p className="text-xs text-gray-500 font-thai-body">
                    💡 คุ้มค่าแน่นอน! ออกแบบฟรี ไม่มีค่าใช้จ่าย
                  </p>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default ConstructionServices
