import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import "./home.css";
import Layout from '../../components/layout/layout';
import Header from '../../components/Header/Header';
import Swiper_div from '../../components/Swiper_div/Swiper_div';
import Achievers from '../../components/Achivers/Achivers';
import MarketStatus from '../../components/Market_Status/Market_Status';
import CurrencySelector from '../../components/CurrencySelector/CurrencySelector';
import TradingSection from '../../components/TradingSection/TradingSection';
import NewOffer_Popup from '../../components/NewOffer_Popup/NewOffer_Popup';
import CoinGeckoWidget from '../../components/CoinGeckoWidget/CoinGeckoWidget';
import CoinGeckoListWidget from '../../components/CoinGeckoListWidget/CoinGeckoListWidget';
import CoinGeckoTickerWidget from '../../components/CoinGeckoTickerWidget/CoinGeckoTickerWidget';
import CoinGeckoCompareChartWidget from '../../components/CoinGeckoCompareChartWidget/CoinGeckoCompareChartWidget';
import CoinGeckoPriceStaticHeadlineWidget from '../../components/CoinGeckoPriceStaticHeadlineWidget/CoinGeckoPriceStaticHeadlineWidget';
import CoinGeckoRandomCoinWidget from '../../components/CoinGeckoRandomCoinWidget/CoinGeckoRandomCoinWidget';
import CoinGeckoPriceChartWidget from '../../components/CoinGeckoPriceChartWidget/CoinGeckoPriceChartWidget';
import CoinGeckoHeatmapWidget from '../../components/CoinGeckoHeatmapWidget/CoinGeckoHeatmapWidget';
import CoinGeckoMarketTickerListWidget from '../../components/CoinGeckoMarketTickerListWidget/CoinGeckoMarketTickerListWidget';

const Home = () => {
  const [showOfferPopup, setShowOfferPopup] = useState(true); // Control visibility of popup
  const [offerDetails, setOfferDetails] = useState(null); // State to store offer details

  useEffect(() => {
    const fetchGiftPopup = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/admin/get-gift-popup`); // Replace with actual API endpoint
        if (response.status === 200 && response.data.data) {
          const gift = response.data.data[0]; // Assuming you're getting an array with one gift
          setOfferDetails({
            title: gift.title,
            description: gift.description,
            price: gift.price,
            buttonText: "Claim Now", // You can customize this or fetch from the backend if needed
            onActionClick: () => {
              alert("Offer claimed!"); 
              setShowOfferPopup(false); // Close popup after action
            },
          });
        } else {
          toast.error("No gift popup found.");
        }
      } catch (error) {
        toast.error("Failed to fetch gift popup.");
      }
    };

    fetchGiftPopup();
  }, []);

  return (
    <Layout>
     
      <Header />
      <CoinGeckoWidget/>
      <Swiper_div />
      
      {/* Offer Popup - shows only if showOfferPopup is true and offerDetails are available */}
      {showOfferPopup && offerDetails && (
        <NewOffer_Popup
        offerDetails={offerDetails}
        onClose={() => setShowOfferPopup(false)} // Close popup when user clicks the close button
        />
      )}
      
      <CoinGeckoPriceStaticHeadlineWidget/>
      <CoinGeckoListWidget/>
      <CoinGeckoTickerWidget/>
      <CoinGeckoCompareChartWidget/>
      <CoinGeckoRandomCoinWidget/>
      <CoinGeckoPriceChartWidget/>
      <CoinGeckoHeatmapWidget/>
      <CoinGeckoMarketTickerListWidget/>
      <MarketStatus />
      <CurrencySelector />
      <Achievers />
      <TradingSection />
    </Layout>
  );
};

export default Home;
