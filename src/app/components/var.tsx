import React from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
const Var = () => {
  return (
    <div className='flex justify-between relative  bottom-96 items-center'>
        <div className="flex justify-between relative bottom-96 font-extrabold text-3xl ">
          <Image
          src="/for.jpg"
          alt='for'
          width={1440}
          height={603}
          className='relative bottom-96'
           />
           <div className='relative right-72  bottom-2'>
           <div className='relative right-96 '>
           <Button className='bg-slate-500 
            relative right-96  text-white w-[160px] h-[60px]'> Get in touch</Button>
           </div>
           </div>
        </div>
      
    </div>
  )
}

export default Var