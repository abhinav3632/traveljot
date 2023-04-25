import React from 'react';
import dp from '../assets/pfp.png';
import { FaRegEnvelope } from 'react-icons/fa';
import { FiMapPin } from 'react-icons/fi';
import { SiLinkedin, SiGithub } from 'react-icons/si';

const AboutPage = () => {
  return (
    <div className="bg-gradient-to-b from-cyan-600 to-blue-50 py-16">
      <div className="max-w-5xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <img src={dp} className="mx-auto h-40 w-40" alt='' />
          <h1 className="mt-6 text-6xl font-extrabold text-gray-900">
            Abhinav Arun
          </h1>
          <p className="mt-2 text-lg text-gray-700">
            Aspiring Full Stack Developer
          </p>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="col-span-1 flex items-center">
              <FaRegEnvelope className="mr-3 h-6 w-6 text-gray-400" />
              <span className="text-gray-900">
                abhinavarun3632@gmail.com
              </span>
            </div>
            <div className="col-span-1 flex items-center">
              <FiMapPin className="mr-3 h-6 w-6 text-gray-400" />
              <span className="text-gray-900">
                Jalandhar, Punjab
              </span>
            </div>
            <div className="col-span-1 flex items-center">
              <SiLinkedin className="mr-3 h-6 w-6 text-gray-400" />
              <a href="https://www.linkedin.com/in/abhinav-arun-5908451b3/" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-white">
                LinkedIn
              </a>
            </div>
            <div className="col-span-1 flex items-center">
              <SiGithub className="mr-3 h-6 w-6 text-gray-400" />
              <a href="https://github.com/abhinav3632" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-white">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
