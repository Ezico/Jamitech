import React from "react";
import { Link } from "react-router-dom";
import Banner from "../../components/Banner";
import Hero from "../../components/Hero";

export const Elite = () => {
  return (
    <>
      <Hero hero="roomsHero">
        <Banner title="Elite Package">
          <Link to="/packages" className="btn-primary">
            See All Packages
          </Link>
        </Banner>
      </Hero>
      <br />
      <div class="container">
        <div className="packages-details">
          <div className="packages-header">Elite Package (15KVA)</div>
          <div className="packages-content row">
            <div className="p-5 col-xs-12 col-md-3 col-lg-3">
              <h3>Specification</h3>
              <ul>
                <li>15kva Pure Sine inverter x 1</li>
                <li>220AH 12V Tubular Battery x 16</li>
                <li>300Watts Monocrystalline Solar panel x 32</li>
                <li>Battery rack x 1</li>
                <li>Installation accessories</li>
                <li>Delivery and installation service inclusive</li>
              </ul>
            </div>
            <div className="p-5 col-xs-12 col-md-3 col-lg-3">
              <h3>Appliances</h3>
              <ul>
                <li>Lights - 10 to 20</li>
                <li>Fans - 5 to 7</li>
                <li>TV - 1 to 5</li>
                <li>Sound bar - 1 to 3 </li>
                <li>Laptop - 1 to 3</li>
                <li>Blender - 1</li>
                <li>Fridge - 1 to 3</li>
                <li>Freezer - 1 to 3</li>
                <li>Washing machine - 1</li>
                <li>Pumping machine - 1</li>
                <li>AC - 3 to 4</li>
              </ul>
            </div>
            <div className="p-5 col-xs-12 col-md-3 col-lg-3">
              <h3>Backup duration:</h3>
              <ul>
                <li>- 8 to 14 hours without solar</li>
                <li> - 18 to 24 hours with solar</li>
              </ul>
            </div>
            <div className="p-5 col-xs-12 col-md-3 col-lg-3">
              <h3>Prices</h3>
              <li>
                Price without solar - N4,300,000 <br />
                <Link to="/quote?Elite">(Request a quote)</Link>
              </li>
              <li>
                Price with solar - N7,200,000 <br />
                <Link to="/quote?Elite">(Request a quote)</Link>
              </li>
            </div>
          </div>

          <br />

          <p>Notes: </p>

          <li>
            - This is an estimated load; load and hours may vary based on the
            consumption of each appliance.
          </li>
          <li>- Appliances with similar consumption can be interchanged.</li>
          <li>- Low energy consuming appliances recommended</li>
          <p>
            <br />
            <strong>WITHOUT SOLAR:</strong> This is an inverter and battery
            backup system without the inclusion of solar panels. PHCN or
            Generator will be the only source of charging. Its suitable if there
            is available PHCN or Generator power for average total of 10 hours
            daily.
          </p>
          <br />
          <p>
            <strong>WITH SOLAR:</strong> This is an inverter and battery backup
            system with the inclusion of solar panels for additional source of
            charging from the sun without having to solely depend on PHCN for
            charging.
          </p>

          <p>After sales service and support fully inclusive </p>
          <p>1 year warranty on all products and installation </p>
          <p>
            Installation commences within 24 to 48 hours upon receipt of
            payment.
          </p>
        </div>
      </div>
      <br />
    </>
  );
};
