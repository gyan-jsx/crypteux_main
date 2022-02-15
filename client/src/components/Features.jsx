import React from "react";
import './css/misc.css'
import { FaCubes, FaShieldAlt, FaRegClock, FaNetworkWired } from "react-icons/fa";
 const Feature = () => {
    return (
     <div id="features">
         <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            Brand new
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="18302e52-9e2a-4c8e-9550-0cbb21b38e55"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#18302e52-9e2a-4c8e-9550-0cbb21b38e55)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">The</span>
          </span>{' '}
          quick, brown fox jumps over a lazy dog
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque rem aperiam, eaque ipsa quae.
        </p>
      </div>
      <div className="grid gap-4 row-gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col justify-between p-5 border rounded shadow-sm">
          <div>
            <div className="text-2xl flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-green-50">
              <FaCubes />
            </div>
            <h6 className="mb-2 font-semibold leading-5">The deep ocean</h6>
            <p className="mb-3 text-sm text-gray-900">
              A flower in my garden, a mystery in my panties. Heart attack never
              stopped old Big Bear.
            </p>
          </div>
          <a
            href="/"
            aria-label=""
            style={{color: '#1effa5'}}
            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
          >
            Learn more
          </a>
        </div>
        <div className="flex flex-col justify-between p-5 border rounded shadow-sm">
          <div>
            <div className="text-2xl flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 bg-green-50">
            <FaShieldAlt />
            </div>
            <h6 className="mb-2 font-semibold leading-5">When has justice</h6>
            <p className="mb-3 text-sm text-gray-900">
              Rough pomfret lemon shark plownose chimaera southern sandfish
              kokanee northern sea.
            </p>
          </div>
          <a
            href="/"
            aria-label=""
            style={{color: '#1effa5'}}
            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
          >
            Learn more
          </a>
        </div>
        <div className="flex flex-col justify-between p-5 border rounded shadow-sm">
          <div>
            <div className="text-2xl flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 bg-green-50">
            <FaRegClock />
            </div>
            <h6 className="mb-2 font-semibold leading-5">Organically grow</h6>
            <p className="mb-3 text-sm text-gray-900">
              A slice of heaven. O for awesome, this chocka full cuzzie is as
              rip-off as a cracker.
            </p>
          </div>
          <a
            href="/"
            aria-label=""
            style={{color: '#1effa5'}}
            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-accent-400 hover:text-deep-purple-800"
          >
            Learn more
          </a>
        </div>
        <div className="flex flex-col justify-between p-5 border rounded shadow-sm">
          <div>
            <div className="text-2xl flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 bg-green-50">
             <FaNetworkWired />
            </div>
            <h6 className="mb-2 font-semibold leading-5">A slice of heaven</h6>
            <p className="mb-3 text-sm text-gray-900">
              Disrupt inspire and think tank, social entrepreneur but
              preliminary thinking think tank compelling.
            </p>
          </div>
          <a
            href="/"
            aria-label=""
            style={{color: '#1effa5'}}
            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
          >
            Learn more
          </a>
        </div>
      </div>
    </div>
     </div>
    );
  };

  export default Feature