import './App.css'
import { Routes,Route } from 'react-router-dom'
import LandingPage from './page/LandingPage'
import Navbar from './Component/Navbar'
import Footer from './Component/Footer'
import ContactUs from './page/ContactUs'
import Affiliates from './page/Affiliates'
import Pricing from './page/Pricing'

function App() {

  return (
    <>
    <Navbar />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/pricing' element={<Pricing />} />
         <Route path='/affiliates' element={<Affiliates />} />
        <Route path='/contact' element={<ContactUs />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
