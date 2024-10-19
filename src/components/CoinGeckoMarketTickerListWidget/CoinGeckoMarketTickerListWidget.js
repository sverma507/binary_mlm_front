import React, { useEffect } from "react";

const CoinGeckoMarketTickerListWidget = () => {
  useEffect(() => {
    // Dynamically load the CoinGecko widget script
    const script = document.createElement("script");
    script.src = "https://widgets.coingecko.com/gecko-coin-market-ticker-list-widget.js";
    script.async = true;
    document.body.appendChild(script);

    // Cleanup the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      {/* CoinGecko Market Ticker List Widget */}
      <gecko-coin-market-ticker-list-widget
        locale="en"
        outlined="true"
        dark-mode="true"
        initial-currency="usd"
      ></gecko-coin-market-ticker-list-widget>
    </div>
  );
};

export default CoinGeckoMarketTickerListWidget;
