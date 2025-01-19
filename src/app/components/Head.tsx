import React from 'react';

import { Button } from '@/components/ui/button'

const Head = () => {
  return (
    <div className='relative bottom-96 '>
      <div className=" flex justify-center items-center relative bottom-96">
        <div className="text-3xl relative  bottom-96 text-black font-semibold text-center">
          <p className='relative bottom-96'>Join the club and get the benefits</p>
            <p className='text-sm relative font-normal bg-slate-50 bottom-96 '>Sign up for our newsletter and receive exclusive offers on
             ranges, sales, pop up stores and more</p>
            <input type="text" placeholder='your@email.com' className='text-sm  relative bottom-96 w-[354px] h-[56px] bg-yellow-100'/>
            <Button className='bg-purple-900 w-[118px] h-[56px]  left-4 relative bottom-96 text-white'>SingUp</Button>
        </div>
      </div>
    </div>
  );
};

export default Head;
