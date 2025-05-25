import React from 'react'

import Header from './Components/Header'
import Slider from './Components/Slider'
import ProductionHouse from './Components/ProductionHouse'
import GenreMovieList from './Components/GenreMovieList'

function MainApp() {
  return (
    <div>
        <Header/>
        <Slider/>
        <ProductionHouse/>
        <GenreMovieList/>
    </div>
  )
}

export default MainApp