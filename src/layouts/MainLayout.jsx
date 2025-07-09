import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useLenis } from '../hooks/useLenis'

function MainLayout() {
  const [language, setLanguage] = useState('th')
  // เริ่มใช้งาน Lenis smooth scrolling
  useLenis();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar language={language} setLanguage={setLanguage} />
      <main className="pt-16">
        <Outlet context={{ language, setLanguage }} />
      </main>
      
      {/* Apple-style Footer */}
      <footer className="bg-white border-t border-gray-200 mt-20">
        <div className="container mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-4">
                {language === 'th' ? 'เกี่ยวกับเรา' : 'About'}
              </h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900 transition-colors">Company</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Team</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-4">
                {language === 'th' ? 'โครงการ' : 'Projects'}
              </h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900 transition-colors">Residential</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Commercial</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Mixed Use</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-4">
                {language === 'th' ? 'บริการ' : 'Services'}
              </h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900 transition-colors">Design</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Construction</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Consultation</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-4">
                {language === 'th' ? 'ติดต่อ' : 'Contact'}
              </h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900 transition-colors">Support</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Sales</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Press</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-600">
              © 2024 Sansiri. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <span className="sr-only">Facebook</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <span className="sr-only">Twitter</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default MainLayout
