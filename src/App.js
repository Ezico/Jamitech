import React from "react";
import "./App.css";

import Home from "./pages/Home";
import Products from "./pages/Products";
import SingleProduct from "./pages/SingleProduct";
import Error from "./pages/Error";
import About from "./pages/About";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import { Switch, Route } from "react-router-dom";
import Quote from "./pages/Quote";
import Terms from "./pages/Terms";
import Policy from "./pages/Policy";
import FormSuccess from "./pages/FormSuccess";
import Services from "./pages/Services";
import EnergyLoadChart from "./pages/EnergyLoadChart";
import Gallery from "./pages/Gallery";
import Recruitment from "./pages/Recruitment";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import Inverter from "./pages/Inverter";
import SolaParnel from "./pages/SolarPanels";
import SolarLight from "./pages/SolarLights";
import Battery from "./pages/Battery";
import Packages from "./pages/Packages";
import { Starter } from "./pages/Packages/Starter";
import { Silver } from "./pages/Packages/Silver";
import { Ruby } from "./pages/Packages/Ruby";
import { Platinum } from "./pages/Packages/Platinum";
import { Gold } from "./pages/Packages/Gold";
import { Elite } from "./pages/Packages/Elite";
import { Diamond } from "./pages/Packages/Diamond";
import Bronze from "./pages/Packages/Bronze";
function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products/" component={Products} />
        <Route exact path="/about" component={About} />
        <Route exact path="/quote" component={Quote} />
        <Route exact path="/terms-and-conditions" component={Terms} />
        <Route exact path="/privacy-policy" component={Policy} />
        <Route exact path="/success" component={FormSuccess} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/recruitment" component={Recruitment} />
        <Route exact path="/energy-load-chart" component={EnergyLoadChart} />
        <Route exact path="/gallery" component={Gallery} />
        <Route exact path="/products/:slug" component={SingleProduct} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/product" component={Product} />
        <Route exact path="/product/inverter" component={Inverter} />
        <Route exact path="/product/solar-light" component={SolarLight} />
        <Route exact path="/product/battery" component={Battery} />
        <Route exact path="/product/solar-panel" component={SolaParnel} />
        <Route exact path="/packages" component={Packages} />
        <Route exact path="/packages/starter" component={Starter} />
        <Route exact path="/packages/silver" component={Silver} />
        <Route exact path="/packages/ruby" component={Ruby} />
        <Route exact path="/packages/platinum" component={Platinum} />
        <Route exact path="/packages/gold" component={Gold} />
        <Route exact path="/packages/elite" component={Elite} />
        <Route exact path="/packages/diamond" component={Diamond} />
        <Route exact path="/packages/bronze" component={Bronze} />
        <Route component={Error} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
