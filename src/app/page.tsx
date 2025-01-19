import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/hero'
import Sid from "./components/sid"
import Head from './components/Head'
import Var from './components/var'
import Footer from './components/Footer'
const page = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Sid/>
      <Head/>
      <Var/><Footer/>
    </div>
  )
}

export default page
