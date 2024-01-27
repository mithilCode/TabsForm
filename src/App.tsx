import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import IndexOne from "./view/IndexOne";
import IndexTwo from "./view/IndexTwo";
import Tabs from "./view/Tabs";
import GridOne from "./view/GridOne";
import GridTwo from "./view/GridTwo";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Tabs />} />
        <Route path="/indexOne" element={<IndexOne />} />
        <Route path="/indexTwo" element={<IndexTwo />} />
        <Route path="/gridOne" element={<GridOne />} />
        <Route path="/gridTwo" element={<GridTwo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
