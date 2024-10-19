import React, { useEffect } from "react";

const CoinGeckoWidget = () => {
  useEffect(() => {
    // Dynamically add the CoinGecko script
    const script = document.createElement("script");
    script.src = "https://widgets.coingecko.com/gecko-coin-price-marquee-widget.js";
    script.async = true;
    document.body.appendChild(script);

    // Cleanup the script when component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      {/* Add the CoinGecko Widget */}
      <gecko-coin-price-marquee-widget 
        locale="en" 
        outlined="true" 
        dark-mode="true"
        coin-ids="bitcoin,ethereum,litecoin" 
        initial-currency="usd"
      ></gecko-coin-price-marquee-widget>
    </div>
  );
};

export default CoinGeckoWidget;
