import React from 'react'
import "./home.css"
import Navbar from '../../components/navbar/Navbar'
import { useNavigate } from 'react-router'
import Swipper from '../../components/swipper/swipper'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import MarketStatus from '../../components/Market_Status/Market_Status'
import CurrencySelector from '../../components/CurrencySelector/CurrencySelector'

const Home = () => {

  const navigate = useNavigate();

  return (
<>
    <Navbar/>
    {/* <Swipper/> */}
    <Header/>
    <MarketStatus/>
    <CurrencySelector/>
    <Footer/>
</>
  )
}

export default Home