import React, { useEffect } from "react";

const CoinGeckoPriceStaticHeadlineWidget = () => {
  useEffect(() => {
    // Dynamically add the CoinGecko static headline widget script
    const script = document.createElement("script");
    script.src = "https://widgets.coingecko.com/gecko-coin-price-static-headline-widget.js";
    script.async = true;
    document.body.appendChild(script);

    // Clean up the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      {/* CoinGecko Price Static Headline Widget */}
      <gecko-coin-price-static-headline-widget
        locale="en"
        dark-mode="true"
        outlined="true"
        coin-ids=""  // Add the coin IDs you want to display, e.g., "bitcoin,ethereum"
        initial-currency="usd"
      ></gecko-coin-price-static-headline-widget>
    </div>
  );
};

export default CoinGeckoPriceStaticHeadlineWidget;
