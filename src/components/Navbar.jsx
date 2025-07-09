import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Navbar({ language, setLanguage }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  const navItems = {
    th: [
      { path: '/', label: 'หน้าแรก' },
      { path: '/about', label: 'เกี่ยวกับเรา' },
      { path: '/house-construction', label: 'รับสร้างบ้าน' },
      { path: '/pool-villa', label: 'รับสร้าง Pool Villa' },
      { path: '/projects', label: 'ผลงานเรา' },
      { path: '/land-loan', label: 'รับกู้ซื้อที่ดิน' },
      { path: '/news', label: 'ข่าวสาร' },
      { path: '/contact', label: 'ติดต่อเรา' }
    ],
    en: [
      { path: '/', label: 'Home' },
      { path: '/about', label: 'About Us' },
      { path: '/house-construction', label: 'House Construction' },
      { path: '/pool-villa', label: 'Pool Villa Construction' },
      { path: '/projects', label: 'Our Works' },
      { path: '/land-loan', label: 'Land Purchase Loan' },
      { path: '/news', label: 'News' },
      { path: '/contact', label: 'Contact Us' }
    ]
  }
  
  return (
    <nav className={`nav-blur transition-all duration-300 py-3`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between md:justify-between">
          {/* Desktop Logo */}
          <Link to="/" className="hidden md:flex items-center space-x-2">
            <img src="/123.png" alt="แลนด์ฟอร์ยู" className="h-12 w-auto" />
          </Link>
          
          {/* Mobile Menu Button - Left */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`block h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
          
          {/* Mobile Logo - Centered */}
          <Link to="/" className="md:hidden absolute left-1/2 transform -translate-x-1/2">
            <img src="/123.png" alt="แลนด์ฟอร์ยู" className="h-10 w-auto" />
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems[language].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors duration-200 ${
                  location.pathname === item.path 
                    ? 'text-yellow-400' 
                    : 'text-gray-200 hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
          
          {/* Right Section */}
          <div className="flex items-center space-x-4">
            {/* Language Switcher */}
            <button
              onClick={() => setLanguage(language === 'th' ? 'en' : 'th')}
              className="text-sm font-medium text-gray-200 hover:text-white transition-colors"
            >
              {language === 'th' ? 'EN' : 'TH'}
            </button>
            
            {/* CTA Button */}
            <button className="hidden md:block bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-lg font-medium hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-sm font-iphone-button">
              {language === 'th' ? 'ปรึกษาฟรี' : 'Free Consultation'}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-white/20">
            {navItems[language].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block py-3 text-sm font-medium transition-colors ${
                  location.pathname === item.path 
                    ? 'text-yellow-400' 
                    : 'text-gray-200 hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <button className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-3 rounded-lg font-medium w-full mt-4 font-iphone-button">
              {language === 'th' ? 'ปรึกษาฟรี' : 'Free Consultation'}
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
