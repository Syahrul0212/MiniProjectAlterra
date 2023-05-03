import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, SuksesPages } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/suksespages" element={<SuksesPages />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
