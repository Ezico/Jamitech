import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
const Terms = () => {
  return (
    <>
      <Hero hero="roomsHero">
        <Banner title="Terms and Conditions">
          <Link to="/" className="btn-primary">
            return home
          </Link>
        </Banner>
      </Hero>
    </>
  );
};

export default Terms;
