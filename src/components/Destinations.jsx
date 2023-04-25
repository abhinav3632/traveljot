import React from 'react'

import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';
import img5 from '../assets/img5.jpg';

const Destinations = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 text-center'>
        <h1>Keep On jotting your favorite journey logs</h1>
        <p className='py-4'>Best place to store memoirs from your adventure trips!</p>
        <div className='grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4'>
            <img className='w-full h-full object-cover col-span-2 md:col-span-3 row-span-2' src={img1} alt="/" />
            <img className='w-full h-full object-cover' src={img2} alt="/" />
            <img className='w-full h-full object-cover' src={img3} alt="/" />
            <img className='w-full h-full object-cover' src={img4} alt="/" />
            <img className='w-full h-full object-cover' src={img5} alt="/" />
        </div>
    </div>
  )
} 

export default Destinations