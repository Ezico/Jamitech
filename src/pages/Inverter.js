import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Inverters from "../components/Inverter";
const Inverter = () => {
  return (
    <>
      <Hero hero="roomsHero">
        <Banner title="Inverters">
          <Link to="/" className="btn-primary">
            return home
          </Link>
        </Banner>
      </Hero>
      <Inverters />
    </>
  );
};

export default Inverter;
