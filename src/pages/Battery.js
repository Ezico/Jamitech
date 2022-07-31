import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Batteries from "../components/Battery";
const Battery = () => {
  return (
    <>
      <Hero hero="roomsHero">
        <Banner title="Solar Batteries">
          <Link to="/" className="btn-primary">
            return home
          </Link>
        </Banner>
      </Hero>
      <Batteries />
    </>
  );
};

export default Battery;
