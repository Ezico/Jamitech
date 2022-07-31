import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Panel from "../images/pannels.jpg";
import Inverter from "../images/inverter.jpg";
import Battery from "../images/battery.jpg";
import Light from "../images/Light.jpg";
const Product = () => {
  return (
    <>
      <Hero hero="roomsHero">
        <Banner title="our Products">
          <Link to="/" className="btn-primary">
            return home
          </Link>
        </Banner>
      </Hero>

      <section className="container">
        <br />
        <div className="row">
          <div class="history-info col-4">
            <h2>High Quality Panels</h2>

            <p>
              The best type of solar panels depends on the purpose of the panels
              and where they’ll be installed. For residential properties with a
              large roof space or property, the best choice of panels may be
              polycrystalline. These panels are the most affordable for large
              spaces and will provide enough efficiency and power. For
              residential properties with smaller spaces, monocrystalline solar
              panels may be the best choice.
            </p>

            <a href="/product/solar-panel" title="Shop Now">
              Shop Now
            </a>
          </div>
          <div class="col-8">
            <img src={Panel} alt="Building Pic" />
          </div>
        </div>
        <br />
        <div className="row">
          <div class="col-8">
            <img src={Inverter} alt="Building Pic" />
          </div>

          <div class="history-info col-4">
            <h2>Inverters</h2>
            <p>
              The best type of solar panels depends on the purpose of the panels
              and where they’ll be installed. For residential properties with a
              large roof space or property, the best choice of panels may be
              polycrystalline. These panels are the most affordable for large
              spaces and will provide enough efficiency and power. For
              residential properties with smaller spaces, monocrystalline solar
              panels may be the best choice.
            </p>

            <a href="/product/inverter" title="Shop Now us">
              Shop Now
            </a>
          </div>
        </div>
        <br />
        <div className="row">
          <div class="history-info col-4">
            <h2>High Capacity Battries</h2>
            <p>
              An essential part of any renewable energy system is the ability to
              store energy produced for future use. This is were your battery
              bank comes into play. Sizing a battery system to match your
              renewable energy system is dependent on three main factors, the
              size of your system, how much you intend to store for future use
              and how many hours needs to be covered
            </p>

            <a href="/product/battery" title="Shop Now us">
              Shop Now
            </a>
          </div>
          <div class="col-8">
            <img src={Battery} alt="Building Pic" />
          </div>
        </div>
        <br />
        <div className="row">
          <div class="col-8">
            <img src={Light} alt="Building Pic" />
          </div>
          <div class="history-info col-4">
            <h2>Solar Lights</h2>
            <p>
              An essential part of any renewable energy system is the ability to
              store energy produced for future use. This is were your battery
              bank comes into play. Sizing a battery system to match your
              renewable energy system is dependent on three main factors, the
              size of your system, how much you intend to store for future use
              and how many hours needs to be covered
            </p>

            <a href="/product/solar-light" title="Shop Now us">
              Shop Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
