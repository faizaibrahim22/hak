import React from 'react'
import Navbar from '../components/Navbar'
import Image from 'next/image'
import Footer from '../components/Footer'
const page = () => {
  return (
    <div>
      <Navbar />
      <div className='flex shadow-lg h-[100px]  items-center'>
        <p className='font-extrabold  text-2xl flex  items-center ml-96'> Your Shopping Cart</p>
      </div>
      <div className='flex shadow-lg py-14 font-extrabold text-xl'>
        Product<p className='ml-96'>Quantity</p><p className='ml-52'> Total</p>
      </div>
      <Image src="/product.jpg" alt='' width={180} height={100} /><div className='text-lg font-mono'>Graystone vase
        A timeless ceramic vase with
        a tri color grey glaze.
        £85
        <p className='relative bottom-52 ml-96 left-28 text-xl'>1</p>
        <p className='relative bottom-60 ml-96 left-96 text-xl'>£85</p>
      </div>
      <div className='flex shadow-lg'>
        <Image src="/qo.jpg"
          alt=''
          width={180}
          height={100} />
      </div>
      <p className='flex shadow-lg text-lg font-mono'>Basic white vase . Beautiful and simple this is
        one for the classics. £85</p>
        <p className='ml-96 relative bottom-56 left-28 text-lg'>1</p>
        <p className='ml-96 relative bottom-64 left-96  text-lg'>£85</p>
        <div className='py-96 relative top-96 '>
          <div className='py-96'>
        <Footer/>
        </div>
        </div>
    </div>
  )
}

export default page
