import { useOutletContext } from 'react-router-dom'
import { useState } from 'react'

function News() {
  const { language } = useOutletContext()
  const [activeCategory, setActiveCategory] = useState('all')
  
  const content = {
    th: {
      hero: {
        title: 'ข่าวสารและอัปเดต',
        subtitle: 'ติดตามข่าวสาร เทรนด์บ้าน และเคล็ดลับการสร้างบ้าน'
      },
      categories: [
        { id: 'all', label: 'ทั้งหมด' },
        { id: 'news', label: 'ข่าวบริษัท' },
        { id: 'tips', label: 'เคล็ดลับ' },
        { id: 'trends', label: 'เทรนด์บ้าน' }
      ],
      articles: [
        {
          id: 1,
          category: 'news',
          title: 'แลนด์ฟอร์ยูขยายการให้บริการครอบคลุม 3 จังหวัดภาคใต้',
          excerpt: 'เรายินดีประกาศขยายพื้นที่การให้บริการไปยังจังหวัดตรัง และระนอง เพื่อตอบสนองความต้องการของลูกค้า',
          date: '15 มิถุนายน 2567',
          readTime: '3 นาที',
          image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3'
        },
        {
          id: 2,
          category: 'tips',
          title: '5 เคล็ดลับการเลือกที่ดินสำหรับสร้างบ้าน',
          excerpt: 'การเลือกที่ดินที่เหมาะสมเป็นจุดเริ่มต้นสำคัญในการสร้างบ้าน มาดูปัจจัยสำคัญที่ต้องพิจารณา',
          date: '12 มิถุนายน 2567',
          readTime: '5 นาที',
          image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3'
        },
        {
          id: 3,
          category: 'trends',
          title: 'เทรนด์การออกแบบบ้านปี 2567: สไตล์มินิมอลทรอปิคอล',
          excerpt: 'ส่องเทรนด์การออกแบบบ้านที่กำลังมาแรง ผสมผสานความเรียบง่ายกับธรรมชาติ',
          date: '10 มิถุนายน 2567',
          readTime: '4 นาที',
          image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3'
        },
        {
          id: 4,
          category: 'tips',
          title: 'วิธีประหยัดงบสร้างบ้านโดยไม่ลดคุณภาพ',
          excerpt: 'เทคนิคและแนวทางในการจัดการงบประมาณการสร้างบ้านให้คุ้มค่าที่สุด',
          date: '8 มิถุนายน 2567',
          readTime: '6 นาที',
          image: 'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?ixlib=rb-4.0.3'
        },
        {
          id: 5,
          category: 'news',
          title: 'เปิดตัวแพ็กเกจ "Pool Villa Premium" สำหรับนักลงทุน',
          excerpt: 'แพ็กเกจใหม่ที่ออกแบบมาเพื่อนักลงทุนที่ต้องการสร้าง Pool Villa เพื่อการลงทุน',
          date: '5 มิถุนายน 2567',
          readTime: '4 นาที',
          image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3'
        },
        {
          id: 6,
          category: 'trends',
          title: 'Smart Home: เทคโนโลยีบ้านอัจฉริยะสำหรับครอบครัวไทย',
          excerpt: 'ระบบบ้านอัจฉริยะที่เหมาะสมกับไลฟ์สไตล์และงบประมาณของครอบครัวไทย',
          date: '3 มิถุนายน 2567',
          readTime: '7 นาที',
          image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3'
        }
      ]
    },
    en: {
      hero: {
        title: 'News & Updates',
        subtitle: 'Stay updated with news, home trends, and construction tips'
      },
      categories: [
        { id: 'all', label: 'All News' },
        { id: 'news', label: 'Company News' },
        { id: 'tips', label: 'Tips' },
        { id: 'trends', label: 'Home Trends' }
      ],
      articles: [
        // English translations would go here...
      ]
    }
  }
  
  const { hero, categories, articles } = content[language]
  
  const filteredArticles = activeCategory === 'all' 
    ? articles 
    : articles.filter(article => article.category === activeCategory)
  
  return (
    <div className="min-h-screen font-iphone-system">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="News & Updates"
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
      
      {/* Featured Article */}
      {filteredArticles.length > 0 && (
        <section className="py-12 bg-gradient-to-br from-gray-50 to-green-50">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img 
                      src={`${filteredArticles[0].image}&auto=format&fit=crop&w=800&q=80`}
                      alt={filteredArticles[0].title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-8 flex flex-col justify-center">
                    <div className="mb-4">
                      <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full font-iphone-body-small text-sm">
                        {categories.find(cat => cat.id === filteredArticles[0].category)?.label}
                      </span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-iphone-heading-large text-gray-900 mb-4">
                      {filteredArticles[0].title}
                    </h2>
                    <p className="font-iphone-body-large text-gray-600 mb-6 leading-relaxed">
                      {filteredArticles[0].excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <span className="font-iphone-body-small">{filteredArticles[0].date}</span>
                        <span className="mx-2">•</span>
                        <span className="font-iphone-body-small">{filteredArticles[0].readTime}</span>
                      </div>
                      <button className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-xl font-iphone-button hover:from-green-600 hover:to-green-700 transition-all duration-300">
                        {language === 'th' ? 'อ่านต่อ' : 'Read More'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      
      {/* Articles Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {filteredArticles.slice(1).map((article) => (
              <article key={article.id} className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={`${article.image}&auto=format&fit=crop&w=600&q=80`}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-6">
                  <div className="mb-3">
                    <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full font-iphone-body-small text-sm">
                      {categories.find(cat => cat.id === article.category)?.label}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-iphone-heading-medium text-gray-900 mb-3 line-clamp-2">
                    {article.title}
                  </h3>
                  
                  <p className="font-iphone-body-medium text-gray-600 mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <span className="font-iphone-body-small">{article.date}</span>
                      <span className="mx-2">•</span>
                      <span className="font-iphone-body-small">{article.readTime}</span>
                    </div>
                    <button className="text-green-600 hover:text-green-700 font-iphone-button text-sm transition-colors">
                      {language === 'th' ? 'อ่านต่อ →' : 'Read More →'}
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-yellow-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-iphone-heading-large text-gray-900 mb-6">
              {language === 'th' ? 'อัปเดตข่าวสารล่าสุด' : 'Stay Updated'}
            </h2>
            <p className="text-xl font-iphone-body-large text-gray-600 mb-8">
              {language === 'th' 
                ? 'รับข่าวสาร เคล็ดลับ และโปรโมชั่นพิเศษจากเราทาง Line' 
                : 'Get news, tips, and special promotions from us via Line'
              }
            </p>
            <div className="bg-white p-8 rounded-2xl shadow-sm max-w-2xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="text" 
                  placeholder={language === 'th' ? 'Line ID ของคุณ' : 'Your Line ID'}
                  className="flex-1 px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent font-iphone-body-medium"
                />
                <button className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-3 rounded-xl font-iphone-button hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg">
                  {language === 'th' ? 'ติดตาม' : 'Follow'}
                </button>
              </div>
              <p className="text-sm text-gray-500 mt-4 font-iphone-body-small">
                {language === 'th' 
                  ? 'เราจะส่งข้อมูลที่เป็นประโยชน์และไม่สแปม' 
                  : 'We will send useful information and no spam'
                }
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-iphone-heading-large text-white mb-6">
            {language === 'th' ? 'พร้อมสร้างบ้านในฝันแล้ว?' : 'Ready to Build Your Dream Home?'}
          </h2>
          <p className="text-xl font-iphone-body-large text-green-100 mb-8 max-w-2xl mx-auto">
            {language === 'th' 
              ? 'ปรึกษาทีมผู้เชี่ยวชาญของเราเพื่อเริ่มต้นโครงการของคุณ' 
              : 'Consult with our expert team to start your project'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 px-8 py-4 rounded-2xl font-iphone-button text-lg transition-all duration-300 shadow-lg">
              {language === 'th' ? 'ปรึกษาฟรี' : 'Free Consultation'}
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-2xl font-iphone-button text-lg transition-all duration-300">
              {language === 'th' ? 'ดูบริการ' : 'View Services'}
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default News
