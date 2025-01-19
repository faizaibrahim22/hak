import React from 'react'
import Image from 'next/image'
import { GrDeliver } from "react-icons/gr";
import { FaRegCheckCircle } from "react-icons/fa";
import { BiSolidPurchaseTag } from "react-icons/bi";
import { LuSprout } from "react-icons/lu";
import {Button} from "@/components/ui/button"

const Hero = () => {
    return (
        <div>
            <div className=' bg-slate-100 '>
                <Image
                    src="/Container.jpg"
                    alt=''
                    width={1440}
                    height={300} />

            </div>
            <div className='flex justify-center  items-center font-semibold text-2xl py-7'>
                What makes our brand different
            </div>
            <div>
                <GrDeliver />
            </div>
            <div>
                <p className="font-semibold text-lg">Next day as standard</p>
                <p className="text-gray-600 w-[270px] h-[48px]">
                    Order before 3pm and get your
                    order the next day as standard.
                </p>
            </div>
            <div className=' relative bottom-24 ml-72'>
                <FaRegCheckCircle />
                <div >
                    <p className="font-semibold text-lg">Made by true artisans</p>
                    <p className="text-black w-[270px] h-[48px]">
                        Handmade crafted goods made with
                        real passion and craftmanship

                    </p>
                </div>
                <div className='relative bottom-24 ml-80'>
                    <BiSolidPurchaseTag />
                    <div >
                        <p className="font-semibold text-lg"> Unbeatable price</p>
                        <p className="text-black w-[270px] h-[48px]">
                            For our materials and quality you
                            won’t find better prices anywhere</p>

                    </div>
                </div>
                <div className='relative bottom-48 ml-96 left-60 '>
                    <LuSprout />

                    <div >
                        <p className="font-semibold text-lg">Recycled packaging</p>
                        <p className="text-black w-[270px] h-[48px]">
                            We use 100% recycled packaging to
                            ensure our footprint is manageable
                        </p>

                    </div>
                </div>
                </div>
                   <div className='font-semibold text-black  relative text-3xl bottom-16 ml-8'>New ceramics
            </div>
            <Image
            src="/chair.jpg"
            alt=''
            width={260}
            height={50}/>
            <div className='relative bottom-96 ml-72'>
            <Image
            src="/card.jpg"
            alt=''
            width={260}
            height={50}
            className='relative bottom-3'/>
            </div>
            <div className='relative bottom-6'>
            <div className='relative bottom-96 ml-72'>
            <Image
            src="/card2.jpg"
            alt=''
            width={270}
            height={70}
            className='relative bottom-96 ml-72'/>
            </div>
            </div>
            <div className='relative bottom-96 ml-96'>
            <div className='relative bottom-96 ml-96'>
                <div className='relative bottom-12'>
                <Image
                src="/cards.jpg"
                alt=''
                width={270}
                height={90}
                className='relative bottom-96 ml-24'/>
                <div className='relative flex items-center right-64 bottom-96'>
                <Button className='bg-slate-500 w-[200px] h-[50px] text-white'>View  Collection</Button>
                </div>
                </div>
            </div>
            </div>
        </div>

    )
}

export default Hero
