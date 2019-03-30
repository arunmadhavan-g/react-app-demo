import React from "react";
import Routes from "./Routes";
import NavBar from "./NavBar";
import "../styles/App.css";

const App = () => (
  <div className="App">
    <NavBar />
    <div className="children">
      <Routes/>
    </div>
  </div>
);

export default App;
