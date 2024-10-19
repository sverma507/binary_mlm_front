import React, { useEffect } from "react";

const CoinGeckoHeatmapWidget = () => {
  useEffect(() => {
    // Dynamically load the CoinGecko widget script
    const script = document.createElement("script");
    script.src = "https://widgets.coingecko.com/gecko-coin-heatmap-widget.js";
    script.async = true;
    document.body.appendChild(script);

    // Cleanup the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      {/* CoinGecko Coin Heatmap Widget */}
      <gecko-coin-heatmap-widget
        locale="en"
        dark-mode="true"
        outlined="true"
        top="100"
      ></gecko-coin-heatmap-widget>
    </div>
  );
};

export default CoinGeckoHeatmapWidget;
