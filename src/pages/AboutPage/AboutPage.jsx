import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import About from '../../components/About/About'
import HomeAbout from '../../components/HomeAbout/HomeAbout'
import MissionVision from '../../components/About/MissionVision/MissionVision'

function AboutPage() {
  return (
    <>
      <Navbar active={2} />
      <HomeAbout />
      <About />
      <MissionVision />
    </>
  )
}

export default AboutPage