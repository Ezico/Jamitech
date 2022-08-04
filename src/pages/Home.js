import React from "react";
import Services from "../components/Services";
import Carousel from "../components/Carousel";
const home = () => {
  return (
    <>
      <Carousel
        style={{
          maxWidth: 1200,
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 64,
        }}
      ></Carousel>
      <Services />
    </>
  );
};

export default home;
