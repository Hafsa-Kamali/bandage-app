import React from 'react'

import Heropage from './Homepage/MainHero';
import Products from './Homepage/EditorPick';
import BestSellers from './Homepage/BestSellers';
import Carasouel from './Homepage/Carasouel';
import NeuralUniverseSection from './Homepage/Banner';
import FeaturedPosts from './Homepage/FeaturedBlog';



const Homepage = () => {
  return (
    <div className='overflow-x-hidden'>
      <Heropage/>
    <Products />
    <BestSellers/>
    <Carasouel />
    <NeuralUniverseSection/>
   <FeaturedPosts/>
    </div>
  )
}

export default Homepage