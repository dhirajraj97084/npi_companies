import React from 'react'
import AutoScrollImage from '../../component/heropage/hero_Carousal/AutoScrollImage'
import Layout from '../../component/layout/Layout'
import HeroProducts from '../../component/heropage/hero_Products/HeroProducts'
import OurService from '../../component/heropage/hero_ourServices/OurService'


function Home() {
  return (
    <Layout>
     
     <AutoScrollImage/>
     <HeroProducts/>
     <OurService/>
    </Layout>
  )
}

export default Home
