import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Head from '../components/Head';
import { Button } from '@/components/ui/button';
import { GrDeliver } from 'react-icons/gr';
import { FaRegCheckCircle } from 'react-icons/fa';
import { BiSolidPurchaseTag } from 'react-icons/bi';
import { LuSprout } from 'react-icons/lu';
import Image from 'next/image';
const page = () => {
    return (
        <div>
            <Navbar />
            <div className='w-[701px] text-3xl font-bold p-10 h-[100px]'>
                A brand built on the love of craftmanship,
                quality and outstanding customer service
                <Button>View our products</Button>
                <div className='bg-blue-950 text-white font-semibold  w-[600px] h-[20px] relative  top-7 py-52'>
                    It started with a small idea
                    <p className='text-sm font-medium text-white'>A global brand with local beginnings, our story begain in a small studio in South London in early 2025</p>
                    <Button>View collection</Button>
                    <div className='relative ml-56  w-[640px] h-[20px]'>
                        <Image
                            src="/on.jpg"
                            alt=''
                            width={630}
                            height={470}
                            className='relative bottom-80 ml-96 ' />
                    </div>
                </div>
                <div className='relative top-40 w-[1110px]'>
                    <Image
                        src="/Fea.jpg"
                        alt=''
                        width={1440}
                        height={200} />
                </div>
                <div className='relative py-48'>
                    <div className=' font-medium relative text-2xl py-7'>
                        What makes our brand different
                    </div>
                    <div>
                        <GrDeliver />
                    </div>
                    <div>
                        <p className="font-semibold text-lg">Next day as standard</p>
                        <p className="text-black w-[230px] h-[30px] text-sm">
                            Order before 3pm and get your
                            order the next day as standard.
                        </p>
                    </div>
                    <div className='relative bottom-24 ml-72'>
                        <FaRegCheckCircle />
                        <div >
                            <p className="font-semibold text-lg">Made by true artisans</p>
                            <p className="text-black w-[230px] h-[30px] text-sm">
                                Handmade crafted goods made with
                                real passion and craftmanship

                            </p>
                        </div>
                        <div className='relative bottom-28 ml-80'>
                            <BiSolidPurchaseTag />
                            <div>
                                <p className="font-semibold text-lg "> Unbeatable price</p>
                                <p className="text-black w-[230px] h-[30px]  text-sm">
                                    For our materials and quality you
                                    won’t find better prices anywhere</p>

                            </div>
                        </div>
                        <div className='relative bottom-60 ml-96 right-6 left-60 '>
                            <LuSprout />
                            <div>
                                <p className="font-semibold text-lg">Recycled packaging</p>
                                <p className="text-black w-[230px] h-[30px] text-sm">
                                    We use 100% recycled packaging to
                                    ensure our footprint is manageable
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='relative top-96 py-52  ml-72'>
                    <div className='relative top-96 py-96'>
            <Head/>
            <div className='relative bottom-72 right-80 w-[900px]'>
            <Footer/>
            </div>
            </div>
            </div>
            </div>
            
        </div>
    )
}

export default page
