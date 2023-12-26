import HeroSection from "../components/HeroSection";
import React, { useEffect } from "react";
const About = (props) => {
  useEffect(() => {
    document.title = `${props.title}`;
  }, [props.title]);

  const data = {
    name: "ZARA",
  };
  return (
    <>
      <HeroSection myData={data} />
    </>
  );
};

export default About;
