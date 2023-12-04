import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import HomeSector from '../../components/HomeSector/HomeSector'
import Sector from '../../components/Sector/Sector'

function SectorPage() {
  return (
    <>
      <Navbar active={4} />
      <HomeSector />
      <Sector />
    </>
  )
}

export default SectorPage