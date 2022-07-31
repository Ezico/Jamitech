import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import SolarLights from "../components/SolarLight";
const SolarLight = () => {
  return (
    <>
      <Hero hero="roomsHero">
        <Banner title="Solar Lights">
          <Link to="/" className="btn-primary">
            return home
          </Link>
        </Banner>
      </Hero>
      <SolarLights />
    </>
  );
};

export default SolarLight;
