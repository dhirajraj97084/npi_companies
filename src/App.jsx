import React from 'react'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/home/Home';
import AboutUs from './pages/aboutUs/AboutUs';
import ContactUs from './pages/contactUs/ContactUs';
import NoPage from './pages/noPage/NoPage';

function App() {
  return (
    <div>
     <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/aboutUs' element={<AboutUs/>}/>
        <Route path='/contactUs' element={<ContactUs/>}/>
        <Route path='/*' element={<NoPage/>}/>
      </Routes>
     </Router>
    </div>
  )
}

export default App
