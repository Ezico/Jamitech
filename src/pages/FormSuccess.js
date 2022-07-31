import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
const FormSuccess = () => {
  return (
    <>
      <Hero hero="roomsHero">
        <Banner title="Message Recieved">
          <p>We will send you a response shortly.</p>
          <Link to="/" className="btn-primary">
            Return Home
          </Link>
        </Banner>
      </Hero>
    </>
  );
};

export default FormSuccess;
