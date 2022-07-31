import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import {
  FaLayerGroup,
  FaShoppingBasket,
  FaCogs,
  FaWrench,
  FaCog,
  FaCloudDownloadAlt,
  FaBolt,
  FaUndo,
  FaTasks,
} from "react-icons/fa";
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
      <div className="">
        <section
          class="services section-bg"
          id="services"
          style={{ backgroundColor: "#ebebeb" }}
        >
          <div class="container">
            <header class="section-header">
              <h3>Our Packages</h3>
              <div className="divider"></div>
              <p>
                Our packages are designed to provide uninterrupted power supply
                for homes and offices by appropriately sizing Inverter, battery
                bank and solar arrays with special consideration for appliance
                to be powered and hours of usage. Kindly go through our packages
                below to find a suitable package that fits into your budget or
                energy requirement.
              </p>
            </header>
            <div className="package-container">
              <div className="row">
                <div className="card col-md-6">
                  <Link to="/packages/starter">
                    <div className="card-body">
                      <div class="service__content--h5 service__content--h6">
                        <div class="service__icon--h5 ">
                          <FaBolt />
                        </div>
                        <div class="service__text--h5 service__text--h6">
                          <h4 class="fw-600 ">Starter package (1kva)</h4>

                          <a href="#">
                            <i class="far fa-long-arrow-right"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="card col-md-6">
                  <Link to="/packages/ruby">
                    <div className="card-body">
                      <div class="service__content--h5 service__content--h6">
                        <div class="service__icon--h5 ">
                          <FaBolt />
                        </div>
                        <div class="service__text--h5 service__text--h6">
                          <h4 class="fw-600 ">Ruby Package (2kva)</h4>
                          <a href="#">
                            <i class="far fa-long-arrow-right"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>

              <div className="row">
                <div className="card col-md-6">
                  <Link to="/packages/silver">
                    <div className="card-body">
                      <div class="service__content--h5 service__content--h6">
                        <div class="service__icon--h5 ">
                          <FaBolt />
                        </div>
                        <div class="service__text--h5 service__text--h6">
                          <h4 class="fw-600 ">
                            Silver Package (3.5kva) MID and MAX
                          </h4>

                          <a href="#">
                            <i class="far fa-long-arrow-right"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="card col-md-6">
                  <Link to="/packages/gold">
                    <div className="card-body">
                      <div class="service__content--h5 service__content--h6">
                        <div class="service__icon--h5 ">
                          <FaBolt />
                        </div>
                        <div class="service__text--h5 service__text--h6">
                          <h4 class="fw-600 ">
                            Gold Package (5kva) MID and MAX
                          </h4>
                          <a href="#">
                            <i class="far fa-long-arrow-right"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="row">
                <div className="card col-md-6">
                  <Link to="/packages/platinum">
                    <div className="card-body">
                      <div class="service__content--h5 service__content--h6">
                        <div class="service__icon--h5 ">
                          <FaBolt />
                        </div>
                        <div class="service__text--h5 service__text--h6">
                          <h4 class="fw-600 ">Platinum Package (7.5kva)</h4>

                          <a href="#">
                            <i class="far fa-long-arrow-right"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="card col-md-6">
                  <Link to="/packages/diamond">
                    <div className="card-body">
                      <div class="service__content--h5 service__content--h6">
                        <div class="service__icon--h5 ">
                          <FaBolt />
                        </div>
                        <div class="service__text--h5 service__text--h6">
                          <h4 class="fw-600 ">
                            Diamond Package (10KVA) MID and MAX
                          </h4>
                          <a href="#">
                            <i class="far fa-long-arrow-right"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="row">
                <div className="card col-md-6">
                  <Link to="/packages/elite">
                    <div className="card-body">
                      <div class="service__content--h5 service__content--h6">
                        <div class="service__icon--h5 ">
                          <FaBolt />
                        </div>
                        <div class="service__text--h5 service__text--h6">
                          <h4 class="fw-600 ">Elite Package (15kva)</h4>

                          <a href="#">
                            <i class="far fa-long-arrow-right"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="card col-md-6"></div>
              </div>
            </div>

            <br />
            <br />
          </div>
        </section>
      </div>
    </>
  );
};

export default Packages;
