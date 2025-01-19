import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

const Sid = () => {
    return (
        <div className='relative bottom-96'>
            <div className='relative bottom-96'>
                <p className='relative bottom-96 font-semibold text-3xl ml-10'>Our popular products</p>
                <div className='relative bottom-72 '>
                    <Image
                        src="/Product Card (6).jpg"
                        alt=''
                        width={600}
                        height={100} />
                    <div className='relative bottom-96'>
                        <Image
                            src="/open.jpg"
                            alt=''
                            width={200}
                            height={100}
                            className='relative bottom-14 ml-96 left-60' />
                    </div>
                    <div className=' relative py-11' >
                        <div className='relative bottom-96 ml-64'>
                            <Image
                                src="/prod.jpg"
                                alt=''
                                width={280}
                                height={100}
                                className='relative bottom-96 ml-96 left-60' />
                            <div className='relative flex items-center justify-center right-20 bottom-96'>
                                <Button className='bg-gray-600 w-[300px] h-[50px] text-white'>View  Collection</Button>
                            </div>
                        </div>
                    </div>  
                </div>
            </div>
        </div>
    )
}

export default Sid
