import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Contact from '../../components/Contact/Contact'
import HomeContact from '../../components/HomeContact/HomeContact'

function ContactPage() {
  return (
    <>
      <Navbar active={5} />
      <HomeContact />
      <Contact />
    </>
  )
}

export default ContactPage