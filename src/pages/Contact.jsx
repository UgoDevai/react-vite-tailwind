import { useOutletContext } from 'react-router-dom'
import { useState } from 'react'

function Contact() {
  const { language } = useOutletContext()
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(language === 'th' 
      ? 'ขอบคุณสำหรับข้อความของคุณ! เราจะติดต่อกลับโดยเร็วที่สุด' 
      : 'Thank you for your message! We will contact you as soon as possible'
    )
    setFormData({ name: '', phone: '', email: '', service: '', message: '' })
  }
  
  const content = {
    th: {
      hero: {
        title: 'ติดต่อเรา',
        subtitle: 'พร้อมให้คำปรึกษาและบริการ ทุกวัน ตลอด 24 ชั่วโมง'
      },
      company: {
        name: 'บริษัท แลนด์ฟอร์ยู บ้านที่ดินเพื่อคุณ จำกัด',
        address: '93/2 ม.5 ต.พะวง อ.เมือง จ.สงขลา 90100',
        taxId: 'เลขที่ผู้เสียภาษี 0905564000732',
        phone: '082-4394012',
        line: 'Line: 0824394012'
      },
      sections: {
        info: 'ข้อมูลบริษัท',
        contact: 'ช่องทางติดต่อ',
        social: 'ติดตามเราได้ที่',
        form: 'ส่งข้อความถึงเรา'
      },
      form: {
        name: 'ชื่อ-นามสกุล',
        phone: 'เบอร์โทรศัพท์',
        email: 'อีเมล',
        service: 'บริการที่สนใจ',
        message: 'ข้อความ',
        submit: 'ส่งข้อความ',
        placeholder: {
          name: 'กรุณาใส่ชื่อ-นามสกุล',
          phone: 'กรุณาใส่เบอร์โทรศัพท์',
          email: 'กรุณาใส่อีเมล',
          message: 'กรุณาใส่ข้อความที่ต้องการสอบถาม'
        }
      },
      services: [
        'รับสร้างบ้านภาคใต้',
        'รับสร้างบ้าน Pool Villa',
        'ออกแบบ 3D เขียนแบบ',
        'ขั้นตอนการสร้างบ้าน',
        'รับกู้ซื้อที่ดินเพื่อปลูกสร้างบ้าน',
        'อื่นๆ'
      ]
    },
    en: {
      hero: {
        title: 'Contact Us',
        subtitle: 'Ready to provide consultation and service 24/7'
      },
      company: {
        name: 'Land For You Co., Ltd.',
        address: '93/2 Moo 5, Pawang Sub-district, Mueang District, Songkhla Province 90100',
        taxId: 'Tax ID: 0905564000732',
        phone: '082-4394012',
        line: 'Line: 0824394012'
      },
      sections: {
        info: 'Company Information',
        contact: 'Contact Channels',
        social: 'Follow Us',
        form: 'Send Us a Message'
      },
      form: {
        name: 'Full Name',
        phone: 'Phone Number',
        email: 'Email',
        service: 'Service of Interest',
        message: 'Message',
        submit: 'Send Message',
        placeholder: {
          name: 'Please enter your full name',
          phone: 'Please enter your phone number',
          email: 'Please enter your email',
          message: 'Please enter your inquiry message'
        }
      },
      services: [
        'House Construction in Southern Thailand',
        'Pool Villa Construction',
        '3D Design & Blueprints',
        'Construction Process',
        'Land Purchase Loan Services',
        'Others'
      ]
    }
  }
  
  const { hero, company, sections, form, services } = content[language]

  
  return (
    <div className="min-h-screen font-iphone-system">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80"
            alt="Contact Us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-green-700/60"></div>
        </div>
        <div className="relative z-10 text-center text-white px-6 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-iphone-heading-xl text-white mb-4">{hero.title}</h1>
          <p className="text-xl md:text-2xl font-iphone-body-large text-green-100">{hero.subtitle}</p>
        </div>
      </section>
      
      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            
            {/* Left Column - Company Info & Contact */}
            <div className="space-y-12">
              
              {/* Company Information */}
              <div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-english-heading mb-8">{sections.info}</h2>
                <div className="bg-gradient-to-br from-green-50 to-yellow-50 p-8 rounded-2xl">
                  <h3 className="text-xl font-iphone-heading-medium text-gray-900 mb-6">{company.name}</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-green-500 rounded-lg mr-4 mt-1 flex items-center justify-center">
                        <span className="text-white text-sm">📍</span>
                      </div>
                      <p className="font-iphone-body-medium text-gray-700 leading-relaxed">{company.address}</p>
                    </div>
                    <div className="flex items-center">
                      <div className="w-6 h-6 bg-green-500 rounded-lg mr-4 flex items-center justify-center">
                        <span className="text-white text-sm">🏢</span>
                      </div>
                      <p className="font-iphone-body-medium text-gray-700">{company.taxId}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Contact Channels */}
              <div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-english-heading mb-8">{sections.contact}</h2>
                <div className="space-y-4">
                  
                  {/* Phone */}
                  <div className="bg-white border border-gray-200 p-6 rounded-2xl hover:shadow-md transition-shadow">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl mr-4 flex items-center justify-center">
                        <span className="text-white text-xl">📞</span>
                      </div>
                      <div>
                        <h3 className="font-iphone-heading-medium text-gray-900 mb-1">โทรศัพท์</h3>
                        <a href={`tel:${company.phone}`} className="font-iphone-body-large text-green-600 hover:text-green-700">
                          {company.phone}
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  {/* Line */}
                  <div className="bg-white border border-gray-200 p-6 rounded-2xl hover:shadow-md transition-shadow">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-yellow-400 rounded-xl mr-4 flex items-center justify-center">
                        <span className="text-white text-xl">💬</span>
                      </div>
                      <div>
                        <h3 className="font-iphone-heading-medium text-gray-900 mb-1">Line</h3>
                        <p className="font-iphone-body-large text-green-600">0824394012</p>
                      </div>
                    </div>
                  </div>
                  
                </div>
              </div>
              
              {/* Social Media */}
              <div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-english-heading mb-8">{sections.social}</h2>
                <div className="flex gap-4">
                  {/* Facebook */}
                  <a 
                    href="https://www.facebook.com/share/1GJV2CvJKz/?mibextid=wwXIfr" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center text-white text-2xl hover:bg-blue-700 transition-colors group"
                    title="Facebook"
                  >
                    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  
                  {/* TikTok */}
                  <a 
                    href="https://www.tiktok.com/@landforyoupoolvilla" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-black rounded-2xl flex items-center justify-center text-white text-2xl hover:bg-gray-800 transition-colors group"
                    title="TikTok"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.321 5.562a5.122 5.122 0 01-.443-.258 6.228 6.228 0 01-1.138-.927C16.925 3.563 16.6 2.49 16.6 1.4h-3.4v14.82c0 .89-.242 1.73-.662 2.45a4.464 4.464 0 01-1.842 1.617 4.465 4.465 0 01-2.347.653c-2.47 0-4.471-2.002-4.471-4.471 0-2.47 2.001-4.472 4.471-4.472.465 0 .914.072 1.336.205v-3.543a7.947 7.947 0 00-1.336-.115c-4.389 0-7.943 3.554-7.943 7.943 0 4.388 3.554 7.942 7.943 7.942 4.388 0 7.942-3.554 7.942-7.942V9.317a9.69 9.69 0 005.568 1.731V7.6a6.228 6.228 0 01-2.957-2.038z"/>
                    </svg>
                  </a>
                </div>
              </div>
              
            </div>
            
            {/* Right Column - Contact Form */}
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-english-heading mb-8">{sections.form}</h2>
              <form onSubmit={handleSubmit} className="bg-gray-50 p-8 rounded-2xl space-y-6">
                
                {/* Name */}
                <div>
                  <label className="block font-iphone-heading-small text-gray-700 mb-2">{form.name}</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={form.placeholder.name}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent font-iphone-body-medium"
                    required
                  />
                </div>
                
                {/* Phone */}
                <div>
                  <label className="block font-iphone-heading-small text-gray-700 mb-2">{form.phone}</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={form.placeholder.phone}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent font-iphone-body-medium"
                    required
                  />
                </div>
                
                {/* Email */}
                <div>
                  <label className="block font-iphone-heading-small text-gray-700 mb-2">{form.email}</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={form.placeholder.email}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent font-iphone-body-medium"
                    required
                  />
                </div>
                
                {/* Service Interest */}
                <div>
                  <label className="block font-iphone-heading-small text-gray-700 mb-2">{form.service}</label>
                  <select 
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent font-iphone-body-medium"
                  >
                    <option value="">เลือกบริการที่สนใจ</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>
                
                {/* Message */}
                <div>
                  <label className="block font-iphone-heading-small text-gray-700 mb-2">{form.message}</label>
                  <textarea 
                    rows={5}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={form.placeholder.message}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent font-iphone-body-medium resize-none"
                    required
                  ></textarea>
                </div>
                
                {/* Submit Button */}
                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-4 rounded-xl font-iphone-button text-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  {form.submit}
                </button>
                
              </form>
            </div>
            
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-english-heading-white mb-6">
            {language === 'th' ? 'พร้อมเริ่มต้นสร้างบ้านในฝันแล้วหรือยัง?' : 'Ready to Start Building Your Dream Home?'}
          </h2>
          <p className="text-xl font-iphone-body-large text-green-100 mb-8 max-w-2xl mx-auto">
            {language === 'th' 
              ? 'ติดต่อเราวันนี้เพื่อรับคำปรึกษาฟรี และเริ่มต้นการเดินทางสู่บ้านในฝัน' 
              : 'Contact us today for free consultation and start your journey to your dream home'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={`tel:${company.phone}`}
              className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 px-8 py-4 rounded-2xl font-iphone-button text-lg transition-all duration-300 shadow-lg inline-block"
            >
              {language === 'th' ? 'โทรเลย!' : 'Call Now!'}
            </a>
            <button className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-2xl font-iphone-button text-lg transition-all duration-300">
              {language === 'th' ? 'Line มาคุย' : 'Chat on Line'}
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
