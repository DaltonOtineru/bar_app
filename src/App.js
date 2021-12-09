import React, { Component } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Paralax } from "./components/Paralax";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import ReactDOM from "react-dom";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import "./App.css";
//
// import { MapContainer } from "./components/GoogleMap";

const mapStyles = {
  width: "100%",
  height: "50%",
  marginBottom: 0,
};
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <section className="hero-section">
          <Hero />
        </section>
        <section>
          <About />
        </section>
        <section>
          <Paralax />
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
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCUOXprByNkTEr5yiXT_pq36MkcjygLjO4",
})(App);
