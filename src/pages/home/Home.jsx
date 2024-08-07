import React from 'react'
import AutoScrollImage from '../../component/heropage/hero_Carousal/AutoScrollImage'
import Layout from '../../component/layout/Layout'
import HeroProducts from '../../component/heropage/hero_Products/HeroProducts'
import OurService from '../../component/heropage/hero_ourServices/OurService'
import HeroReview from '../../component/heropage/hero_review/HeroReview'
import AutoPlayCarousal from '../../component/heropage/hero_autoPlayCarousal/AutoPlayCarousal'


function Home() {
  return (
    <Layout>
     
     <AutoScrollImage/>
     <HeroReview/>
     <HeroProducts/>
     <AutoPlayCarousal/>
     <OurService/>
    
    </Layout>
  )
}

export default Home
