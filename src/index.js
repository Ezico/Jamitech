import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { FaWhatsapp } from "react-icons/fa";

import App from "./App";
import ScrollToTop from "./components/ScrollToTop";
import * as serviceWorker from "./serviceWorker";
import { RoomProvider } from "./context";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <RoomProvider>
    <BrowserRouter>
      <ScrollToTop>
        <App />
        <a
          href="https://wa.link/lqggo0"
          class="float"
          target="_blank"
          style={{ backgroundColor: "#0b913e" }}
        >
          <FaWhatsapp className="my-float" />
          <span className="my-float2">Chat With Us</span>
        </a>
      </ScrollToTop>
    </BrowserRouter>
  </RoomProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
