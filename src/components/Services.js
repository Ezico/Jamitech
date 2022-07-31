import React, { Component } from "react";
import Title from "./Title";
import { Link } from "react-router-dom";
import panel from "../images/panel-black.png";
import wwu from "../images/why.png";
import electric from "../images/Man_on_root.jpg";
import electric2 from "../images/details-2.jpeg";
import { FaCheckCircle, FaThumbsUp } from "react-icons/fa";
export default class Services extends Component {
  render() {
    return (
      <>
        {/* section 1 */}
        <section className="details">
          <br />
          {/* section */}
          <div className="row">
            <div className="col-6 services ">
              <h6 class="lte-subheader">About Company</h6>
              <h3 class="lte-header">JamiTech Energy Solutions Limited</h3>
              <p style={{ textAlign: "left" }}>
                is a Nigerian Energy Company Specialized in Clean Renewable
                Energy – Particularly Inverter systems, Battery Backup and Solar
                solutions. <br />
                Over the years we have powered various homes, offices and
                government institution across the country. We are well known for
                our top notch professional installation and special love for
                premium quality. Our team are highly trained with vast
                experience, we sell and deploy only premium quality products.
              </p>
              <br />
              <br />
              <Link className="btn-secondary" to="/about">
                Read More
              </Link>
              <br />
              <br />
              <br />
              <br />
            </div>
            <div className="col-6 fx">
              {/* <Video /> */}
              <img className="wwu" src={wwu} />
            </div>
            <br />
            <br />
          </div>
        </section>

        {/* Section 2 */}
        <section className="details">
          <div className="row">
            <div className="col-5">
              <img src={electric} alt="img" />
              {/* <Video /> */}
            </div>
            <div className="col-5 services ">
              <h2>Explore our packages</h2>
              <div className="divider"></div>
              <p>
                Our packages are designed to provide uninterrupted power supply
                for homes and offices by appropriately sizing Inverter, battery
                bank and solar arrays with special consideration for appliance
                to be powered and hours of usage. Kindly go through our packages
                by clicking the link below to find a suitable package that fits
                into your budget or energy requirement.
              </p>

              <Link className="btn-secondary" to="/packages">
                Shop Now
              </Link>
              <br />
            </div>
          </div>
        </section>
        {/* section 3 */}
        <section className="details">
          <div className="row">
            <div className="col-5 services ">
              <p style={{ textAlign: "left" }}>
                Electricity has become a major problem for homes and various
                businesses in Nigeria. The need to look into alternative source
                of energy as become necessary especially clean renewable energy
                to power homes, offices, hospital, street lights and many more.
                Switching to renewable energy will help you save cost while also
                making life more convenient for you by enjoying uninterrupted
                power supply everyday through our premium Inverter and solar
                systems.
              </p>
              <br />
              <br />
              <Link className="btn-secondary" to="/packages">
                Shop Now
              </Link>

              <br />
              <br />
              <br />
            </div>

            <div className="col-5">
              <img src={panel} alt="img" />
            </div>
          </div>
        </section>

        <section className="details">
          <div className="row">
            <div className="col-5">
              <img src={electric2} alt="img" />
              {/* <Video /> */}
            </div>
            <div className="col-5  ">
              <div class="overview-content">
                <h6>Benefits</h6>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <ul class="features-list">
                  <li>
                    {" "}
                    <span>Uninterrupted power supply</span>
                  </li>
                  <li>
                    {" "}
                    <span>Zero noise and Zero emission</span>
                  </li>
                  <li>
                    {" "}
                    <span>No daily, weekly or monthly recurring expenses</span>
                  </li>
                  <li>
                    {" "}
                    <span>
                      No wear & tear because there is no mechanical moving parts
                    </span>
                  </li>
                  <li>
                    {" "}
                    <span>Minimal maintenance</span>
                  </li>
                  <li>
                    {" "}
                    <span>Reduced electricity bill</span>
                  </li>
                  <li>
                    {" "}
                    <span>Maximum convenience</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* <section className="services">
          <Title title="services" />
          <div className="services-center"></div>
        </section> */}
      </>
    );
  }
}
