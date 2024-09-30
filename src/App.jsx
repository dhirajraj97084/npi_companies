import React, { useEffect } from 'react'
import Aos from "aos";
import "aos/dist/aos.css" 

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
import Phoscheme503 from './pages/phsphating.pages/inner_phosphating_page/Phoscheme503';
import Phoscheme109 from './pages/phsphating.pages/inner_phosphating_page/Phoscheme109';
import Phoscheme501 from './pages/phsphating.pages/inner_phosphating_page/Phoscheme501';
import Phoscheme507 from './pages/phsphating.pages/inner_phosphating_page/Phoscheme507';
import Phoscheme_pc from './pages/phsphating.pages/inner_phosphating_page/Phoscheme_pc';
import Phoscheme301 from './pages/phsphating.pages/inner_phosphating_page/Phoscheme301';
import Phoscheme505 from './pages/phsphating.pages/inner_phosphating_page/Phoscheme505';
import PhoschemeM901 from './pages/phsphating.pages/inner_phosphating_page/PhoschemeM901';
import ColdPhosphating from './component/heropage/hero_Products/industrialChemicals/ColdPhosphating';
import Degcheme105 from './component/heropage/hero_Products/industrialChemicals/Degcheme105';
import Degcheme109 from './component/heropage/hero_Products/industrialChemicals/Degcheme109';
import Degcheme203 from './component/heropage/hero_Products/industrialChemicals/Degcheme203';
import Degcheme907 from './component/heropage/hero_Products/industrialChemicals/Degcheme907';
import Degcheme60 from './component/heropage/hero_Products/industrialChemicals/Degcheme60';
import Degcheme70 from './component/heropage/hero_Products/industrialChemicals/Degcheme70';
import Degcheme80 from './component/heropage/hero_Products/industrialChemicals/Degcheme80';
import Ss from './component/heropage/hero_Products/industrialChemicals/SevenTankPretreatmentProcessChemical/innerPart/ss/Ss';
import Oil from './component/heropage/hero_Products/industrialChemicals/SevenTankPretreatmentProcessChemical/innerPart/oil/Oil';
import Paint from './component/heropage/hero_Products/industrialChemicals/SevenTankPretreatmentProcessChemical/innerPart/paint/Paint';
import Metal from './component/heropage/hero_Products/industrialChemicals/SevenTankPretreatmentProcessChemical/innerPart/metal/Metal';




function App() {  

    useEffect(()=>{
      Aos.init();    
    })

  return (
    <div>
      <Router>
        <ScrollTop />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/derusting' element={<SubDerusting />} />
          <Route path='/aboutUs' element={<AboutUs />} />
          <Route path='/contactUs' element={<ContactUs />} />
          <Route path='/phosphating' element={<Phosphatingpages />} />
          <Route path='/*' element={<NoPage />} />
          {/* subheroProducts  */}
          <Route path='/metalpretreatment' element={<IndustrialChemical />} />
          {/* subpages chemicalsindustries */}
          <Route path='/aluminumCleanerChemical' element={<AluminumCleanerChemical />} />
          <Route path='/sevenTankPretreatmentProcessChemical' element={<SevenTankPretreatmentProcessChemical />} />
          <Route path='/coldphosphating' element={<ColdPhosphating />} />
          <Route path='/digitalmarketing' element={<Degcheme101 />} />

          <Route path='/ss' element={<Ss />} />
          <Route path='/oil' element={<Oil />} />
          <Route path='/paint' element={<Paint />} />
          <Route path='/metal' element={<Metal />} />

                    
            <Route path='/google' element={<Degcheme105 />} />
            <Route path='/onlineadvertising' element={<Degcheme109 />} />
            <Route path='/graphicdesigning' element={<Degcheme203 />} />
            <Route path='/instagram' element={<Degcheme907 />} />
            <Route path='/ecommercewebsite' element={<Degcheme60 />} />
            <Route path='/sevendigital' element={<Degcheme70 />} />
            <Route path='/threestrategies' element={<Degcheme80 />} />



          <Route path='/wastewaterTreatment' element={<CoatingBooth />} />
          <Route path='/waterTreatmentBoiler' element={<CoatingGuns />} />
          <Route path='/paintdetackification' element={<OtherChemicals />} />
          {/* degcheme */}
          <Route path='/degcheme101' element={<Degcheme101 />} />
          <Route path='/degcheme105' element={<OneZeroFive />} />
          <Route path='/degcheme109' element={<OneZeroNine />} />
          <Route path='/degcheme203' element={<TwoZeroThree />} />

          <Route path='/degcheme60' element={<SixZero />} />
          <Route path='/degcheme70' element={<SevenZero />} />

          <Route path='/degcheme80' element={<EightZero />} />
          <Route path='/degcheme90' element={<NineZero />} />
          <Route path='/degcheme907' element={<NineZeroSeven />} />
          {/* end */}

          {/* phoscheme_pages */}
          <Route path='/phoscheme503' element={<Phoscheme503 />} />
          <Route path='//phoscheme109' element={<Phoscheme109 />} />

          <Route path='/phoscheme501' element={<Phoscheme501 />} />
          <Route path='/phoscheme507' element={<Phoscheme507 />} />

          <Route path='/phoschemepc' element={<Phoscheme_pc />} />
          <Route path='/phoscheme301' element={<Phoscheme301 />} />

          <Route path='/phoscheme507' element={<Phoscheme507 />} />

          <Route path='/phoscheme505' element={<Phoscheme505 />} />
          <Route path='/phoschemeM901' element={<PhoschemeM901 />} />


        </Routes>
      </Router>
    </div>
  )
}

export default App
