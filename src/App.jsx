import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import DefaultHeader from "./Components/Headers/Default";
import Home from "./Components/Home/Home";

const App = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <DefaultHeader />
        <Routes>
          <Route path="/" element={<Home />} exact></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
