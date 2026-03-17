import { useState } from 'react'

import './App.css'
import ResponsiveAppBar from './componets/ResponsiveAppBar'
import ImgMediaCard from './componets/ImgMediaCard'
import LabelBottomNavigation from './componets/LabelBottomNavigation'

function App() {

  return (
    <>
      <ResponsiveAppBar/>
      <ImgMediaCard/>
      <LabelBottomNavigation/>
    </>
  )
}

export default App
