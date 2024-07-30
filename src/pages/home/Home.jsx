import React from 'react'
import AutoScrollImage from '../../component/heropage/hero_Carousal/AutoScrollImage'
import Layout from '../../component/layout/Layout'
import HeroProducts from '../../component/heropage/hero_Products/HeroProducts'


function Home() {
  return (
    <Layout>
     
     <AutoScrollImage/>
     <HeroProducts/>
    </Layout>
  )
}

export default Home
