import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Header() {
  const [language, setLanguage] = useState('th')
  const [scrolled, setScrolled] = useState(false)
  
  // Handle scroll event to change header appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  const menuItems = {
    th: [
      { name: 'หน้าแรก', path: '/' },
      { name: 'เกี่ยวกับเรา', path: '/about' },
      { name: 'บริการเรา', path: '/services' },
      { name: 'บริการหลัก', path: '/main-services' }
    ],
    en: [
      { name: 'Home', path: '/' },
      { name: 'About Us', path: '/about' },
      { name: 'Our Services', path: '/services' },
      { name: 'Main Services', path: '/main-services' }
    ]
  }

  return (
    <header 
      className={`sticky top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        scrolled 
          ? 'bg-white bg-opacity-95 backdrop-blur-sm shadow-md py-2' 
          : 'bg-white shadow-sm py-3'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <span className={`text-2xl font-bold ${scrolled ? 'text-green-800' : 'text-green-700'}`}>
              แลนด์ฟอร์ยู
            </span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            {menuItems[language].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`transition-colors ${
                  scrolled 
                    ? 'text-gray-900 hover:text-green-700' 
                    : 'text-gray-800 hover:text-green-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          
          <div className="flex items-center">
            <select 
              value={language} 
              onChange={(e) => setLanguage(e.target.value)}
              className={`border-0 text-sm rounded-md px-2 py-1 ${
                scrolled 
                  ? 'bg-gray-200 focus:ring-green-600' 
                  : 'bg-gray-100 focus:ring-green-500'
              }`}
            >
              <option value="th">ไทย</option>
              <option value="en">Eng</option>
            </select>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
