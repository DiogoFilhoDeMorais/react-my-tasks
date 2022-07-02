import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import DefaultHeader from "./Components/Headers/Default";
import Home from "./Components/Home/Home";

const App = () => {
  return (
    <Router>
      <div className="container">
        <DefaultHeader />
        <Routes>
          <Route path="/" component={Home} exact></Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
