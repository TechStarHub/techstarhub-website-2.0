import React, { useEffect } from 'react';
import { Typography, Button } from '@mui/material';
import { useAnimate, useInView, motion } from 'framer-motion';

export default function Hero() {
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  // hero section animation
  const [heroScope, heroAnimate] = useAnimate();
  const isHeroInView = useInView(heroScope);

  useEffect(() => {
    if (isHeroInView) {
      heroAnimate(
        heroScope.current,
        {
          opacity: 1,
        },
        {
          duration: 1,
        },
      );
    } else {
      heroAnimate(heroScope.current, {
        opacity: 0,
      });
    }
  }, [isHeroInView]);
  return (
    <div
      ref={heroScope}
      className="flex flex-col items-center justify-center min-h-[90vh] bg-[url('/hero-bg.jpg')] bg-center bg-cover "
    >
      <motion.h1
        initial={{ opacity: 0, y: -windowHeight }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5, ease: 'easeInOut' }}
        className="text-white text-5xl md:text-[6rem] font-bold  "
      >
        TechStarHub
      </motion.h1>
      <motion.h4
        initial={{ opacity: 0, y: -windowHeight }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.7, ease: 'easeInOut' }}
        className="text-white text-2xl md:text-[2rem] font-bold mt-4 "
      >
        Learn | Build | Share | Connect
      </motion.h4>
      <div className="flex gap-4 mt-4">
        <motion.button
          initial={{ opacity: 0, y: -windowHeight }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1, ease: 'easeInOut' }}
          className="group rounded-full border-white border-[2px] px-6 py-2 hover:bg-white shadow "
        >
          <Typography
            variant="h6"
            className="text-white font-bold group-hover:text-black transition"
          >
            Join Us
          </Typography>
        </motion.button>
      </div>
    </div>
  );
}
