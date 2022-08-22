import "./App.css";
import React from "react";
import Header from "./components/Header";
import RouteTree from "./RouteTree";
import { HashRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <RouteTree />
      </Router>
    </div>
  );
}

export default App;
