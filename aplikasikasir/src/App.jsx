import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, SuksesPages } from "./pages";
import { Login, Register } from "./components/auth";
import { auth } from "./config/firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const App = () => {
  //state
  const [isLogin, setIsLogin] = useState(false);
  const [loading, setLoading] = useState(true);

  //componenet lifecycle
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (result) => {
      if (result) {
        setIsLogin(true);
        setLoading(false);
        return;
      }

      setIsLogin(false);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <section className="dots-container align-self-center">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </section>
    );
  }

  return (
    <>
      {isLogin ? (
        <BrowserRouter>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="*" element={<Home />} />
            <Route path="/suksespages" element={<SuksesPages />} />
          </Routes>
        </BrowserRouter>
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<Register />} />
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
};

export default App;
