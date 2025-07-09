import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Projects from './pages/Projects'
import News from './pages/News'
import Contact from './pages/Contact'
import HouseConstruction from './pages/HouseConstruction'
import PoolVilla from './pages/PoolVilla'
import LandLoan from './pages/LandLoan'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="house-construction" element={<HouseConstruction />} />
          <Route path="pool-villa" element={<PoolVilla />} />
          <Route path="projects" element={<Projects />} />
          <Route path="land-loan" element={<LandLoan />} />
          <Route path="news" element={<News />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
