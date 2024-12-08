import React from 'react';
import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from "./components/Home";
import CreateCampaign from './pages/CreateCampaign';
import Campaigns from './pages/Campaigns';
import UserCampaigns from './pages/UserCampaigns';
import ViewCampaign from './pages/ViewCampaign';

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Create' element={<CreateCampaign />} />
          <Route path='/Donate' element={<Campaigns />} />
          <Route path='/User' element={<UserCampaigns />} />
          <Route path='/View' element={<ViewCampaign />} />
        </Routes>
      </BrowserRouter>
    </>
  )
};

export default App;