import React from "react";
import Layout from "./Pages/Layout";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Blogs from "./Pages/Blogs";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Blogs" element={<Blogs />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
