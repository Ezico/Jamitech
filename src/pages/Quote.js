import React from "react";

import QuoteCapacity from "../components/QuoteCapacity";

const Quote = () => {
  return (
    <>
      <div className="container">
        <br />
        <br />
        <div class="tabs">
          <input type="radio" name="tab" id="tab1" />
          <label for="tab11" style={{ display: "none" }}></label>
          <input type="radio" name="tab" id="tab2" checked="checked" />
          <label for="tab2"> Request a Quote</label>

          <div class="tab-content-wrapper">
            {/* <div id="tab-content-1" class="tab-content">
              <ContactUs />
            </div> */}
            <div id="tab-content-2" class="tab-content">
              <QuoteCapacity />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Quote;
