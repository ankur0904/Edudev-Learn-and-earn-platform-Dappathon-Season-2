// Open-Source page
/* eslint-disable @next/next/no-img-element */
import React from 'react';

import Link from 'next/link';
// import Explore1 from "/About/Explore.png";



function Explore() {
  return (
    <div className="relative">
      <div className="flex lg:flex-row mt-5 sm:mt-0 box-border mx-w-screen justify-between items-center">
        <div className=" justify-between p-5 m-10 p-13 pr-22 lg:w-[45%] space-y-5 sm:space-y-10">
          <h1 className="xl:text-5xl font-thin lg:text-4xl text-3xl my-4">
            <span className="font-semibold text-[#7EE787]">
              Learn about some biggest
            </span>{' '}
            <span className="text-white">Open-source Programs</span>
          </h1>
          <Link href="/coming-soon" passHref>
            <button className="btn-green">Explore</button>
          </Link>
        </div>
        <div className="flex justify-center lg:w-4/5 relative md:p-10">
          <img
            className="relative z-0 sm:block hidden"
            src="/About/Explore2.png"
            height={556} width={742}
            
            alt="H"
          />
          <img
            src="/About/Explore.png"
            className="scale-110 relative z-10 sm:hidden"
            alt="Ye"
          />

          <div className="green-gradient absolute z-0 lg:bottom-52 sm:bottom-24 bottom-16 lg:right-96"></div>
        </div>
      </div>
     
    </div>
  );
}

export default Explore;