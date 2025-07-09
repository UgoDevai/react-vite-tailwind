import { useOutletContext } from 'react-router-dom'
import { useState } from 'react'

function Services() {
  const { language } = useOutletContext()
  const [activeService, setActiveService] = useState(0)
  
  const content = {
    th: {
      hero: {
        title: 'บริการของเรา',
        subtitle: 'บริการครบวงจร สร้างบ้านในฝันให้เป็นจริง'
      },
      services: [
        {
          id: 'house-construction',
          title: 'รับสร้างบ้านภาคใต้',
          subtitle: 'สร้างบ้านในฝัน ตามไลฟ์สไตล์ของคุณ',
          description: 'เราให้บริการรับสร้างบ้านแบบครบวงจรในเขตภาคใต้ ครอบคลุมทุกสไตล์ ทุกงบประมาณ ออกแบบตรงใจและตอบโจทย์ทุกครอบครัว',
          features: [
            'บ้านชั้นเดียว',
            'บ้านชั้นครึ่ง',
            'บ้าน 2 ชั้น',
            'อาคารสำนักงาน และโฮมออฟฟิศ'
          ],
          benefits: [
            'รับออกแบบบ้านตามงบประมาณและพื้นที่',
            'ให้คำปรึกษาฟรี',
            'ทีมงานมืออาชีพ',
            'คุณภาพมาตรฐาน'
          ]
        },
        {
          id: 'pool-villa',
          title: 'รับสร้างบ้าน Pool Villa',
          subtitle: 'บ้านพักตากอากาศส่วนตัว สไตล์รีสอร์ต',
          description: 'ออกแบบและก่อสร้างบ้าน Pool Villa สำหรับลูกค้าที่ต้องการพื้นที่พักผ่อนส่วนตัว รายล้อมด้วยธรรมชาติ และสระว่ายน้ำส่วนตัว',
          features: [
            '2 ห้องนอน 2 ห้องน้ำ พร้อมสระว่ายน้ำ',
            '3 ห้องนอน 3 ห้องน้ำ พร้อมสระว่ายน้ำและพื้นที่สวน',
            'ดีไซน์ทันสมัย เรียบหรู',
            'ระบบรักษาความปลอดภัย 24 ชม.'
          ],
          benefits: [
            'ทำเลดี ติดถนนหลัก',
            'ใกล้หาด ใกล้ตลาดและแหล่งท่องเที่ยว',
            'รองรับการลงทุนปล่อยเช่า',
            'พื้นที่ใช้สอยคุ้มค่า'
          ]
        },
        {
          id: 'design-3d',
          title: 'ออกแบบ 3D & เขียนแบบ',
          subtitle: 'เห็นภาพบ้านก่อนสร้างจริง',
          description: 'ให้บริการออกแบบบ้าน 3D เสมือนจริง ช่วยให้คุณเห็นภาพบ้านก่อนสร้างจริง พร้อมเขียนแบบก่อสร้างมาตรฐานวิศวกรรมครบถ้วน',
          features: [
            'ออกแบบ 3D แบบเสมือนจริง',
            'เขียนแบบก่อสร้างมาตรฐาน',
            'ปรับแบบตามความต้องการ',
            'คำนวณปริมาณวัสดุ'
          ],
          benefits: [
            'ฟรี! สำหรับลูกค้าที่ใช้บริการสร้างบ้าน',
            'ประหยัดเวลาและค่าใช้จ่าย',
            'ลดข้อผิดพลาดในการก่อสร้าง',
            'มั่นใจในผลลัพธ์'
          ]
        },
        {
          id: 'construction-process',
          title: 'ขั้นตอนการสร้างบ้าน',
          subtitle: 'วางใจได้ เราดูแลให้ครบตั้งแต่เริ่มจนเสร็จ',
          description: 'บริการครบวงจร ดูแลทุกขั้นตอนการสร้างบ้าน ตั้งแต่เอกสารอนุญาตจนถึงส่งมอบกุญแจ',
          features: [
            'ยื่นเอกสารขออนุญาตก่อสร้างกับเทศบาล',
            'ให้คำปรึกษาการออกแบบและวางแผนงบประมาณ',
            'ทีมงานควบคุมงานก่อสร้างอย่างมืออาชีพ',
            'ส่งมอบบ้านพร้อมตรวจรับงานอย่างละเอียด'
          ],
          benefits: [
            'ยื่นเอกสารอนุญาตฟรี',
            'ควบคุมคุณภาพงานทุกขั้นตอน',
            'รายงานความคืบหน้าสม่ำเสมอ',
            'การันตีงานก่อสร้าง'
          ]
        },
        {
          id: 'land-loan',
          title: 'รับกู้ซื้อที่ดินเพื่อปลูกสร้างบ้าน',
          subtitle: 'ไม่มีเงินสด ก็มีบ้านได้',
          description: 'บริการครบวงจรสำหรับลูกค้าที่ต้องการปลูกบ้านบนที่ดินของตัวเอง หรือกำลังมองหาที่ดิน พร้อมช่วยดำเนินการเรื่องสินเชื่อ',
          features: [
            'ยื่นกู้ธนาคาร',
            'ออกแบบบ้านประกอบการยื่นกู้',
            'บริษัทสำรองจ่ายงวดแรกให้ก่อน 30%',
            'ช่วยหาที่ดินที่เหมาะสม'
          ],
          benefits: [
            'ลดภาระค่าใช้จ่ายช่วงเริ่มต้น',
            'ได้บ้านโดยไม่ต้องมีเงินสดมาก',
            'ทีมงานมีประสบการณ์ด้านสินเชื่อ',
            'ดำเนินการรวดเร็ว'
          ]
        }
      ]
    },
    en: {
      hero: {
        title: 'Our Services',
        subtitle: 'Complete service to make your dream home come true'
      },
      services: [
        {
          id: 'house-construction',
          title: 'House Construction in Southern Thailand',
          subtitle: 'Build your dream home according to your lifestyle',
          description: 'We provide comprehensive house construction services in Southern Thailand, covering all styles and budgets, designed to satisfy every family.',
          features: [
            'Single-story houses',
            'One-and-a-half story houses',
            '2-story houses',
            'Office buildings and home offices'
          ],
          benefits: [
            'Custom design based on budget and space',
            'Free consultation',
            'Professional team',
            'Standard quality'
          ]
        }
        // ... other services would be translated similarly
      ]
    }
  }
  
  const { hero, services } = content[language]
  
  return (
    <div className="min-h-screen font-iphone-system">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2073&q=80"
            alt="Construction Service"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/70 to-green-700/50"></div>
        </div>
        <div className="relative z-10 text-center text-white px-6 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-iphone-heading-xl text-white mb-4">{hero.title}</h1>
          <p className="text-xl md:text-2xl font-iphone-body-large text-green-100">{hero.subtitle}</p>
        </div>
      </section>
      
      {/* Services Navigation */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {services.map((service, index) => (
              <button
                key={service.id}
                onClick={() => setActiveService(index)}
                className={`px-6 py-3 rounded-xl font-iphone-button text-sm transition-all duration-300 ${
                  activeService === index
                    ? 'bg-gradient-to-r from-green-500 to-green-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {service.title}
              </button>
            ))}
          </div>
        </div>
      </section>
      
      {/* Active Service Detail */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-english-heading mb-4">
                {services[activeService].title}
              </h2>
              <p className="text-xl font-iphone-heading-medium text-green-600 mb-6">
                {services[activeService].subtitle}
              </p>
              <p className="text-lg font-iphone-body-large text-gray-600 max-w-4xl mx-auto leading-relaxed">
                {services[activeService].description}
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              {/* Features */}
              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <h3 className="text-2xl font-iphone-heading-medium text-gray-900 mb-6 flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-yellow-400 rounded-lg mr-3 flex items-center justify-center">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  {language === 'th' ? 'รายละเอียดบริการ' : 'Service Details'}
                </h3>
                <ul className="space-y-4">
                  {services[activeService].features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></div>
                      <span className="font-iphone-body-medium text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Benefits */}
              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <h3 className="text-2xl font-iphone-heading-medium text-gray-900 mb-6 flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-green-500 rounded-lg mr-3 flex items-center justify-center">
                    <span className="text-white font-bold">★</span>
                  </div>
                  {language === 'th' ? 'ข้อดี/จุดเด่น' : 'Benefits/Highlights'}
                </h3>
                <ul className="space-y-4">
                  {services[activeService].benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3 mt-2"></div>
                      <span className="font-iphone-body-medium text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-english-heading mb-16">
              {language === 'th' ? 'ขั้นตอนการทำงาน' : 'Work Process'}
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { title: language === 'th' ? 'ปรึกษา' : 'Consult', desc: language === 'th' ? 'ปรึกษาความต้องการ' : 'Discuss requirements' },
                { title: language === 'th' ? 'ออกแบบ' : 'Design', desc: language === 'th' ? 'ออกแบบ 2D/3D' : '2D/3D design' },
                { title: language === 'th' ? 'ก่อสร้าง' : 'Build', desc: language === 'th' ? 'ดำเนินการก่อสร้าง' : 'Construction process' },
                { title: language === 'th' ? 'ส่งมอบ' : 'Deliver', desc: language === 'th' ? 'ส่งมอบบ้าน' : 'House delivery' }
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-yellow-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white font-bold text-xl">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-iphone-heading-medium text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 font-iphone-body-medium">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-english-heading-white mb-6">
            {language === 'th' ? 'สนใจบริการใดบ้าง?' : 'Interested in Any Service?'}
          </h2>
          <p className="text-xl font-iphone-body-large text-green-100 mb-8 max-w-2xl mx-auto">
            {language === 'th' 
              ? 'ปรึกษาฟรี! ทีมงานพร้อมให้คำแนะนำและประเมินราคา' 
              : 'Free consultation! Our team is ready to provide advice and price estimates'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 px-8 py-4 rounded-2xl font-iphone-button text-lg transition-all duration-300 shadow-lg">
              {language === 'th' ? 'ปรึกษาฟรี' : 'Free Consultation'}
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-2xl font-iphone-button text-lg transition-all duration-300">
              {language === 'th' ? 'ดูผลงาน' : 'View Portfolio'}
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
