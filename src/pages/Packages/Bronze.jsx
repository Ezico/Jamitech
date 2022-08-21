import React from "react";
import { Link } from "react-router-dom";
import Hero from "../../components/Hero";
import Banner from "../../components/Banner";
function Bronze() {
  return (
    <div>
      <Hero hero="roomsHero">
        <Banner title="Bronze Package">
          <Link to="/packages" className="btn-primary">
            See All Packages
          </Link>
        </Banner>
      </Hero>
      <br />
      <div class="container">
        <div className="packages-details">
          <div className="packages-header">Bronze Package (1.5kva)</div>
          <div className="packages-content row">
            <div className="p-5 col-xs-12 col-md-3 col-lg-3">
              <h3>Specification</h3>
              <ul>
                <li>1.5kva Pure Sine inverter x 1</li>
                <li>150AH 12V Tubular Battery x 2</li>
                <li> 300Watts Monocrystalline Solar panel x 3</li>
                <li>Battery rack x 1</li>
                <li>Installation accessories</li>
                <li>Delivery and installation service inclusive</li>
              </ul>
            </div>
            <div className="p-5 col-xs-12 col-md-3 col-lg-3">
              <h3>Appliances</h3>
              <ul>
                <li>Lights - 5 to 10</li>
                <li>Fans - 1 to 3</li>
                <li>TV - 1 to 2</li>
                <li>Sound bar - 1 </li>
                <li>Laptop - 1 to 2</li>
                <li>Blender - 1</li>
                {/* <li>Fridge - 1 to 2</li>
                <li>Freezer - 1 to 2</li>
                <li>Washing machine - 1</li>
                <li>Pumping machine - 1</li>
                <li>AC - 1 to 2</li> */}
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
                Price without solar - N450,000 <br />
                <Link to="/quote?Bronze">(Request a quote)</Link>
              </li>
              <li>
                Price with solar - N800,000 <br />
                <Link to="/quote?Bronze">(Request a quote)</Link>
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
    </div>
  );
}

export default Bronze;
