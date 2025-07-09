import { useState, useEffect, useRef } from 'react'
import { useOutletContext } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import HeroCarousel from '../components/HeroCarousel'
import BlurScroll from '../components/BlurScroll'
import PopularHouseDesigns from '../components/PopularHouseDesigns'
import BackgroundPattern from '../components/BackgroundPattern'
import ConstructionServices from '../components/ConstructionServices'

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger)

// SVG Icons Component
const ServiceIcon = ({ type, className = "w-16 h-16" }) => {
  const icons = {
    house: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    villa: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 21l4-7 4 7M3 7l9-4 9 4v11H3V7z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 10h2m6 0h2M7 14h2m6 0h2" />
        <circle cx="12" cy="16" r="2" strokeWidth={1.5} />
      </svg>
    ),
    design: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l4-4 4 4" />
      </svg>
    ),
    loan: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  }
  
  return icons[type] || icons.house
}

function Home() {
  const { language } = useOutletContext()
  const videoRef = useRef(null)
  
  // Marquee animation variables (from CodePen)
  const marqueeText = 'Land For You ⌂       You For Land ⌂ '
  const pathId = 'customCurve'
  const textSpacing = 2500 // เพิ่มระยะห่างเพื่อไม่ให้ทับกัน
  const tspansRef = useRef([])
  const [pathLength, setPathLength] = useState(1000)
  const pathRef = useRef(null)
  
  // ฟังก์ชันจัดการเสียงวิดีโอ
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleTimeUpdate = () => {
      // เมื่อวิดีโอเล่นไปถึง 12 วินาที และยังปิดเสียงอยู่
      if (video.currentTime >= 1 && video.muted) {
        video.muted = false // เปิดเสียง
        console.log('Auto unmuted video at 12 seconds')
      }
    }

    video.addEventListener('timeupdate', handleTimeUpdate)
    
    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate)
    }
  }, [])
  
  // Effect to calculate and store the actual length of the curved path
  useEffect(() => {
    if (pathRef.current) {
      // getTotalLength() returns the total length of the SVG path
      const length = pathRef.current.getTotalLength()
      setPathLength(length)
    }
  }, [])

  // Effect to create the continuous marquee animation
  useEffect(() => {
    let animationFrame

    // Function that moves each text span to create the scrolling effect
    const move = () => {
      tspansRef.current.forEach((tspan, i) => {
        if (!tspan) return // Skip if ref is not set

        // Get current x position and move it left by 0.3 pixel
        let x = parseFloat(tspan.getAttribute('x'))
        x -= 0.3 // Controls animation speed (ลดความเร็วลง)

        // If text has moved too far left, reset it to the right end
        if (x < -textSpacing) {
          // Calculate position at the end of the line with extra spacing
          x = (tspansRef.current.length - 1) * textSpacing + textSpacing
        }

        // Update the x position of the text span
        tspan.setAttribute('x', x)
      })

      // Schedule the next frame for smooth animation
      animationFrame = requestAnimationFrame(move)
    }

    // Start the animation
    move()

    // Cleanup: cancel animation when component unmounts
    return () => cancelAnimationFrame(animationFrame)
  }, [])

  // Calculate how many times to repeat the text to fill the entire path
  // ลดจำนวนการทำซ้ำเพื่อป้องกันการทับกัน
  const repeats = Math.ceil(pathLength / textSpacing) + 1
  
  // Content for the blur scroll component
  const blurScrollContent = {
    th: {
      title: 'เกี่ยวกับเรา',
      heading: 'รับสร้างบ้าน Pool Villa',
      text: 'บ้านพักตากอากาศส่วนตัว สไตล์รีสอร์ตออกแบบและก่อสร้างบ้าน Pool Villa สำหรับลูกค้าที่ต้องการพื้นที่พัก ผ่อนส่วนตัว รายล้อมด้วยธรรมชาติ และสระว่ายน้ำส่วนตัว',
      button: 'เพิ่มเติม',
      buttonLink: '/contact',
      images: [
        { 
          src: './3.jpg', 
          alt: 'โครงการ Pool Villa ริมทะเล',
          title: 'โครงการ Pool Villa ริมทะเล',
          description: 'ออกแบบทันสมัย เหมาะสำหรับครอบครัวเริ่มต้น',
          link: '/services/single-house'
        },
        { 
          src: './4.jpg', 
          alt: 'Pool Villa บ้านพักตากอากาศ',
          title: 'Pool Villa บ้านพักตากอากาศ',
          description: 'พื้นที่ใช้สอยเต็มประสิทธิภาพ สไตล์โมเดิร์น',
          link: '/services/two-story-house'
        },
        { 
          src: './5.jpg', 
          alt: 'Pool Villa ปล่อยเช่า',
          title: 'Pool Villa ปล่อยเช่า',
          description: 'บ้านพักตากอากาศสไตล์รีสอร์ต พร้อมสระว่ายน้ำ',
          link: '/services/pool-villa'
        },
        { 
          src: './6.jpg', 
          alt: 'Pool Villa รีสอร์ท',
          title: 'Pool Villa รีสอร์ท',
          description: 'เห็นภาพบ้านในฝันก่อนสร้างจริง รับเขียนแบบ',
          link: '/services/3d-design'
        },
        
      ]
    },
    en: {
      title: 'About Us',
      heading: 'Home is not just a place to live, but a space of family happiness',
      text: 'We believe every family deserves to have their dream home come true. With our professional team who cares about every detail, providing comprehensive services from start to key handover.',
      button: 'Free Consultation',
      buttonLink: '/contact',
      images: [
        { 
          src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c', 
          alt: 'Single Story House',
          title: 'Single Story House',
          description: 'Modern design perfect for starter families',
          link: '/services/single-house'
        },
        { 
          src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c', 
          alt: 'Two Story House',
          title: 'Luxury Two Story House',
          description: 'Maximum living space with modern style',
          link: '/services/two-story-house'
        },
        { 
          src: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea', 
          alt: 'Pool Villa',
          title: 'Luxury Pool Villa',
          description: 'Resort-style vacation home with private pool',
          link: '/services/pool-villa'
        },
        { 
          src: 'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83', 
          alt: '3D Design',
          title: 'Free 3D Design',
          description: 'Visualize your dream home before construction',
          link: '/services/3d-design'
        },
        { 
          src: 'https://images.unsplash.com/photo-1516156008625-3a9d6067fab5', 
          alt: 'Full Service',
          title: 'Complete Service',
          description: 'From land search to design, construction to handover',
          link: '/services/full-service'
        },
        { 
          src: 'https://images.unsplash.com/photo-1560520653-9e0e4c89eb11', 
          alt: 'Land Purchase Loan',
          title: 'Land Purchase Loan',
          description: 'Loan assistance service, advance 30% down payment',
          link: '/services/land-loan'
        }
      ]
    }
  };
  
  const pageContent = {
    th: {
      hero: {
        title: 'ยินดีต้อนรับสู่ แลนด์ฟอร์ยู',
        subtitle: 'บ้านที่ดินเพื่อคุณ'
      }
    },
    en: {
      hero: {
        title: 'Welcome to Land For You',
        subtitle: 'Homes and Land for You'
      }
    }
  }

  return (
    <div className="min-h-screen home-page font-iphone-system">
      {/* Hero Section */}
      <HeroCarousel language={language} />

      {/* About Us Section */}
      <section className="py-20 md:py-32 relative overflow-hidden" style={{ backgroundColor: '#36543c' }}>
        {/* Animated Text Background - Hidden on mobile, visible on desktop */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden hidden md:block">
          <svg 
            className="w-full overflow-visible block"
            viewBox="0 0 1440 120"
            style={{ 
              aspectRatio: '100 / 12',
              fontSize: '9.6rem',
              fontWeight: 700,
              fontFamily: 'serif',
              letterSpacing: '5px',
              textTransform: 'uppercase',
              lineHeight: 1,
              userSelect: 'none'
            }}
          >
            <defs>
              <path 
                ref={pathRef} 
                id={pathId} 
                d="M-100,40 Q500, 300 1540,40" 
                fill="none" 
                stroke="transparent" 
              />
            </defs>
            
            {/* Text element that will follow the curved path */}
            <text fill="rgba(255,255,255,0.05)" fontWeight="bold">
              {/* textPath makes the text follow the defined path */}
              <textPath href={`#${pathId}`}>
                {/* Create multiple instances of the text for seamless looping */}
                {Array.from({ length: repeats }).map((_, i) => (
                  <tspan
                    key={i}
                    x={i * textSpacing} // Position each text instance
                    ref={el => (tspansRef.current[i] = el)} // Store ref for animation
                    style={{ fontFamily: 'serif' }}
                  >
                    {marqueeText}
                  </tspan>
                ))}
              </textPath>
            </text>
          </svg>
        </div>

        {/* Background Pattern */}
        <BackgroundPattern />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          {/* Header */}
          <div className="text-center mb-16 md:mb-20">
            <div className="inline-block">
              <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 font-thai-heading relative">
                "ทำความรู้จัก"
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-yellow-400 rounded-full"></div>
              </h2>
            </div>
            <p className="text-xl md:text-2xl text-white/80 mt-8 max-w-3xl mx-auto font-thai-body">
              เราคือผู้เชี่ยวชาญด้านการสร้างบ้านและพัฒนาอสังหาริมทรัพย์
            </p>
          </div>
          
          {/* Main Content */}
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8 md:gap-12 items-start">
              
              {/* Company Story - Left */}
              <div className="lg:col-span-2 space-y-8">
                <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-white/10">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 font-thai-heading">
                    เรื่องราวของเรา
                  </h3>
                  <div className="text-lg md:text-xl leading-relaxed text-white/90 font-thai-body space-y-6">
                    <p>
                      <span className="text-yellow-400 font-semibold">บริษัท แลนด์ฟอร์ยู บ้านที่ดินเพื่อคุณ จำกัด</span> 
                      ก่อตั้งขึ้นด้วยวิสัยทัศน์ในการสร้างบ้านที่มีคุณภาพ ภายใต้การดำเนินงาน
                      ของทีมสถาปนิกและวิศวกรมืออาชีพ
                    </p>
                    <p>
                      ด้วย<span className="text-yellow-400 font-semibold">ประสบการณ์มากกว่า 5 ปี</span> 
                      เรามุ่งมั่นสร้างบ้านให้เป็นพื้นที่แห่งรอยยิ้มและความสุขสำหรับครอบครัว 
                      ภายใต้มาตรฐานคุณภาพระดับมืออาชีพ
                    </p>
                  </div>
                  
                  {/* Company Motto - Integrated */}
                  <div className="text-center mt-8">
                    <div className="mb-4">
                      <h4 className="text-2xl md:text-3xl font-bold text-white mb-2 font-thai-heading">
                        "คิดจะมีบ้าน คิดถึงเรา"
                      </h4>
                      <div className="w-16 h-0.5 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto rounded-full"></div>
                    </div>
                    
                    <h5 className="text-2xl md:text-3xl font-bold font-english-heading mb-2" style={{ color: '#FFFF00' }}>
                      Land For You
                    </h5>
                    
                    <p className="text-white/80 text-sm font-thai-body">
                      บ้านที่ดินเพื่อคุณ
                    </p>
                  </div>
                  
                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-white/10">
                    <div className="text-center">
                      <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">5+</div>
                      <div className="text-sm md:text-base text-white/80">ปีประสบการณ์</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">100+</div>
                      <div className="text-sm md:text-base text-white/80">โครงการสำเร็จ</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">24/7</div>
                      <div className="text-sm md:text-base text-white/80">บริการหลังการขาย</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Company Branding - Right */}
              <div className="space-y-8">
                {/* Team Video */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-3xl transform rotate-6 group-hover:rotate-3 transition-transform duration-300"></div>
                  <div className="relative w-full h-96 md:h-[500px] overflow-hidden rounded-3xl shadow-2xl transform group-hover:scale-105 transition-transform duration-300 bg-gray-900">
                    <video 
                      ref={videoRef}
                      src="/video.mp4" 
                      alt="ทีมงาน Land For You" 
                      className="w-full h-full object-cover object-center"
                      controls
                      muted
                      loop
                      autoPlay
                      playsInline
                    />
                  </div>
                </div>
                
                {/* Contact Button */}
                <div className="text-center">
                  <a className="clear font-english-body" href="/contact">
                    ติดต่อเรา
                  </a>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>

      {/* Blur Scroll Section */}
      <BlurScroll content={blurScrollContent[language]} />

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="md:container md:mx-auto md:px-6">
          <div className="text-center mb-12 md:mb-16 px-4">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 font-thai-heading" style={{ color: '#36543c' }}>
              ทำไมเลือกเรา
            </h2>
            <div className="w-16 md:w-24 h-1 md:h-1.5 bg-green-600 mx-auto rounded-full"></div>
          </div>
          
          {/* Cards Grid - Full width on mobile */}
          <div className="flex overflow-x-auto gap-4 px-4 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-8 md:overflow-visible md:max-w-7xl md:mx-auto md:px-0 snap-x snap-mandatory">
            {/* Card 1 - บริการครบวงจร */}
            <div className="relative rounded-2xl overflow-hidden shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-200 h-96 group flex-shrink-0 w-80 md:w-auto snap-center">
              {/* Background Image */}
              <div className="absolute inset-0">
                <img 
                  src="/7.jpg" 
                  alt="บริการครบวงจร" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-all duration-200"></div>
              </div>
              
              {/* Content with shadow overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <div className="relative">
                  {/* Shadow backdrop */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent rounded-lg -mx-8 -mb-8 -mt-4 blur-sm"></div>
                  
                  {/* Content */}
                  <div className="relative text-center text-white">
                    <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 font-thai-heading drop-shadow-md">
                      บริการครบวงจร
                    </h3>
                    <p className="text-sm md:text-base leading-relaxed font-thai-body drop-shadow-sm">
                      ตั้งแต่แบบบ้านจนถึงสร้างเสร็จ ไม่มีเงินสด ก็มีบ้านได้
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 - ออกแบบ 2D/3D ฟรี */}
            <div className="relative rounded-2xl overflow-hidden shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-200 h-96 group flex-shrink-0 w-80 md:w-auto snap-center">
              {/* Background Image */}
              <div className="absolute inset-0">
                <img 
                  src="/8.jpg" 
                  alt="ออกแบบ 2D / 3D ฟรี" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-all duration-200"></div>
              </div>
              
              {/* Content with shadow overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <div className="relative">
                  {/* Shadow backdrop */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent rounded-lg -mx-8 -mb-8 -mt-4 blur-sm"></div>
                  
                  {/* Content */}
                  <div className="relative text-center text-white">
                    <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 font-thai-heading drop-shadow-md">
                      ออกแบบ 2D / 3D ฟรี
                    </h3>
                    <p className="text-sm md:text-base leading-relaxed font-thai-body drop-shadow-sm">
                      เห็นภาพบ้านในฝันก่อนสร้างจริง รับเขียนแบบมาตรฐาน
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 - ปรึกษาราคา */}
            <div className="relative rounded-2xl overflow-hidden shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-200 h-96 group flex-shrink-0 w-80 md:w-auto snap-center">
              {/* Background Image */}
              <div className="absolute inset-0">
                <img 
                  src="/9.jpg" 
                  alt="ปรึกษาราคางบประมาณฟรี" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-all duration-200"></div>
              </div>
              
              {/* Content with shadow overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <div className="relative">
                  {/* Shadow backdrop */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent rounded-lg -mx-8 -mb-8 -mt-4 blur-sm"></div>
                  
                  {/* Content */}
                  <div className="relative text-center text-white">
                    <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 font-thai-heading drop-shadow-md">
                      ปรึกษาราคางบประมาณฟรี
                    </h3>
                    <p className="text-sm md:text-base leading-relaxed font-thai-body drop-shadow-sm">
                      ประเมินราคาและวางแผนงบประมาณ ให้คำปรึกษาฟรี
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 4 - ไม่มีเงินสด */}
            <div className="relative rounded-2xl overflow-hidden shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-200 h-96 group flex-shrink-0 w-80 md:w-auto snap-center">
              {/* Background Image */}
              <div className="absolute inset-0">
                <img 
                  src="/10.jpg" 
                  alt="ไม่มีเงินสด...ก็มีบ้านได้" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-all duration-200"></div>
              </div>
              
              {/* Content with shadow overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <div className="relative">
                  {/* Shadow backdrop */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent rounded-lg -mx-8 -mb-8 -mt-4 blur-sm"></div>
                  
                  {/* Content */}
                  <div className="relative text-center text-white">
                    <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 font-thai-heading drop-shadow-md">
                      ไม่มีเงินสด...ก็มีบ้านได้
                    </h3>
                    <p className="text-sm md:text-base leading-relaxed font-thai-body drop-shadow-sm">
                      รับกู้ซื้อที่ดินเพื่อปลูกสร้าง สำรองจ่ายงวดแรก 30%
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* House Construction Services Section */}
      <ConstructionServices />

      {/* Popular House Designs Section */}
      <PopularHouseDesigns />
    </div>
  )
}

export default Home
