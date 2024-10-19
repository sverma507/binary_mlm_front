import React, { useEffect } from "react";

const CoinGeckoCompareChartWidget = () => {
  useEffect(() => {
    // Dynamically add the CoinGecko compare chart widget script
    const script = document.createElement("script");
    script.src = "https://widgets.coingecko.com/gecko-coin-compare-chart-widget.js";
    script.async = true;
    document.body.appendChild(script);

    // Clean up the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      {/* CoinGecko Compare Chart Widget */}
      <gecko-coin-compare-chart-widget
        locale="en"
        dark-mode="true"
        outlined="true"
        coin-ids=""  // Add your coin IDs here, e.g., "bitcoin,ethereum"
        initial-currency="usd"
      ></gecko-coin-compare-chart-widget>
    </div>
  );
};

export default CoinGeckoCompareChartWidget;
