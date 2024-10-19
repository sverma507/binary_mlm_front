import React, { useEffect } from "react";

const CoinGeckoTickerWidget = () => {
  useEffect(() => {
    // Dynamically add the CoinGecko ticker widget script
    const script = document.createElement("script");
    script.src = "https://widgets.coingecko.com/gecko-coin-ticker-widget.js";
    script.async = true;
    document.body.appendChild(script);

    // Clean up the script when component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      {/* Add the CoinGecko Ticker Widget */}
      <gecko-coin-ticker-widget 
        locale="en" 
        outlined="true" 
        dark-mode="true"
        initial-currency="usd"
      ></gecko-coin-ticker-widget>
    </div>
  );
};

export default CoinGeckoTickerWidget;
