import React from "react";
import "./App.css";
import Header from "./Component/Header";
import Home from "./Component/Home";
import About from "./Component/About";
import Services from "./Component/Services";

export default function App() {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Services />
    </div>
  );
}
