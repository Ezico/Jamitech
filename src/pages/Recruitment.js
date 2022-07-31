import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
const Recruitment = () => {
  return (
    <>
      <Hero hero="roomsHero">
        <Banner title="Our Gallery">
          <Link to="/" className="btn-primary">
            Return Home
          </Link>
        </Banner>
      </Hero>
    </>
  );
};

export default Recruitment;
