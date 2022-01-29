import React, { Component, useRef } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Paralax } from "./components/Paralax";
import { Menu } from "./components/Menu";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ScrollButton } from "./components/ScrollButton";
import ReactDOM from "react-dom";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import "./App.css";
//
// import { MapContainer } from "./components/GoogleMap";

const mapStyles = {
  width: "100%",
  height: "100%",
  marginBottom: 0,
};
class App extends Component {
  // constructor(props) {
  //   super(props);

  //   const aboutSection = useRef(null);

  //   const goToAboutSection = () =>
  //     window.scrollTo({
  //       top: aboutSection.current.offSetTop,
  //       behavior: "smooth",
  //     });
  // }

  render() {
    return (
      <div id="top">
        <Header />
        <section className="hero-section">
          <Hero />
        </section>
        <section id="about-section">
          <About />
        </section>
        <section>
          <Paralax />
        </section>
        <section id="menu-section">
          <Menu />
        </section>
        <section>
          <Contact />
        </section>
        <section className="google-map">
          <Map
            className="map"
            google={this.props.google}
            zoom={20}
            initialCenter={{
              lat: 32.7551,
              lng: -117.1154,
            }}
            style={mapStyles}
          />
        </section>
        <section>
          <Footer />
        </section>
        <ScrollButton />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCUOXprByNkTEr5yiXT_pq36MkcjygLjO4",
})(App);
