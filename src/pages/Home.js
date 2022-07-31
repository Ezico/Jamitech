import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
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
