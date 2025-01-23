import React from "react";
import About from "./About";
import Home from "./Home.js";
import NavBar from "./NavBar.js";
import {username,city,image} from "../data/user";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
    </div>
  );
}

export default App;
