import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Galleries from "../components/Gallery";
const Gallery = () => {
  return (
    <>
      <Hero hero="roomsHero">
        <Banner title="Our Gallery">
          <Link to="/" className="btn-primary">
            Return Home
          </Link>
        </Banner>
      </Hero>
      <Galleries />
    </>
  );
};

export default Gallery;
