import React from "react";
import Routes from "./routes/Routes";
import "./App.css";

function App() {
  return (
    <div>
      <div className="navBar">
        <img src="/images/itvieclogo.png" alt="" className="logo" />
      </div>
      <Routes />
    </div>
  );
}

export default App;
