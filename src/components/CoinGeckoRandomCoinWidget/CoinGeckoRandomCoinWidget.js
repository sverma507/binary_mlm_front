import React, { useEffect } from "react";

const CoinGeckoRandomCoinWidget = () => {
  useEffect(() => {
    // Dynamically load the CoinGecko widget script
    const script = document.createElement("script");
    script.src = "https://widgets.coingecko.com/gecko-random-coin-widget.js";
    script.async = true;
    document.body.appendChild(script);

    // Cleanup the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      {/* CoinGecko Random Coin Widget */}
      <gecko-random-coin-widget
        locale="en"
        dark-mode="true"
        outlined="true"
      ></gecko-random-coin-widget>
    </div>
  );
};

export default CoinGeckoRandomCoinWidget;
