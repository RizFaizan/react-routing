// import React, { useEffect } from "react";
import "./Style.css";
// import Counter from "./hook";
// import Effect from "./Effect";
import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "./Pages/Layout";
import Blogs from "./Pages/Blogs";
import Home from "./Pages/Home";
import About from "./Pages/About";

const App = () => {
  return (
    <>
      {/* <Homedata /> */}
      {/* <Blogs /> */}
      {/* <Home /> */}
      {/* <About /> */}
      {/* <Counter /> */}
      {/* <Effect /> */}
      {/* <Layout /> */}
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
