import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Nav from "../src/components/nav";
import About from "./pages/about";
import Contact from "./pages/contact";
import Portfolio from "./pages/portfolio";

const App = () => {
  return (
    // <h1>Bishop is a good boy</h1>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nav" element={<Nav />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </Router>
  );
};
export default App;
