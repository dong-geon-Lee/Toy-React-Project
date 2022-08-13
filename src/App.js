import React from "react";
import TopBar from "./components/TopBar/TopBar";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Setting from "./pages/settings/Setting";
import Single from "./pages/Single/Single";
import Write from "./pages/write/Write";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <TopBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/write" element={<Write />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/post/:postId" element={<Single />} />
      </Routes>
    </Router>
  );
};

export default App;
