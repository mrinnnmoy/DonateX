import React from 'react';
import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from "./components/Home";
import Footer from './components/Footer';

const App = () => {

  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path='/Create' element={< />} /> */}
          {/* <Route path='/Donate' element={< />} /> */}
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
};

export default App;