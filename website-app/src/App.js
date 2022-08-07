import React from "react";
import Header from "./components/home/header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepages from "./components/pageContent/Homepages";
import "./App.css";
import Footer from "./components/home/Footer";
import Pages from "./components/pages/Pages";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Homepages />}></Route>
        <Route path="/pages" element={<Pages />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
