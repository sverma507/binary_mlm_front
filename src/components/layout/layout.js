import React from "react";
import { Helmet } from "react-helmet";
import BottomNav from "../navbar/navbar.js";
// import Footer from "./footer/footer";
// import { Toaster } from "react-hot-toast";

const Layout = ({ children, title, description, keywords, author }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      
      {/* <BottomNav/> */}
      <main className="" style={{ minHeight: "70vh"  }}>
        {/* <Toaster /> */}
        {children}
      </main>
    </div>
  );
};

Layout.defaultProps = {
  title: "Hype Drinks - Expand Network",
  discription: "Drinks Application",
  keywords: "mern. react, node, mongodb",
  author: "Elite Infotech",
};

export default Layout;
