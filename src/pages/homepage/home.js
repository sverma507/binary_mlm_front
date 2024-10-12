import React, { useState } from 'react';
import "./home.css";
import Layout from '../../components/layout/layout';
import Header from '../../components/Header/Header';
import Swiper_div from '../../components/Swiper_div/Swiper_div';
import Achievers from '../../components/Achivers/Achivers';
import MarketStatus from '../../components/Market_Status/Market_Status';
import CurrencySelector from '../../components/CurrencySelector/CurrencySelector';
import TradingSection from '../../components/TradingSection/TradingSection';
import NewOffer_Popup from '../../components/NewOffer_Popup/NewOffer_Popup';

const Home = () => {
  const [showOfferPopup, setShowOfferPopup] = useState(true); // Control visibility of popup

  // Dummy offer data
  const offerDetails = {
    title: "Welcome to CryptoWorld!",
    description: "Get 20% off on your first trade. Use code: CRYPTO20",
    price: "Free Trial",
    buttonText: "Claim Now",
    onActionClick: () => {
      alert("Offer claimed! Happy Trading!"); 
      setShowOfferPopup(false); // Close popup after action
    },
  };

  return (
    <Layout>
      <Header />
      <Swiper_div />
      
      {/* Offer Popup - shows only if showOfferPopup is true */}
      {showOfferPopup && (
        <NewOffer_Popup
          offerDetails={offerDetails}
          onClose={() => setShowOfferPopup(false)} // Close popup when user clicks the close button
        />
      )}
      
      <Achievers />
      <MarketStatus />
      <CurrencySelector />
      <TradingSection />
    </Layout>
  );
};

export default Home;
