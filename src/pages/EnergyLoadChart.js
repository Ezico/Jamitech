import React from "react";
import chart from "../images/chart.pdf";
const EnergyLoadChart = () => {
  return (
    <>
      {/* <Hero hero="roomsHero">
        <Banner title="Energy Load Chart">
          <Link to="/" className="btn-primary">
            Return Home
          </Link>
        </Banner>
      </Hero> */}
      <embed
        src={chart}
        type="application/pdf"
        toolbar="1"
        width="100%"
        height="600px"
      />
    </>
  );
};

export default EnergyLoadChart;
