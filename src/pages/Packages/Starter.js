import React from "react";
import { Link } from "react-router-dom";
import Banner from "../../components/Banner";
import Hero from "../../components/Hero";

export const Starter = () => {
  return (
    <>
      <Hero hero="roomsHero">
        <Banner title="Standard Package">
          <Link to="/packages" className="btn-primary">
            See All Packages
          </Link>
        </Banner>
      </Hero>
      <br />
      <div class="container">
        <div className="packages-details">
          <div className="packages-header">Starter Package (1KVA)</div>
          <div className="packages-content row">
            <div className="p-5 col-xs-12 col-md-3 col-lg-3">
              <h3>Specification</h3>
              <ul>
                <li>1kva Pure Sine Inverter x 1</li>
                <li>220AH 12V Tubular Battery x 1</li>
                <li> 180Watts Monocrystalline Solar panel x 2</li>
                <li> Battery rack x 1</li>
                <li>Installation accessories</li>
                <li>Delivery and installation service inclusive</li>
              </ul>
            </div>
            <div className="p-5 col-xs-12 col-md-3 col-lg-3">
              <h3>Appliances</h3>
              <ul>
                <li>Lights - 3 to 5</li>
                <li>Fans - 1 to 2</li>
                <li>TV - 1 </li>
                <li>Sound bar - 1</li>
                <li> Laptop - 1</li>
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
                Price without solar - N350,000 <br />
                <Link to="/quote?Starter">(Request a quote)</Link>
              </li>
              <li>
                Price with solar - N500,000 <br />
                <Link to="/quote?Starter">(Request a quote)</Link>
              </li>
            </div>
          </div>
          <p>Notes: </p>

          <li>
            - This is an estimated load; load and hours may vary based on the
            consumption of each appliance.
          </li>
          <li>- Appliances with similar consumption can be interchanged.</li>
          <li>- Low energy consuming appliances recommended</li>
          <p>
            <br />
            <em>Without solar:</em> this is inverter and battery backup without
            the inclusion of solar panels. PHCN or Generator will be the only
            source of charging. Its suitable if there is available PHCN or
            Generator power for average total of 10 hours daily.
          </p>
          <br />
          <p>
            <em>With solar:</em> this is inverter and battery backup with the
            inclusion of solar panels for additional source of charging from the
            sun without having to solely depend on PHCN for charging.
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
