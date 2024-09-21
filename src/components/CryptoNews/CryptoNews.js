import React from 'react';
import { FaClock } from 'react-icons/fa';
import Layout from '../layout/layout';

const CryptoNews = () => {
  // Predefined static news articles with unique crypto images
  const defaultNews = [
    {
      title: "Bitcoin Reaches New All-Time High",
      description:
        "Bitcoin has reached a new all-time high, breaking previous records and fueling speculation in the cryptocurrency market.",
      imgURL:
        "https://cryptologos.cc/logos/bitcoin-btc-logo.png",
      feedDate: "2023-01-15T10:00:00Z",
    },
    {
      title: "Ethereum 2.0 Launches with Major Upgrades",
      description:
        "The much-anticipated Ethereum 2.0 upgrade is here, promising faster transactions and lower fees for its users.",
      imgURL:
        "https://cryptologos.cc/logos/ethereum-eth-logo.png",
      feedDate: "2023-02-01T14:30:00Z",
    },
    {
      title: "Elon Musk Tweets About Dogecoin Again",
      description:
        "Elon Musk is once again stirring the markets with his latest tweet about Dogecoin, causing the price to surge.",
      imgURL:
        "https://cryptologos.cc/logos/dogecoin-doge-logo.png",
      feedDate: "2023-03-10T12:00:00Z",
    },
    {
      title: "Litecoin's Future: What Investors Should Know",
      description:
        "As Litecoin continues to evolve, investors are keen to understand its future trajectory.",
      imgURL:
        "https://cryptologos.cc/logos/litecoin-ltc-logo.png",
      feedDate: "2023-03-12T09:00:00Z",
    },
    {
      title: "Ripple's Ongoing Legal Battle: Latest Updates",
      description:
        "Ripple Labs faces ongoing legal challenges. Here's what you need to know about the latest developments.",
      imgURL:
        "https://cryptologos.cc/logos/ripple-xrp-logo.png",
      feedDate: "2023-03-15T11:00:00Z",
    },
    {
      title: "Cardano's Smart Contract Capabilities Explained",
      description:
        "Understanding how Cardano's smart contract capabilities can impact the blockchain space.",
      imgURL:
        "https://cryptologos.cc/logos/cardano-ada-logo.png",
      feedDate: "2023-03-20T15:00:00Z",
    },
    {
      title: "The Rise of Decentralized Finance (DeFi)",
      description:
        "Decentralized finance continues to gain traction. What does this mean for traditional finance?",
      imgURL:
        "https://cryptologos.cc/logos/uniswap-uni-logo.png",
      feedDate: "2023-04-01T10:30:00Z",
    },
    {
      title: "NFTs: The Future of Digital Ownership",
      description:
        "Exploring the role of NFTs in the future of digital ownership and creativity.",
      imgURL:
        "https://cryptologos.cc/logos/ethereum-eth-logo.png",
      feedDate: "2023-04-10T12:45:00Z",
    },
    {
      title: "Solana's Speed and Scalability Advantages",
      description:
        "How Solana's technology offers speed and scalability compared to other blockchains.",
      imgURL:
        "https://cryptologos.cc/logos/solana-sol-logo.png",
      feedDate: "2023-04-15T14:00:00Z",
    },
    {
      title: "Analyzing the Latest Trends in Cryptocurrency",
      description:
        "A deep dive into the latest trends shaping the cryptocurrency landscape.",
      imgURL:
        "https://cryptologos.cc/logos/polkadot-dot-logo.png",
      feedDate: "2023-04-20T13:15:00Z",
    },
    {
      title: "Understanding Blockchain Technology",
      description:
        "A comprehensive overview of how blockchain technology works and its potential applications.",
      imgURL:
        "https://cryptologos.cc/logos/chainlink-link-logo.png",
      feedDate: "2023-05-01T08:00:00Z",
    },
    {
      title: "Top 5 Cryptocurrencies to Watch in 2023",
      description:
        "A look at the top cryptocurrencies that investors should keep an eye on this year.",
      imgURL:
        "https://cryptologos.cc/logos/stellar-xlm-logo.png",
      feedDate: "2023-05-10T09:30:00Z",
    },
  ];

  return (
    <Layout>
    <div className="min-h-screen bg-gray-900 text-gray-100 p-8">
      {/* Outer Container */}
      <div className="w-4/5 mx-auto">
        {/* Heading */}
        <section className="text-center my-8">
          <h1 className="text-4xl font-bold text-blue-400 mb-6">Crypto News</h1>
          <p className="text-lg text-gray-300">
            Here are the latest headlines in the world of cryptocurrency. Stay informed about the most recent events and updates.
          </p>
        </section>

        {/* News List */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 mt-12">
          {defaultNews.map((article, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300"
            >
              {/* News Image */}
              <img
                src={article.imgURL}
                alt={article.title}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              {/* News Title */}
              <h3 className="text-xl font-bold text-blue-300 mb-2">
                {article.title}
              </h3>
              {/* News Description */}
              <p className="text-gray-400 mb-4">{article.description}</p>
              {/* News Meta */}
              <div className="flex items-center text-gray-500 text-sm">
                <FaClock className="mr-2" />
                {new Date(article.feedDate).toLocaleString()}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default CryptoNews;
