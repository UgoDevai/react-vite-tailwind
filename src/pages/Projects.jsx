import { useOutletContext } from 'react-router-dom'
import { useState } from 'react'

function Projects() {
  const { language } = useOutletContext()
  const [activeCategory, setActiveCategory] = useState('all')
  
  const content = {
    th: {
      hero: {
        title: 'ผลงานของเรา',
        subtitle: 'ชมผลงานการสร้างบ้านและ Pool Villa ที่ได้ส่งมอบให้ลูกค้า'
      },
      categories: [
        { id: 'all', label: 'ทั้งหมด' },
        { id: 'house', label: 'บ้านชั้นเดียว-สองชั้น' },
        { id: 'villa', label: 'Pool Villa' },
        { id: 'office', label: 'อาคารสำนักงาน' }
      ],
      projects: [
        {
          id: 1,
          category: 'house',
          title: 'บ้านชั้นเดียว สไตล์โมเดิร์น',
          location: 'หาดใหญ่ จ.สงขลา',
          area: '180 ตร.ม.',
          budget: '2.8 ล้านบาท',
          description: 'บ้านชั้นเดียว 3 ห้องนอน 2 ห้องน้ำ ออกแบบแบบโมเดิร์นมินิมอล'
        },
        {
          id: 2,
          category: 'house',
          title: 'บ้าน 2 ชั้น สไตล์ร่วมสมัย',
          location: 'เมืองสงขลา จ.สงขลา',
          area: '250 ตร.ม.',
          budget: '3.5 ล้านบาท',
          description: 'บ้าน 2 ชั้น 4 ห้องนอน 3 ห้องน้ำ พร้อมห้องทำงาน'
        },
        {
          id: 3,
          category: 'villa',
          title: 'Pool Villa สไตล์รีสอร์ต',
          location: 'เกาะยอ จ.สงขลา',
          area: '300 ตร.ม.',
          budget: '5.2 ล้านบาท',
          description: 'Pool Villa 3 ห้องนอน พร้อมสระว่ายน้ำส่วนตัว'
        },
        {
          id: 4,
          category: 'villa',
          title: 'Pool Villa สไตล์ทรอปิคอล',
          location: 'ระนอง จ.ระนอง',
          area: '350 ตร.ม.',
          budget: '6.0 ล้านบาท',
          description: 'Pool Villa 4 ห้องนอน ออกแบบกลมกลืนกับธรรมชาติ'
        },
        {
          id: 5,
          category: 'office',
          title: 'อาคารสำนักงาน 3 ชั้น',
          location: 'หาดใหญ่ จ.สงขลา',
          area: '400 ตร.ม.',
          budget: '4.8 ล้านบาท',
          description: 'อาคารสำนักงาน 3 ชั้น พร้อมที่จอดรถ'
        },
        {
          id: 6,
          category: 'house',
          title: 'บ้านชั้นครึ่ง สไตล์ลอฟท์',
          location: 'ตรัง จ.ตรัง',
          area: '200 ตร.ม.',
          budget: '3.2 ล้านบาท',
          description: 'บ้านชั้นครึ่ง 3 ห้องนอน พร้อมพื้นที่โซนทำงาน'
        }
      ]
    },
    en: {
      hero: {
        title: 'Our Portfolio',
        subtitle: 'Explore our completed house and Pool Villa projects delivered to clients'
      },
      categories: [
        { id: 'all', label: 'All Projects' },
        { id: 'house', label: 'Single-Two Story Houses' },
        { id: 'villa', label: 'Pool Villas' },
        { id: 'office', label: 'Office Buildings' }
      ],
      projects: [
        // English translations would go here...
      ]
    }
  }
  
  const { hero, categories, projects } = content[language]
  
  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory)
  
  return (
    <div className="min-h-screen font-iphone-system">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Our Projects"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-green-700/60"></div>
        </div>
        <div className="relative z-10 text-center text-white px-6 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-iphone-heading-xl text-white mb-4">{hero.title}</h1>
          <p className="text-xl md:text-2xl font-iphone-body-large text-green-100">{hero.subtitle}</p>
        </div>
      </section>
      
      {/* Category Filter */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-xl font-iphone-button text-sm transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-green-500 to-green-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>
      
      {/* Projects Grid */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {filteredProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group">
                <div className="aspect-[4/3] bg-gradient-to-br from-gray-200 to-gray-300 relative overflow-hidden">
                  <img 
                    src={`https://images.unsplash.com/photo-${
                      project.category === 'villa' ? '1564013779-fc661c70afe6' :
                      project.category === 'office' ? '1486406146926-c627a92ad1ab' :
                      '1600566753086-00f18fb6b3ea'
                    }?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-iphone-heading-medium text-gray-900 mb-2">{project.title}</h3>
                  <p className="font-iphone-body-medium text-gray-600 mb-4">{project.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      <span className="font-iphone-body-small text-gray-700">📍 {project.location}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                      <span className="font-iphone-body-small text-gray-700">📐 {project.area}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      <span className="font-iphone-body-small text-gray-700">💰 {project.budget}</span>
                    </div>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 rounded-xl font-iphone-button hover:from-green-600 hover:to-green-700 transition-all duration-300">
                    {language === 'th' ? 'ดูรายละเอียด' : 'View Details'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-iphone-heading-large text-gray-900 mb-4">
              {language === 'th' ? 'ผลงานของเราในตัวเลข' : 'Our Work in Numbers'}
            </h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { number: '50+', label: language === 'th' ? 'โครงการสำเร็จ' : 'Completed Projects' },
              { number: '5+', label: language === 'th' ? 'ปีประสบการณ์' : 'Years Experience' },
              { number: '100+', label: language === 'th' ? 'ลูกค้าพึงพอใจ' : 'Satisfied Clients' },
              { number: '3', label: language === 'th' ? 'จังหวัดที่ให้บริการ' : 'Provinces Served' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-iphone-heading-xl text-green-600 mb-2">{stat.number}</div>
                <p className="font-iphone-body-medium text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-iphone-heading-large text-white mb-6">
            {language === 'th' ? 'ประทับใจกับผลงานของเรา?' : 'Impressed with Our Work?'}
          </h2>
          <p className="text-xl font-iphone-body-large text-green-100 mb-8 max-w-2xl mx-auto">
            {language === 'th' 
              ? 'ปรึกษาโครงการของคุณกับเราวันนี้ เริ่มต้นสร้างบ้านในฝัน' 
              : 'Consult your project with us today. Start building your dream home'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 px-8 py-4 rounded-2xl font-iphone-button text-lg transition-all duration-300 shadow-lg">
              {language === 'th' ? 'ปรึกษาโครงการ' : 'Consult Project'}
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-2xl font-iphone-button text-lg transition-all duration-300">
              {language === 'th' ? 'ขอใบเสนอราคา' : 'Request Quote'}
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Projects
