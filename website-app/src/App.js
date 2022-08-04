import React from "react";
import Header from "./components/home/header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepages from "./components/pageContent/Homepages";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Homepages />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
