import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";

const Packages = () => {
  return (
    <>
      <Hero hero="roomsHero">
        <Banner title="Explore Our Packages">
          <Link to="/" className="btn-primary">
            Return Home
          </Link>
        </Banner>
      </Hero>
      <br />
      <header class="section-header">
        <h3>Our Packages</h3>
        <div class="divider"></div>
        <p>
          Our packages are designed to provide uninterrupted power supply for
          homes and offices through our appropriately sized Inverter, battery
          bank and solar array with special consideration for appliance to be
          powered and hours of usage. Kindly go through our packages below to
          find a suitable package that fits into your budget or energy
          requirement.
        </p>
      </header>
      <section className="package-container">
        <div class="overview-content">
          <ul class="features-list">
            <li>
              <Link to="/packages/starter">
                <span> Starter package (1kva)</span>
              </Link>
            </li>
            <li>
              <Link to="/packages/bronze">
                <span> Bronze package (1.5kva)</span>
              </Link>
            </li>
            <li>
              <Link to="/packages/ruby">
                <span>Ruby Package (2.5kva)</span>
              </Link>
            </li>
            <li>
              <Link to="/packages/silver">
                <span> Silver Package (3.5kva) MID and MAX</span>
              </Link>
            </li>
            <li>
              <Link to="/packages/gold">
                <span>Gold Package (5kva) MID and MAX</span>
              </Link>
            </li>
            <li>
              <Link to="/packages/platinum">
                <span>Platinum Package (7.5kva)</span>
              </Link>
            </li>
            <li>
              <Link to="/packages/diamond">
                <span>Diamond Package (10KVA) MID and MAX</span>
              </Link>
            </li>
            <li>
              <Link to="/packages/elite">
                <span>Elite Package (15kva)</span>
              </Link>
            </li>
          </ul>
        </div>
        <br />
        <center>
          <p>
            Didn't find what you need here? <a href="/contact"> Contact us</a>{" "}
            for a custom system.
          </p>
        </center>
      </section>
    </>
  );
};

export default Packages;
