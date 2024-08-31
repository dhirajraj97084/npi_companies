import React from 'react'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/home/Home';
import AboutUs from './pages/aboutUs/AboutUs';
import ContactUs from './pages/contactUs/ContactUs';
import NoPage from './pages/noPage/NoPage';
import ScrollTop from './component/scrollTop/ScrollTop';

import CoatingBooth from './component/heropage/hero_Products/coatingBooth/CoatingBooth';
import CoatingGuns from './component/heropage/hero_Products/coatingGuns/CoatingGuns';
import OtherChemicals from './component/heropage/hero_Products/otherChemicals/OtherChemicals';
import IndustrialChemical from './component/heropage/hero_Products/industrialChemicals/IndustrialChemical';
import SubDerusting from './pages/derusting/sub_Derusting/SubDerusting';
import AluminumCleanerChemical from './component/heropage/hero_Products/industrialChemicals/aluminumCleanerChemical/AluminumCleanerChemical';
import SevenTankPretreatmentProcessChemical from './component/heropage/hero_Products/industrialChemicals/SevenTankPretreatmentProcessChemical/SevenTank PretreatmentProcessChemical';
import Phosphatingpages from './pages/phsphating.pages/Phosphatingpages';
import Degcheme101 from './pages/degcheme/degcheme101/Degcheme101';
import OneZeroFive from './pages/degcheme/oneZeroFive/OneZeroFive';
import OneZeroNine from './pages/degcheme/oneZeroNine/OneZeroNine';
import TwoZeroThree from './pages/degcheme/twoZeroThree/TwoZeroThree';
import SixZero from './pages/degcheme/sixZero/SixZero';
import SevenZero from './pages/degcheme/sevenZero/SevenZero';
import EightZero from './pages/degcheme/eightZero/EightZero';
import NineZero from './pages/degcheme/nineZero/NineZero';
import NineZeroSeven from './pages/degcheme/nineZeroSeven/NineZeroSeven';




function App() {
  return (
    <div>
     <Router>
      <ScrollTop/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/derusting' element={<SubDerusting/>}/>
        <Route path='/aboutUs' element={<AboutUs/>}/>
        <Route path='/contactUs' element={<ContactUs/>}/>
        <Route path='/phosphating' element={<Phosphatingpages/>}/>
        <Route path='/*' element={<NoPage/>}/>
         {/* subheroProducts  */}
         <Route path='/metalpretreatment' element={<IndustrialChemical/>}/>
         {/* subpages chemicalsindustries */}
         <Route path='/aluminumCleanerChemical' element={<AluminumCleanerChemical/>}/>
         <Route path='/sevenTankPretreatmentProcessChemical' element={<SevenTankPretreatmentProcessChemical/>}/>
         <Route path='/wastewaterTreatment' element={<CoatingBooth/>}/>
         <Route path='/waterTreatmentBoiler' element={<CoatingGuns/>}/>
         <Route path='/paintdetackification' element={<OtherChemicals/>}/>
          {/* degcheme */}
          <Route path='/degcheme101' element={<Degcheme101/>}/>
          <Route path='/degcheme105' element={<OneZeroFive/>}/>
          <Route path='/degcheme109' element={<OneZeroNine/>}/>
          <Route path='/degcheme203' element={<TwoZeroThree/>}/>

          <Route path='/degcheme60' element={<SixZero/>}/>
          <Route path='/degcheme70' element={<SevenZero/>}/>

          <Route path='/degcheme80' element={<EightZero/>}/>
          <Route path='/degcheme90' element={<NineZero/>}/>
          <Route path='/degcheme907' element={<NineZeroSeven/>}/>
          {/* end */}

      </Routes>
     </Router>
    </div>
  )
}

export default App
