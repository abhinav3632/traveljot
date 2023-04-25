import React from 'react'

import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';
import img5 from '../assets/img5.jpg';
import img6 from '../assets/img6.jpg';
import SelectsCard from './SelectsCard';

const Selects = () => {
  return (
    <>
      <h1 className='text-center'>Footprints from Afar:</h1>
      <div className='max-w-[1240px] mx-auto px-4 py-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
        <SelectsCard bg={img1} text='Sumatras' />
        <SelectsCard bg={img2} text='Hawaii' />
        <SelectsCard bg={img3} text='Netherlands' />
        <SelectsCard bg={img4} text='Alaska' />
        <SelectsCard bg={img5} text='Ohio' />
        <SelectsCard bg={img6} text='Switzerland' />
      </div>
    </>
  )
}

export default Selects