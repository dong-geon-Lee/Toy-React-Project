import React from "react";
import Header from "./components/Header/Header.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
      </Routes>
    </Router>
  );
};

export default App;
