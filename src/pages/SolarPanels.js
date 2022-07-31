import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import SolarPanels from "../components/SolarPanels";
const SolarPanel = () => {
  return (
    <>
      <Hero hero="roomsHero">
        <Banner title="Solar Panels">
          <Link to="/" className="btn-primary">
            return home
          </Link>
        </Banner>
      </Hero>
      <SolarPanels />
    </>
  );
};

export default SolarPanel;
