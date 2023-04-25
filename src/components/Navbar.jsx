import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { BsPerson } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from 'react-icons/fa';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState(false)
  const handleNav = () => {
    setNav(!nav);
    setLogo(!logo)
  };
  let Links = [
    { name: "Home", link: "/" },
    { name: "MemoirMap", link: "/memoirs" },
    { name: "ClimaCompass", link: "/weather" },
  ];

  return (
    <div className='flex w-full justify-between items-center h-20 px-4 absolute z-10 text-white'>
      <div>
        <h1 onClick={handleNav} className={logo ? 'hidden' : 'block'}>TravelJot.</h1>
      </div>
      <ul className='hidden md:flex gap-7'>
        {
          Links.map((link) => (
            <li className='text-2xl' key={link.name}>
              <Link to={link.link}>{link.name}</Link>
            </li>
          ))
        }
      </ul>
      <div className='hidden md:flex'>
        <Link to='/login'>
          <BsPerson size={30} />
        </Link>
      </div>

      {/* Hamburger */}
      <div onClick={handleNav} className='md:hidden z-10'>
        {nav ? <AiOutlineClose className='text-black' size={20} /> : <HiOutlineMenuAlt4 size={20} />}
      </div>

      {/* Mobile menu dropdown */}
      <div onClick={handleNav} className={nav ? 'absolute text-black left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col' : 'absolute left-[-100%]'}>
        <ul>
          <h1>TravelJot.</h1>
          {
          Links.map((link) => (
            <li className='border-b' key={link.name}>
              <Link to={link.link}>{link.name}</Link>
            </li>
          ))
          }
          <div className='flex flex-col'>
            <Link to='/login'>
            <button>Account</button>
            </Link>
          </div>
          <div className='flex justify-between my-6'>
            <FaFacebook className='icon' />
            <FaTwitter className='icon' />
            <FaYoutube className='icon' />
            <FaPinterest className='icon' />
            <FaInstagram className='icon' />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
