import React, { useEffect } from "react";

const CoinGeckoListWidget = () => {
  useEffect(() => {
    // Dynamically add the CoinGecko script for the coin list widget
    const script = document.createElement("script");
    script.src = "https://widgets.coingecko.com/gecko-coin-list-widget.js";
    script.async = true;
    document.body.appendChild(script);

    // Cleanup the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      {/* Add the CoinGecko List Widget */}
      <gecko-coin-list-widget 
        locale="en" 
        dark-mode="true" 
        outlined="true" 
        coin-ids="bitcoin,ethereum,litecoin"  // Add your coin IDs here
        initial-currency="usd"
      ></gecko-coin-list-widget>
    </div>
  );
};

export default CoinGeckoListWidget;
