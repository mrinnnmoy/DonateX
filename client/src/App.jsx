import React from 'react';
import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
// import Home from "./components/Home";
// import Work from  "./components/Work";
// import Donate from "./components/Donate";
// import About from "./components/About";
// import Footer from './components/Footer/Footer';

const App = () => {

  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          {/* <Home />
          <Work />
          <Donate />
          <About /> */}
        </Routes>
      </BrowserRouter>
      {/* <Footer /> */}
    </>
  )
};

export default App;