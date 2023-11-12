import React from 'react';
import BaseLayout from '../layouts/base';
import { Typography, Button } from '@mui/material';

export default function Home() {
  return (
    <BaseLayout>
      {/* Hero Section Start  */}
      <div className="flex flex-col items-center justify-center min-h-[90vh] bg-[url('/hero-bg.jpg')] bg-center bg-cover ">
        <h1 className="text-white text-5xl md:text-[6rem] font-bold  ">
          TechStarHub
        </h1>
        <h4 className="text-white text-2xl md:text-[2rem] font-bold mt-4 ">
          Learn | Build | Share | Connect
        </h4>
        <div className="flex gap-4 mt-4">
          <button className="group rounded-full border-white border-[2px] px-6 py-2 hover:bg-white shadow ">
            <Typography
              variant="h6"
              className="text-white font-bold group-hover:text-black transition"
            >
              Join Us
            </Typography>
          </button>
        </div>
      </div>
      {/* Hero Section End */}
      <div className="w-full flex min-h-screen relative ">
        {/* Background colors for the section start */}
        <div className="absolute flex -z-20 top-0 left-0 w-full h-full">
          <div className="bg-[#272829] w-1/2 h-full"></div>
          <div className="bg-[#61677A] w-1/2 h-full"></div>
        </div>
        {/* Background colors for the section end */}

        {/* Content for the section start */}
        <div className="flex flex-col gap-[4rem] justify-center items-center my-20">
          <div className="bg-[#1F4068] text-slate-300 p-6 rounded-lg w-3/4 md:w-1/2 md:relative md:-left-20 ">
            <h3 className=" text-4xl font-bold ">What We Do</h3>
            <h6 className=" text-2xl mt-4 ">
              We are a community of developers, designers, and tech enthusiasts
              who are passionate about technology and its impact on the world.
            </h6>
          </div>
          <div className="bg-[#221F3B] text-slate-300 p-6 rounded-lg w-3/4 md:w-1/2 md:relative md:left-20">
            <h3 className=" text-4xl font-bold ">Our Purpose</h3>
            <h6 className=" text-2xl mt-4 ">
              We are a community of developers, designers, and tech enthusiasts
              who are passionate about technology and its impact on the world.
            </h6>
          </div>
          <div className="bg-[#1F4068] text-slate-300 p-6 rounded-lg w-3/4 md:w-1/2 md:relative md:-left-20 ">
            <h3 className=" text-4xl font-bold ">Our Future </h3>
            <h6 className=" text-2xl mt-4 ">
              We are a community of developers, designers, and tech enthusiasts
              who are passionate about technology and its impact on the world.
            </h6>
          </div>
        </div>
        {/* Content for the section end */}
      </div>
    </BaseLayout>
  );
}
