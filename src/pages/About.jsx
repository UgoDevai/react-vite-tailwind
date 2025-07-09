import { useOutletContext } from 'react-router-dom'

function About() {
  const { language } = useOutletContext()
  
  const content = {
    th: {
      hero: {
        title: 'เกี่ยวกับเรา',
        subtitle: 'บริษัท แลนด์ฟอร์ยู บ้านที่ดินเพื่อคุณ จำกัด',
        description: 'เพราะบ้านไม่ใช่แค่ที่อยู่อาศัย แต่คือพื้นที่ความสุขของครอบครัว'
      },
      story: {
        title: 'เรื่องราวของเรา',
        content: 'รับสร้างบ้านทุกประเภท ดำเนินงานโดยทีมงานสถาปนิกและวิศวกรมืออาชีพ ประสบการณ์มากกว่า 5 ปี เรามุ่งมั่นสร้างบ้านให้เป็นพื้นที่ของรอยยิ้มและความสุข ภายใต้มาตรฐานวัสดุและการก่อสร้างระดับมืออาชีพ'
      },
      highlights: {
        title: 'จุดเด่นของเรา',
        items: [
          {
            title: 'บริการครบวงจร',
            desc: 'ตั้งแต่แบบบ้านจนถึงสร้างเสร็จ'
          },
          {
            title: 'ออกแบบ 2D/3D ฟรี',
            desc: 'ให้คุณเห็นภาพบ้านก่อนสร้างจริง'
          },
          {
            title: 'ปรึกษาและประเมินราคาฟรี',
            desc: 'ไม่มีค่าใช้จ่ายในการให้คำปรึกษา'
          },
          {
            title: 'ปรับแบบตามงบประมาณ',
            desc: 'ออกแบบให้เหมาะกับงบที่คุณมี'
          },
          {
            title: 'ไม่มีเงินสด ก็มีบ้านได้',
            desc: 'รับกู้ซื้อที่ดินเพื่อปลูกสร้าง'
          }
        ]
      },
      values: {
        title: 'คุณค่าของเรา',
        items: [
          {
            title: 'มืออาชีพ',
            desc: 'ทีมงานสถาปนิกและวิศวกรที่มีประสบการณ์'
          },
          {
            title: 'คุณภาพ',
            desc: 'วัสดุและการก่อสร้างระดับมาตรฐาน'
          },
          {
            title: 'ความไว้วางใจ',
            desc: 'ดูแลตั้งแต่เริ่มจนส่งมอบกุญแจ'
          },
          {
            title: 'เป็นกันเอง',
            desc: 'ดูแลกันแบบครอบครัว จริงใจ'
          }
        ]
      }
    },
    en: {
      hero: {
        title: 'About Us',
        subtitle: 'Land For You Co., Ltd.',
        description: 'Because a home is not just a place to live, but a space for family happiness'
      },
      story: {
        title: 'Our Story',
        content: 'We build all types of houses, operated by professional architects and engineers with over 5 years of experience. We are committed to creating homes as spaces of smiles and happiness under professional-grade material and construction standards.'
      },
      highlights: {
        title: 'Our Strengths',
        items: [
          {
            title: 'Complete Service',
            desc: 'From house plans to completion'
          },
          {
            title: 'Free 2D/3D Design',
            desc: 'Visualize your home before construction'
          },
          {
            title: 'Free Consultation & Quote',
            desc: 'No charge for consultation services'
          },
          {
            title: 'Budget-Based Design',
            desc: 'Designs tailored to your budget'
          },
          {
            title: 'No Cash, Still Get a House',
            desc: 'Land purchase loans for construction'
          }
        ]
      },
      values: {
        title: 'Our Values',
        items: [
          {
            title: 'Professional',
            desc: 'Experienced architects and engineers team'
          },
          {
            title: 'Quality',
            desc: 'Standard-grade materials and construction'
          },
          {
            title: 'Trust',
            desc: 'Care from start to key handover'
          },
          {
            title: 'Friendly',
            desc: 'Family-like care, sincere service'
          }
        ]
      }
    }
  }
  
  const { hero, story, highlights, values } = content[language]
  
  return (
    <div className="min-h-screen font-iphone-system">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Modern House"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-black/20"></div>
        </div>
        <div className="relative z-10 text-center text-white px-6 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-iphone-heading-xl text-white mb-4 animate-fade-in-up">{hero.title}</h1>
          <p className="text-xl md:text-2xl font-iphone-heading-medium text-white mb-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {hero.subtitle}
          </p>
          <p className="text-lg md:text-xl font-iphone-body-large text-gray-200 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            {hero.description}
          </p>
        </div>
      </section>
      
      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-english-heading mb-8">{story.title}</h2>
            <p className="text-lg font-iphone-body-large text-gray-600 leading-relaxed">
              {story.content}
            </p>
          </div>
        </div>
      </section>
      
      {/* Highlights Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-yellow-50">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-english-heading mb-16 text-center">{highlights.title}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {highlights.items.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-yellow-400 rounded-xl mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">{index + 1}</span>
                </div>
                <h3 className="text-xl font-iphone-heading-medium text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 font-iphone-body-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-english-heading mb-16 text-center">{values.title}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.items.map((item, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-yellow-400 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-xl">✓</span>
                </div>
                <h3 className="text-xl font-iphone-heading-medium text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 font-iphone-body-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-iphone-heading-large text-white mb-6">
            {language === 'th' ? 'พร้อมสร้างบ้านในฝันของคุณแล้วหรือยัง?' : 'Ready to Build Your Dream Home?'}
          </h2>
          <p className="text-xl font-iphone-body-large text-green-100 mb-8 max-w-2xl mx-auto">
            {language === 'th' 
              ? 'ให้เราดูแลบ้านในฝันของคุณ ติดต่อปรึกษาฟรีวันนี้' 
              : 'Let us take care of your dream home. Contact us for free consultation today'
            }
          </p>
          <button className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 px-8 py-4 rounded-2xl font-iphone-button text-lg transition-all duration-300 shadow-lg hover:shadow-xl">
            {language === 'th' ? 'ปรึกษาฟรี' : 'Free Consultation'}
          </button>
        </div>
      </section>
    </div>
  )
}

export default About
