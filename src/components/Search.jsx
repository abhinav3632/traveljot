import React from 'react';
import { MdOutlineTravelExplore } from 'react-icons/md';
import notes from '../assets/Notes.gif';

const Search = () => {
  return (
    <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16'>
      <div className='lg:col-span-2 flex flex-col justify-evenly'>
        <div>
          <h2>What makes us special from others!!</h2>
          <p className='pt-4 text-justify'>
          Welcome to Traveljot, the ultimate travel log website for adventure seekers! 
          Our platform allows you to create a visual map of your travel journeys, complete 
          with location tags and personalized descriptions. With Traveljot, you can easily 
          keep track of all your travel experiences in one place, from that hidden gem of a café in 
          Paris to the stunning sunset you witnessed on a beach in Bali.
          </p>
          <p className='text-justify'>
          Our user-friendly interface and intuitive design make it easy to create and 
          manage your travel logs, allowing you to focus on enjoying your trip. Share your 
          travel log with friends and family, or keep it private for your own memories. With Traveljot, 
          you can relive your travel adventures whenever you want.
          </p>
          <p className='text-justify'>
          So, whether you're a seasoned traveler or just starting out, join Traveljot today 
          and start mapping out your journeys like a pro.
          </p>          
        </div>
        <div className='grid sm:grid-cols-2 gap-8 py-4'>
          <div className='flex flex-col lg:flex-row items-center text-center'>
            <button>
              <MdOutlineTravelExplore size={50} />
            </button>
            <div>
                <h3 className='p-2'>LEADING SERVICE</h3>
                <p className='py-1'>24/7 COVERAGE</p>
            </div>
          </div>
        </div>
      </div>

      <div>
          <img src={notes} alt="/" />
      </div>
    </div>
  );
};

export default Search;
