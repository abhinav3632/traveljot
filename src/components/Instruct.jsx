import React from 'react';

const Instruct = () => {
  return (
    <div className="bg-gradient-to-b from-[#1697B6] to-blue-50 pt-14">
      <div className="max-w-5xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
        <div className="text-justify">
          <h1 className="mt-6 text-3xl text-center font-extrabold text-gray-900 md:text-5xl">
            Instructions to use MemoirMap
          </h1>
          <p className="mt-2 text-sm text-gray-700  md:text-lg">
            1. The location is by default set to Indian sub-continent. Use the cursor to move around in the map.
          </p>
          <p className="mt-2 text-sm text-gray-700  md:text-lg">
            2. Find your ideal spot to share your travel log and simply double click. 
          </p>
          <p className="mt-2 text-sm text-gray-700  md:text-lg">
            3. Fill out the form with your journey details, and add an image by pasting the image link. 
          </p>
          <p className="mt-2 text-sm text-gray-700  md:text-lg">
            4. Click on "createLogEntry" and Voila!!, your amazing travel log is saved for the future! 
          </p>
        </div>
      </div>
    </div>
  );
};

export default Instruct;
