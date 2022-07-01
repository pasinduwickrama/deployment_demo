import React, { useEffect } from "react";
import './App.css';
import Home from './components/Home/Home';
import { BrowserRouter,  Routes, Route } from 'react-router-dom';
import Calendar from "./pages/Calendar/Calendar";





function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<div><Home /></div>} />
    
    <Route path="Calendar" element={<div><Calendar /></div>} />
   </Routes>
   </BrowserRouter>
  );
}

export default App;
