import emailjs from "emailjs-com";
import React, { useState } from "react";
import "../pages/styles/contactStyle.css";
import {
  FaFacebook,
  FaWhatsapp,
  FaInstagram,
  FaSearchLocation,
  FaEnvelope,
  FaMobileAlt,
} from "react-icons/fa";

export default function QuoteCapacity() {
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [location, setLocation] = useState();
  const [email, setEmail] = useState();

  // 👇️ called every time input's value changes
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  // 👇️ called every time input's value changes
  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };
  // 👇️ called every time input's value changes
  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };
  // 👇️ called every time input's value changes
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  var isSelected = window.location.search;

  return (
    <div>
      <section class="contact-page-section">
        <div class="container">
          <div class="sec-title">
            <p>
              Fill the form below correctly, we will give you a message shortly
            </p>
          </div>
          <div class="inner-container">
            <div class="row clearfix">
              <div class="form-column col-md-8 col-sm-12 col-xs-12">
                <div class="inner-column">
                  <div class="contact-form">
                    <form name="Quote" netlify netlify-honeypot="bot-field">
                      <input type="hidden" name="form-name" value="Quote" />
                      <div class="row clearfix">
                        <div class="form-group col-md-6 col-sm-6 co-xs-12">
                          <input
                            type="text"
                            name="name"
                            onChange={handleNameChange}
                            value={name}
                            placeholder="Full Name"
                            required
                          />
                        </div>
                        <div class="form-group col-md-6 col-sm-6 co-xs-12">
                          <input
                            type="text"
                            name="Location"
                            onChange={handleLocationChange}
                            value={location}
                            placeholder="Location"
                            required
                          />
                        </div>
                        <div class="form-group col-md-6 col-sm-6 co-xs-12">
                          <input
                            type="text"
                            name="Phone No"
                            onChange={handlePhoneChange}
                            value={phone}
                            placeholder="Phone"
                            required
                          />
                        </div>
                        <div class="form-group col-md-6 col-sm-6 co-xs-12">
                          <input
                            type="email"
                            name="email"
                            onChange={handleEmailChange}
                            value={email}
                            placeholder="Email"
                            required
                          />
                        </div>
                        <div class="form-group col-md-4 col-sm-6 co-xs-12">
                          {isSelected == "?Starter" ? (
                            <select id="package" name="role[]">
                              <option selected>STARTER PACKAGE (1KVA)</option>
                              <option>RUBY PACKAGE (2KVA)</option>
                              <option>SILVER PACKAGE (3.5KVA) MID</option>
                              <option>SILVER PACKAGE (3.5KVA) MAX</option>
                              <option>GOLD PACKAGE (5KVA) MID</option>
                              <option>GOLD PACKAGE (5KVA) MAX</option>
                              <option>PLATINUM PACKAGE (7.5KVA)</option>
                              <option>DIAMOND PACKAGE (10KVA) MID</option>
                              <option>DIAMOND PACKAGE (10KVA) MAX</option>
                              <option>ELITE PACKAGE (15KVA)</option>
                            </select>
                          ) : null}
                          {isSelected == "?Ruby" ? (
                            <select id="package" name="role[]">
                              <option>STARTER PACKAGE (1KVA)</option>
                              <option selected>RUBY PACKAGE (2KVA)</option>
                              <option>SILVER PACKAGE (3.5KVA) MID</option>
                              <option>SILVER PACKAGE (3.5KVA) MAX</option>
                              <option>GOLD PACKAGE (5KVA) MID</option>
                              <option>GOLD PACKAGE (5KVA) MAX</option>
                              <option>PLATINUM PACKAGE (7.5KVA)</option>
                              <option>DIAMOND PACKAGE (10KVA) MID</option>
                              <option>DIAMOND PACKAGE (10KVA) MAX</option>
                              <option>ELITE PACKAGE (15KVA)</option>
                            </select>
                          ) : null}

                          {isSelected == "?SilverMid" ? (
                            <select id="package" name="role[]">
                              <option>STARTER PACKAGE (1KVA)</option>
                              <option>RUBY PACKAGE (2KVA)</option>
                              <option selected>
                                SILVER PACKAGE (3.5KVA) MID
                              </option>
                              <option>SILVER PACKAGE (3.5KVA) MAX</option>
                              <option>GOLD PACKAGE (5KVA) MID</option>
                              <option>GOLD PACKAGE (5KVA) MAX</option>
                              <option>PLATINUM PACKAGE (7.5KVA)</option>
                              <option>DIAMOND PACKAGE (10KVA) MID</option>
                              <option>DIAMOND PACKAGE (10KVA) MAX</option>
                              <option>ELITE PACKAGE (15KVA)</option>
                            </select>
                          ) : null}
                          {isSelected == "?SilverMax" ? (
                            <select id="package" name="role[]">
                              <option>STARTER PACKAGE (1KVA)</option>
                              <option>RUBY PACKAGE (2KVA)</option>
                              <option>SILVER PACKAGE (3.5KVA) MID</option>
                              <option selected>
                                SILVER PACKAGE (3.5KVA) MAX
                              </option>
                              <option>GOLD PACKAGE (5KVA) MID</option>
                              <option>GOLD PACKAGE (5KVA) MAX</option>
                              <option>PLATINUM PACKAGE (7.5KVA)</option>
                              <option>DIAMOND PACKAGE (10KVA) MID</option>
                              <option>DIAMOND PACKAGE (10KVA) MAX</option>
                              <option>ELITE PACKAGE (15KVA)</option>
                            </select>
                          ) : null}

                          {isSelected == "?GoldMid" ? (
                            <select id="package" name="role[]">
                              <option>STARTER PACKAGE (1KVA)</option>
                              <option>RUBY PACKAGE (2KVA)</option>
                              <option>SILVER PACKAGE (3.5KVA) MID</option>
                              <option>SILVER PACKAGE (3.5KVA) MAX</option>
                              <option selected>GOLD PACKAGE (5KVA) MID</option>
                              <option>GOLD PACKAGE (5KVA) MAX</option>
                              <option>PLATINUM PACKAGE (7.5KVA)</option>
                              <option>DIAMOND PACKAGE (10KVA) MID</option>
                              <option>DIAMOND PACKAGE (10KVA) MAX</option>
                              <option>ELITE PACKAGE (15KVA)</option>
                            </select>
                          ) : null}
                          {isSelected == "?GoldMax" ? (
                            <select id="package" name="role[]">
                              <option>STARTER PACKAGE (1KVA)</option>
                              <option>RUBY PACKAGE (2KVA)</option>
                              <option>SILVER PACKAGE (3.5KVA) MID</option>
                              <option>SILVER PACKAGE (3.5KVA) MAX</option>
                              <option>GOLD PACKAGE (5KVA) MID</option>
                              <option selected>GOLD PACKAGE (5KVA) MAX</option>
                              <option>PLATINUM PACKAGE (7.5KVA)</option>
                              <option>DIAMOND PACKAGE (10KVA) MID</option>
                              <option>DIAMOND PACKAGE (10KVA) MAX</option>
                              <option>ELITE PACKAGE (15KVA)</option>
                            </select>
                          ) : null}

                          {isSelected == "?Platinum" ? (
                            <select id="package" name="role[]">
                              <option>STARTER PACKAGE (1KVA)</option>
                              <option>RUBY PACKAGE (2KVA)</option>
                              <option selected>
                                SILVER PACKAGE (3.5KVA) MID
                              </option>
                              <option>SILVER PACKAGE (3.5KVA) MAX</option>
                              <option>GOLD PACKAGE (5KVA) MID</option>
                              <option>GOLD PACKAGE (5KVA) MAX</option>
                              <option selected>
                                PLATINUM PACKAGE (7.5KVA)
                              </option>
                              <option>DIAMOND PACKAGE (10KVA) MID</option>
                              <option>DIAMOND PACKAGE (10KVA) MAX</option>
                              <option>ELITE PACKAGE (15KVA)</option>
                            </select>
                          ) : null}
                          {isSelected == "?DiamondMid" ? (
                            <select id="package" name="role[]">
                              <option>STARTER PACKAGE (1KVA)</option>
                              <option>RUBY PACKAGE (2KVA)</option>
                              <option>SILVER PACKAGE (3.5KVA) MID</option>
                              <option>SILVER PACKAGE (3.5KVA) MAX</option>
                              <option>GOLD PACKAGE (5KVA) MID</option>
                              <option>GOLD PACKAGE (5KVA) MAX</option>
                              <option>PLATINUM PACKAGE (7.5KVA)</option>
                              <option selected>
                                DIAMOND PACKAGE (10KVA) MID
                              </option>
                              <option>DIAMOND PACKAGE (10KVA) MAX</option>
                              <option>ELITE PACKAGE (15KVA)</option>
                            </select>
                          ) : null}
                          {isSelected == "?DiamondMax" ? (
                            <select id="package" name="role[]">
                              <option>STARTER PACKAGE (1KVA)</option>
                              <option>RUBY PACKAGE (2KVA)</option>
                              <option>SILVER PACKAGE (3.5KVA) MID</option>
                              <option>SILVER PACKAGE (3.5KVA) MAX</option>
                              <option>GOLD PACKAGE (5KVA) MID</option>
                              <option>GOLD PACKAGE (5KVA) MAX</option>
                              <option>PLATINUM PACKAGE (7.5KVA)</option>
                              <option>DIAMOND PACKAGE (10KVA) MID</option>
                              <option selected>
                                DIAMOND PACKAGE (10KVA) MAX
                              </option>
                              <option>ELITE PACKAGE (15KVA)</option>
                            </select>
                          ) : null}

                          {isSelected == "?Elite" ? (
                            <select id="package" name="role[]">
                              <option>STARTER PACKAGE (1KVA)</option>
                              <option>RUBY PACKAGE (2KVA)</option>
                              <option selected>
                                SILVER PACKAGE (3.5KVA) MID
                              </option>
                              <option>SILVER PACKAGE (3.5KVA) MAX</option>
                              <option>GOLD PACKAGE (5KVA) MID</option>
                              <option>GOLD PACKAGE (5KVA) MAX</option>
                              <option>PLATINUM PACKAGE (7.5KVA)</option>
                              <option>DIAMOND PACKAGE (10KVA) MID</option>
                              <option>DIAMOND PACKAGE (10KVA) MAX</option>
                              <option selected>ELITE PACKAGE (15KVA)</option>
                            </select>
                          ) : null}
                          {isSelected == "" ? (
                            <select id="package" name="role[]">
                              <option>STARTER PACKAGE (1KVA)</option>
                              <option>RUBY PACKAGE (2KVA)</option>
                              <option>SILVER PACKAGE (3.5KVA) MID</option>
                              <option>SILVER PACKAGE (3.5KVA) MAX</option>
                              <option>GOLD PACKAGE (5KVA) MID</option>
                              <option>GOLD PACKAGE (5KVA) MAX</option>
                              <option>PLATINUM PACKAGE (7.5KVA)</option>
                              <option>DIAMOND PACKAGE (10KVA) MID</option>
                              <option>DIAMOND PACKAGE (10KVA) MAX</option>
                              <option>ELITE PACKAGE (15KVA)</option>
                            </select>
                          ) : null}
                          <select name="with-solar">
                            <option>WITH SOLAR</option>
                            <option>WITHOUT SOLAR</option>
                          </select>

                          <select name="property">
                            <option>SELECT PROPERTY</option>
                            <option>FLAT</option>
                            <option>BUNGALOW</option>
                            <option>DUPLEX</option>
                          </select>
                          <select name="Number of rooms">
                            <option>NUMBER OF ROOMS</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5+</option>
                          </select>
                        </div>
                        <div class="form-group col-md-12 col-sm-12 co-xs-12">
                          <textarea name="Aditional Info">Message</textarea>
                        </div>
                        <div>
                          <div data-netlify-recaptcha></div>
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
