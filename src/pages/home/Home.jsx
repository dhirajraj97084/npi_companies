import React from 'react'
import AutoScrollImage from '../../component/heropage/hero_Carousal/AutoScrollImage'
import Layout from '../../component/layout/Layout'
import HeroProducts from '../../component/heropage/hero_Products/HeroProducts'
import HeroReview from '../../component/heropage/hero_review/HeroReview'
import AutoPlayCarousal from '../../component/heropage/hero_autoPlayCarousal/AutoPlayCarousal'
import Testinomial from '../../component/heropage/testinomial/Testinomial'
import Img from '../../component/heropage/hero_img/ImgSection'




function Home() {
  return (
    <Layout>

     <AutoScrollImage/>
     <HeroReview/>
     <Img/>
     <HeroProducts/>
     <AutoPlayCarousal/>    
     <Testinomial/>

    </Layout>
  )
}

export default Home
