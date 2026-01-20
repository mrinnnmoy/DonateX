import React from 'react';
import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from "./pages/Home";
import CreateCampaign from './pages/CreateCampaign';
import Campaigns from './pages/Campaigns';
import Dashboard from './pages/Dashboard';
import ViewCampaign from './pages/ViewCampaign';
import Footer from './components/Footer';

const App = () => {

  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Create' element={<CreateCampaign />} />
          <Route path='/Donate' element={<Campaigns />} />
          <Route path='/Dashboard' element={<Dashboard />} />
          <Route path='/View' element={<ViewCampaign />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
};

export default App;