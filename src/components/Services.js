import React, { Component } from "react";
import Title from "./Title";
import { Link } from "react-router-dom";
import panel from "../images/panel-black.png";
import wwu from "../images/why.png";
import electric from "../images/Man_on_root.jpg";
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
          </div>
        </section>
        {/* section 3 */}
        <section className="details">
          <div className="row">
            <div className="col-5 services ">
              <div className="benefit-wrapper">
                <br />
                <h2>Benefits</h2>
                <div className="divider"></div>

                <div class="feature__list flex">
                  <div class="feature__list--icon">
                    <FaThumbsUp />
                  </div>
                  <div class="feature__list--content">
                    <h5 class="fw-700 mb-10">Uninterrupted power supply</h5>
                  </div>
                </div>
                <div class="feature__list flex">
                  <div class="feature__list--icon">
                    <FaThumbsUp />
                  </div>
                  <div class="feature__list--content">
                    <h5 class="fw-700 mb-10">Zero noise and Zero emission</h5>
                  </div>
                </div>
                <div class="feature__list flex">
                  <div class="feature__list--icon">
                    <FaThumbsUp />
                  </div>
                  <div class="feature__list--content">
                    <h5 class="fw-700 mb-10">
                      No daily, weekly or monthly recurring expenses
                    </h5>
                  </div>
                </div>
                <div class="feature__list flex">
                  <div class="feature__list--icon">
                    <FaThumbsUp />
                  </div>
                  <div class="feature__list--content">
                    <h5 class="fw-700 mb-10">Minimal maintenance</h5>
                  </div>
                </div>
                <div class="feature__list flex">
                  <div class="feature__list--icon">
                    <FaThumbsUp />
                  </div>
                  <div class="feature__list--content">
                    <h5 class="fw-700 mb-10">
                      No wear & tear because there is no mechanical moving parts
                    </h5>
                  </div>
                </div>
                <div class="feature__list flex">
                  <div class="feature__list--icon">
                    <FaThumbsUp />
                  </div>
                  <div class="feature__list--content">
                    <h5 class="fw-700 mb-10">Reduced electricity bill</h5>
                  </div>
                </div>
                <div class="feature__list flex">
                  <div class="feature__list--icon">
                    <FaThumbsUp />
                  </div>
                  <div class="feature__list--content">
                    <h5 class="fw-700 mb-10">Maximum convenience</h5>
                  </div>
                </div>
              </div>
              {/* <Title title="Go solar" /> */}

              <br />
            </div>
            <div className="col-5">
              <img src={panel} alt="img" />
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
