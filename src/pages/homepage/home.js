import React from 'react'
import "./home.css"
import Navbar from '../../components/navbar/Navbar'
import { useNavigate } from 'react-router'
import Swipper from '../../components/swipper/swipper'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import MarketStatus from '../../components/Market_Status/Market_Status'
import CurrencySelector from '../../components/CurrencySelector/CurrencySelector'
import TradingSection from '../../components/TradingSection/TradingSection'
import ContactUs from '../../components/ContactUs/ContactUs'

const Home = () => {




  return (
<>
    <Navbar/>
    {/* <Swipper/> */}
    <Header/>
    {/* <MarketStatus/>
    <CurrencySelector/>
    <TradingSection/> */}
    {/* <ContactUs/> */}
    <Footer/>
</>
  )
}

export default Home