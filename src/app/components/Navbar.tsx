import React from 'react';
import Link from 'next/link';
import { IoSearchSharp } from 'react-icons/io5';
import { FaRegUserCircle } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { AiOutlineLogin } from "react-icons/ai";


const Navbar = () => {
  return (
    <nav className="bg-slate-100 w-full h-[203px] text-black p-4 shadow-md">
      <div className="flex justify-between items-center">
        <div className="text-2xl cursor-pointer">
        <Link  href ="/Search" >
        <IoSearchSharp className='relative  ml' />
        </Link>
      </div>
      </div>
      <div className="flex justify-center relative top-10 ml-96 left-10 items-center">
        <div className="text-xl font-bold relative right-36  bottom-8">Avion</div>
        
        <div className="flex space-x-4">
          <div className="text-2xl  relative left-96 bottom-12 cursor-pointer">
            <FaRegUserCircle />
          </div>
          <div className="text-2xl relative left-80 bottom-12 cursor-pointer">
            <FaCartShopping />

          </div>
          


      </div>
      <div className='relative bottom-10 left-48 '>
      <Link href="/Login">Login
      <AiOutlineLogin className='relative bottom-5 ml-10' />

          </Link>
        </div>
      </div>
      <div className="mt-4">
        <ul className="flex space-x-4 justify-center">
            
          <li className="hover:underline">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:underline">
            <Link href="/About">About</Link>
          </li>
          <li className="hover:underline">
            <Link href="/Contact">Contact</Link>
          </li>
          <li className="hover:underline">
            <Link href="/Products">Products</Link>
          </li>
          <li className="hover:underline">
            <Link href="/Cart">Cart</Link>
          </li>
        </ul>
        <ul className="bg-slate-100 flex space-x-4 justify-center mt-4">
          <Link href="/"><li>Plant pots</li></Link>
          <Link href="/"><li>Ceramics</li></Link>
          <Link href="/"><li>Tables</li></Link>
          <Link href="/"><li>Chairs</li></Link>
          <Link href="/"><li>Crockery</li></Link>
          <Link href="/"><li>Tableware</li></Link>
          <Link href="/"><li>Cutlery</li></Link>
        </ul>
      </div>
      
    </nav>
  );
};

export default Navbar;
