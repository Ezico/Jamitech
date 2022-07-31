import emailjs from "emailjs-com";
import React from "react";
import "../pages/styles/contactStyle.css";
import {
  FaFacebook,
  FaWhatsapp,
  FaInstagram,
  FaSearchLocation,
  FaEnvelope,
  FaMobileAlt,
} from "react-icons/fa";

export default function ContactUs() {
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_zwto67h",
        "template_51cvmc7",
        e.target,
        "user_MM69kbczr8ZgWzkSVpUH7"
      )
      .then(
        (result) => {
          window.location.replace("/success");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div>
      <section class="contact-page-section">
        <div class="container">
          <div class="sec-title">
            <div class="title">Yes I know my capacity</div>
            <p>Lets give you a breakdown of whats needed for your project</p>
          </div>
          <div class="inner-container">
            <div class="row clearfix">
              <div class="form-column col-md-8 col-sm-12 col-xs-12">
                <div class="inner-column">
                  <div class="contact-form">
                    <form onSubmit={sendEmail}>
                      <div class="row clearfix">
                        <div class="form-group col-md-6 col-sm-6 co-xs-12">
                          <input
                            type="text"
                            name="name"
                            value=""
                            placeholder="Full Name"
                            required
                          />
                        </div>
                        <div class="form-group col-md-6 col-sm-6 co-xs-12">
                          <input
                            type="text"
                            name="address"
                            value=""
                            placeholder="Address"
                            required
                          />
                        </div>
                        <div class="form-group col-md-6 col-sm-6 co-xs-12">
                          <input
                            type="text"
                            name="name"
                            value=""
                            placeholder="Phone"
                            required
                          />
                        </div>
                        <div class="form-group col-md-6 col-sm-6 co-xs-12">
                          <input
                            type="email"
                            name="email"
                            value=""
                            placeholder="Email"
                            required
                          />
                        </div>
                        <div class="form-group col-md-6 col-sm-6 co-xs-12">
                          <input
                            type="text"
                            name="capacity"
                            value=""
                            placeholder="Capacity"
                            required
                          />
                        </div>
                        <div class="form-group col-md-6 col-sm-6 co-xs-12">
                          <label htmlFor="withsolar">With Solar?</label>
                          <input
                            type="checkbox"
                            id="withsolar"
                            name="withsolar"
                            value="with solar"
                          />
                        </div>
                        <div class="form-group col-md-6 col-sm-6 co-xs-12">
                          <input
                            type="text"
                            name="Appliances"
                            value=""
                            placeholder="Appliances"
                            required
                          />
                        </div>
                        <div class="form-group col-md-12 col-sm-12 co-xs-12">
                          <button type="submit" class="theme-btn btn-style-one">
                            Send Now
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>

              <div class="info-column col-md-4 col-sm-12 col-xs-12">
                <div class="inner-column">
                  <h2>Contact Info</h2>
                  <ul class="list-info">
                    <li>
                      <FaSearchLocation />
                      Suite 5, Mobil filling station complex, Samonda, Ibadan
                    </li>
                    <li>
                      <FaEnvelope />
                      info@jamitechenergy.com
                    </li>
                    <li>
                      <FaMobileAlt /> (234) 816 492 2753 <br /> (234) 818 899
                      9994
                    </li>
                  </ul>
                  <ul class="social-icon-four">
                    <li class="follow">Follow on: </li>

                    <li>
                      <a href="https://www.instagram.com/jamitechsolar%20">
                        <FaInstagram />
                      </a>
                    </li>
                    <li>
                      <a href="https://wa.me/2348164922753">
                        <FaWhatsapp />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.facebook.com/jamitechenergysolutions">
                        <FaFacebook />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
