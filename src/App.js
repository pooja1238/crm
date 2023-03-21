import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from "./Components/Dashboard/Dashboard/Index"
import { Sidebar } from 'react-pro-sidebar';
import Index from './Components/Sidebar/Index';

import Home from './Components/Dashboard/Dashboard/Index.js';
// import Index from './Components/Dashboard/Attendence.js/Index';
import './styles/sidebar.css'

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Index/>} />
        
         
         
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;