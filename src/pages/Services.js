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
const Services = () => {
  return (
    <>
      <Hero hero="roomsHero">
        <Banner title="Services We offer">
          <Link to="/" className="btn-primary">
            Return Home
          </Link>
        </Banner>
      </Hero>
      <div className="">
        <section class="services section-bg" id="services">
          <div class="container">
            <header class="section-header">
              <h3>Services</h3>
              <div className="divider"></div>

              <p>
                Our Mission is to provide uninterrupted electric power to every
                Nigerian through clean renewable energy. Below is a list of
                service we offer our customers
              </p>
            </header>

            <div class="row">
              <div class="col-md-6 col-lg-4">
                <div class="box">
                  <div class="icon" style={{ background: "#000" }}>
                    <FaCogs
                      class="fa fa-briefcase service-icon"
                      style={{ color: "#c59c35" }}
                    />
                  </div>

                  <h4 class="title">System design and Architecture</h4>

                  <p class="description">
                    We conduct an in-depth architectural, environmental and
                    structural analysis of a customer’s site to determine the
                    design, specification and dimension of systems to be
                    deployed.
                  </p>
                </div>
              </div>

              <div class="col-md-6 col-lg-4">
                <div class="box">
                  <div class="icon" style={{ background: "#000" }}>
                    <FaCloudDownloadAlt
                      class="fa fa-chart-bar service-icon"
                      style={{ color: "#c59c35" }}
                    />
                  </div>

                  <h4 class="title">Sales and Installation</h4>

                  <p class="description">
                    We sell and deploy premium quality products, we execute
                    professional installations of our systems and technologies
                    ensuring compliance with safety standards, quality assurance
                    and customer satisfaction on commissioning.
                  </p>
                </div>
              </div>
              <div class="col-md-6 col-lg-4">
                <div class="box">
                  <div class="icon" style={{ background: "#000" }}>
                    <FaWrench
                      class="fa fa-chart-bar service-icon"
                      style={{ color: "#c59c35" }}
                    />
                  </div>

                  <h4 class="title">Energy Audit</h4>

                  <p class="description">
                    We conduct a test on the customer’s electrical appliance or
                    proposed electrical appliance to determine the designed
                    capacity of Solar/back up system to be deployed.
                  </p>
                  <p>
                    <br />
                  </p>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6 col-lg-4">
                <div class="box">
                  <div class="icon" style={{ background: "#000" }}>
                    <FaBolt
                      class="fa fa-clipboard service-icon"
                      style={{ color: "#c59c35" }}
                    />
                  </div>

                  <h4 class="title">Light Solutions</h4>

                  <p class="description">
                    Automated Solar Street light solutions, traffic light
                    solutions and security light solutions.
                  </p>
                  <p>
                    <br />
                  </p>
                </div>
              </div>
              <div class="col-md-6 col-lg-4">
                <div class="box">
                  <div class="icon" style={{ background: "#000" }}>
                    <FaUndo
                      class="fa fa-clipboard service-icon"
                      style={{ color: "#c59c35" }}
                    />
                  </div>

                  <h4 class="title">After Sales service </h4>

                  <p class="description">
                    We are available to you both virtually and physically
                    throughout the life time of the system.
                  </p>
                  <p>
                    <br />
                  </p>
                </div>
              </div>
              <div class="col-md-6 col-lg-4">
                <div class="box">
                  <div class="icon" style={{ background: "#000" }}>
                    <FaTasks
                      class="fa fa-clipboard service-icon"
                      style={{ color: "#c59c35" }}
                    />
                  </div>

                  <h4 class="title">Maintenance </h4>

                  <p class="description">
                    We offer periodic and random checks. This solidifies our
                    stance on quality assurance and also ensures that our system
                    performs at optimal levels
                  </p>
                </div>
              </div>
            </div>

            <br />
            <Link className="box" to="/packages">
              Let's Make Magic
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;
