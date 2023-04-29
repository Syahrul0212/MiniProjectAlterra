import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavbarComponent } from "./components";
import { Home, SuksesPages } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
    <NavbarComponent/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/suksespages" element={<SuksesPages />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
