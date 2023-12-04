import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import HomeService from '../../components/HomeService/HomeService'
import Service from '../../components/Service/Service'

function ServicePage() {
  return (
    <>
      <Navbar active={3} />
      <HomeService />
      <Service />
    </>
  )
}

export default ServicePage