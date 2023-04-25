import React from 'react';
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from 'react-icons/fa';

const Footer = () => {
  let  details = [
    { name: "About", link: "/about" },
    { name: "Partnerships", link: "/#" },
    { name: "Careers", link: "/#" },
    { name: "Newsroom", link: "/#" },
    { name: "Advertising", link: "/#" },
  ];

  let Links = [
    { name: "Home", link: "/" },
    { name: "Memoir", link: "/memoirs" },
    { name: "Weather", link: "/weather" },
  ];

  return (
    <div className='w-full bg-gray-100 py-16 '>
      <div className='max-w-[1240px] mx-auto flex flex-col px-4'>
        <div className='sm:flex text-center justify-between items-center'>
          <h1>TravelJot.</h1>
          <div className='flex justify-between w-full sm:max-w-[280px] my-4'>
            <FaFacebook className='icon' />
            <FaTwitter className='icon' />
            <FaYoutube className='icon' />
            <FaPinterest className='icon' />
            <FaInstagram className='icon' />
          </div>
        </div>
        <div className='flex justify-between'>
          <ul className='lg:flex'>
          {
              details.map((link) => (
                <li  key={link.name}>
                  <Link to={link.link}>{link.name}</Link>
                </li>
              ))
            }
          </ul>
          <ul className='text-right lg:flex'>
            {
              Links.map((link) => (
                <li  key={link.name}>
                  <Link to={link.link}>{link.name}</Link>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
