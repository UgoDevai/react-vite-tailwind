function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-semibold text-green-400">แสนสิริ</h3>
            <p className="text-gray-400 mt-2">เรียบ หรู อบอุ่น กันเอง</p>
          </div>
          
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-12 text-center md:text-left">
            <div>
              <h4 className="text-yellow-400 font-medium mb-2">ติดต่อเรา</h4>
              <p className="text-gray-400">info@example.com</p>
              <p className="text-gray-400">099-999-9999</p>
            </div>
            
            <div>
              <h4 className="text-yellow-400 font-medium mb-2">ที่อยู่</h4>
              <p className="text-gray-400">
                เลขที่ 123 ถนนสุขุมวิท<br />
                กรุงเทพฯ 10110
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-6 text-sm text-center text-gray-500">
          <p>© {new Date().getFullYear()} แสนสิริ. สงวนลิขสิทธิ์.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
