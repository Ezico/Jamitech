import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaAlignJustify, FaTimes } from "react-icons/fa";
import logo from "../images/logo.png";
export default class Navbar extends Component {
  state = {
    isOpen: false,
  };
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <div className="nav-container">
        <nav className="navbar" id="navbar">
          <div className="nav-center">
            <div className="nav-header">
              <Link to="/">
                <img className="logo" src={logo} alt="Beach Resort" />
              </Link>
              <button
                type="button"
                className="nav-btn"
                onClick={this.handleToggle}
              >
                {this.state.isOpen ? (
                  <FaTimes className="nav-icon" />
                ) : (
                  <FaAlignJustify className="nav-icon" />
                )}
              </button>
            </div>
            <ul
              className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
            >
              {/* <li>
              <Link to="/">Home</Link>
            </li> */}
              <li>
                <Link onClick={this.handleToggle} to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link onClick={this.handleToggle} to="/about">
                  About Us
                </Link>
              </li>
              <li>
                <Link onClick={this.handleToggle} to="/services">
                  Our Services
                </Link>
              </li>
              <li>
                <Link onClick={this.handleToggle} to="/packages">
                  Packages
                </Link>
              </li>
              {/* <li>
                <Link to="/energy-load-chart">Energy Load chart</Link>
              </li> */}
              {/* <li>
                <Link to="/product">Products</Link>
              </li> */}

              <li>
                <Link onClick={this.handleToggle} to="/gallery">
                  Gallery
                </Link>
              </li>
              <li>
                <Link onClick={this.handleToggle} to="/contact">
                  Contact
                </Link>
              </li>
              {/* <li>
                <Link to="/quote">Request a quote</Link>
              </li> */}
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
