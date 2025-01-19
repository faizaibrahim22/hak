import React from 'react'
import Navbar from '../components/Navbar'
import Image from 'next/image'
import Footer from '../components/Footer'
const page = () => {
  return (
    <div>
      <Navbar/>
      <div><Image
      src="/fram.jpg"
      alt=''
      width={1120} height={200}/>
      <Image src="/Filters.jpg"
      alt='' width={1430} height={300}/>
      <Image src="/Listings.jpg" alt='' width={1440} height={400}/>
      <Image src="/Listing.jpg" alt='' width={1440} height={400}/>
      <Image src="/Listings.jpg" alt='' width={1440} height={400}/>
      <div className='py-96 relative top-96'>
        <div  className='py-96'>
       <Footer/>
       </div>
       </div>
      </div>
    </div>
  )
}

export default page
