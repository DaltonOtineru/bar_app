import React from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Paralax } from "./components/Paralax";
import { Contact } from "./components/Contact";
import ReactDOM from "react-dom";
import "./App.css";

function App() {
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
    </div>
  );
}

export default App;
