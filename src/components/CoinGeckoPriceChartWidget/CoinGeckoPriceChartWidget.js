import React, { useEffect } from "react";

const CoinGeckoPriceChartWidget = () => {
  useEffect(() => {
    // Dynamically load the CoinGecko widget script
    const script = document.createElement("script");
    script.src = "https://widgets.coingecko.com/gecko-coin-price-chart-widget.js";
    script.async = true;
    document.body.appendChild(script);

    // Cleanup the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      {/* CoinGecko Coin Price Chart Widget */}
      <gecko-coin-price-chart-widget
        locale="en"
        dark-mode="true"
        outlined="true"
        initial-currency="usd"
      ></gecko-coin-price-chart-widget>
    </div>
  );
};

export default CoinGeckoPriceChartWidget;
