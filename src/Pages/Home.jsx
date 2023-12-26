import React, { useEffect } from "react";
import FeactureProducts from "../components/FeactureProducts";
import HeroSection from "../components/HeroSection";
import Services from "../components/Services";
import Truested from "../components/Truested";

const Home = (props) => {
  useEffect(() => {
    document.title = `${props.title}`;
  }, [props.title]);

  const data = {
    name: "ZARA",
  };
  return (
    <>
      <HeroSection myData={data} />
      <FeactureProducts />
      <Services />
      <Truested />
    </>
  );
};

export default React.memo(Home);
