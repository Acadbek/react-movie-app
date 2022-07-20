import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Main = (props) => {
  return (
    <div className="mainItem">
      <Navbar />
      {props.children}
      <Footer />
    </div>
  );
};

export default Main;
