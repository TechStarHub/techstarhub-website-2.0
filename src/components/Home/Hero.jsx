import React, { useEffect, useRef } from 'react';
import { Typography } from '@mui/material';
import { useAnimate, useInView, animate } from 'framer-motion';

export default function Hero() {
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  // hero section animation
  const [heroScope, heroAnimate] = useAnimate();
  const isHeroInView = useInView(heroScope);

  const text1 = useRef(null);
  const text2 = useRef(null);
  const text3 = useRef(null);

  useEffect(() => {
    if (isHeroInView) {
      heroAnimate(
        heroScope.current,
        {
          opacity: 1,
        },
        {
          duration: 0.3,
        },
      );
      animate(
        text1.current,
        {
          opacity: 1,
          y: 0,
        },
        {
          duration: 0.7,
        },
      );
      animate(
        text2.current,
        {
          opacity: 1,
          y: 0,
        },
        {
          duration: 0.7,
          delay: 0.5,
        },
      );
      animate(
        text3.current,
        {
          opacity: 1,
          y: 0,
        },
        {
          duration: 0.7,
          delay: 1,
        },
      );
    } else {
      heroAnimate(heroScope.current, {
        opacity: 0,
      });
      animate(
        text1.current,
        {
          opacity: 0,
          y: -windowHeight,
        },
        {
          duration: 1,
        },
      );
      animate(
        text2.current,
        {
          opacity: 0,
          y: -windowHeight,
        },
        {
          duration: 1,
        },
      );
      animate(text3.current, {
        opacity: 0,
        y: -windowHeight,
      });
    }
  }, [isHeroInView]);

  return (
    <div
      ref={heroScope}
      className="flex flex-col items-center justify-center min-h-[90vh] bg-[url('/hero-bg.jpg')] bg-center bg-cover "
    >
      <h1
        ref={text1}
        className="text-white text-5xl md:text-[6rem] font-bold  "
      >
        TechStarHub
      </h1>
      <h4
        ref={text2}
        className="text-white text-2xl md:text-[2rem] font-bold mt-4 "
      >
        Learn | Build | Share | Connect
      </h4>
      <div className="flex gap-4 mt-4">
        <button
          ref={text3}
          className="group rounded-full border-white border-[2px] px-6 py-2 hover:bg-white shadow "
        >
          <Typography
            variant="h6"
            className="text-white font-bold group-hover:text-black transition"
          >
            Join Us
          </Typography>
        </button>
      </div>
    </div>
  );
}
