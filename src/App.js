import React from 'react';
import './App.css';
import Navigation from "./components/Navigation/Navigation";
import Portfolio from "./sections/Portfolio/Portfolio";
import AboutMe from "./sections/AboutMe/AboutMe";
import Contact from "./sections/Contact/Contact";
import Home from "./sections/Home/Home";

function App() {
  return (
    <div>
      <Navigation/>
      <Home/>
      <Portfolio/>
      <AboutMe/>
      <Contact/>
    </div>
  );
}

export default App;
