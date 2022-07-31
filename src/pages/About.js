import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import "./styles/contactStyle.css";
import {
  FaPiggyBank,
  FaHospitalAlt,
  FaLeaf,
  FaHome,
  FaUsers,
  FaSchool,
} from "react-icons/fa";
// import AboutImg from "../images/technicians.jpg";
// import Title from "../components/Title";
const About = () => {
  return (
    <>
      <Hero hero="roomsHero">
        <Banner title="Who are we">
          <Link to="/" className="btn-primary">
            return home
          </Link>
        </Banner>
      </Hero>

      <section className=" services section-bg">
        <div className="container">
          <header class="section-header">
            <h3>Who are we </h3>
            <div className="divider"></div>
          </header>
          <div className="row">
            <div className="col-lg-6">
              <div class="box">
                <p className="p-t">
                  <em>JamiTech Energy Solutions Limited</em>
                  <br /> is a Nigerian Energy company Specialized in Clean
                  Renewable Energy – Particularly Inverter systems, Battery
                  Backup and Solar solutions. Through our skill, knowledge,
                  zeal, expertise and proven track record. We have positioned
                  ourself as the ideal company for all residential and
                  commercial renewable energy projects.
                </p>
                <p>
                  <em>Mission Statement:</em> <br />
                  Our Mission is to provide uninterrupted electric power to
                  every Nigerian through clean renewable.
                </p>
                <p>
                  <em>Vision Statement:</em> <br />
                  Our Vision is to always be the best energy Company by
                  providing exceptional service and spearheading clean renewable
                  energy excellence.
                </p>
                <p>
                  <em> Our Core Values:</em> <br />
                  Customer Service, Premium Quality, Professionalism, Team work,
                  Prompt delivery, Intergrity and Support.
                </p>

                <br />
                <br />
              </div>
            </div>
            <div className="col-lg-6">
              <div class="box">
                <p>
                  <em>Our Teams:</em>
                  <br /> All our team members are highly trained with vast
                  experience. We are dedicated to the long term success of our
                  company through the use of sound business practices,
                  professional conduct, premium quality and heavy investment in
                  staff training.
                </p>
                <p>
                  <em>Quality Assurance:</em>
                  <br /> Compromising on quality is NEVER an option us. We sell
                  and deploy only premium quality products and best accessories.
                  All our installations are executed using the appropriate
                  installation tools accompanied by our highly professional
                  installation.
                </p>
                <p>
                  <em>Tested and Trusted: </em> <br />
                  We exhibit the highest level of integrity in how we do
                  business and interact with our clients. We strive for honesty
                  in our communications and in our interactions with our
                  clients.
                </p>

                <p>
                  <em>Safety:</em> <br />
                  We pride ourselves in following safety precautions before,
                  during and after installation. We train our employees on safe
                  work practices. Employee Safety, Client’s safety, Client’s
                  property safety and Product safety is our top priority.
                </p>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="">
          <section class="services section-bg" id="services">
            <div class="container">
              <header class="section-header">
                <h3>Our Customers</h3>
              </header>

              <div class="row">
                <div class="col-md-6 col-lg-6">
                  <div class="box">
                    <div class="icon" style={{ background: "#000" }}>
                      <FaPiggyBank
                        class="fa fa-university service-icon"
                        style={{ color: "#c59c35" }}
                      />
                    </div>

                    <h4 class="title">BANKING SECTOR</h4>

                    <p class="description">
                      Information technology must be reliable and available 24
                      hours a day, seven (7) days a week. Only solar systems and
                      back-up systems can provide such reliability for IT
                      Infrastructure, ATMs, and telecoms. This increases the
                      reach of the bank to more customers in rural, semi-urban
                      areas, Urban as well as schools and universities.
                    </p>
                  </div>
                </div>

                <div class="col-md-6 col-lg-6">
                  <div class="box">
                    <div class="icon" style={{ background: "#000" }}>
                      <FaHospitalAlt
                        class="fa fa-clipboard service-icon"
                        style={{ color: "#c59c35" }}
                      />
                    </div>

                    <h4 class="title">HOSPITALS</h4>

                    <p class="description">
                      There is a demand for reliable and cost-effective
                      electricity supplies to service remote medical and health
                      care applications. Solar photovoltaic power is ideally
                      suited to these applications because it is highly
                      reliable, has low recurrent costs, has inexhaustible
                      supply of free fuel and very low maintenance requirements.
                    </p>
                  </div>
                </div>
                <div class="col-md-6 col-lg-6">
                  <div class="box">
                    <div class="icon" style={{ background: "#000" }}>
                      <FaUsers
                        class="fa fa-chart-bar service-icon"
                        style={{ color: "#c59c35" }}
                      />
                    </div>

                    <h4 class="title">COMMUNITY</h4>

                    <p class="description">
                      We are capable of providing a large or small community
                      with solar installations, such as; Mini grids, Solar
                      powered boreholes, Solar powered street lights and solar
                      powered community halls.
                    </p>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6 col-lg-6">
                  <div class="box">
                    <div class="icon" style={{ background: "#000" }}>
                      <FaLeaf
                        class="fa fa-chart-bar service-icon"
                        style={{ color: "#c59c35" }}
                      />
                    </div>

                    <h4 class="title">FARMS</h4>

                    <p class="description">
                      Most farms don’t have access to power with our Solar
                      powered system we provide electricity to farm and solar
                      powered borehole for agriculture.
                    </p>
                  </div>
                </div>
                <div class="col-md-6 col-lg-6">
                  <div class="box">
                    <div class="icon" style={{ background: "#000" }}>
                      <FaHome
                        class="fa fa-chart-bar service-icon"
                        style={{ color: "#c59c35" }}
                      />
                    </div>

                    <h4 class="title">GOVERNMENT INSTITUTIONS</h4>

                    <p class="description">
                      Most government institution don’t have reliable power to
                      aid their work. We provide reliable and sustainable power
                      through renewable energy
                    </p>
                  </div>
                </div>
                <div class="col-md-6 col-lg-6">
                  <div class="box">
                    <div class="icon" style={{ background: "#000" }}>
                      <FaSchool
                        class="fa fa-chart-bar service-icon"
                        style={{ color: "#c59c35" }}
                      />
                    </div>

                    <h4 class="title">ACADEMIC INSTITUTIONS</h4>

                    <p class="description">
                      We design and install suitable solar and backup systems
                      for schools in both urban and rural areas.
                    </p>
                  </div>
                </div>
              </div>
              <br />
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default About;
