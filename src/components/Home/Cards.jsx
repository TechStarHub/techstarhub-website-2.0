import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useAnimate, useInView, animate } from 'framer-motion';

export default function Cards() {
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  const mode = useSelector((state) => state.mode.mode);
  const isDark = mode === 'dark' ? true : false;

  // card section animation
  const [cardScope, cardAnimate] = useAnimate();
  const isInViewCard = useInView(cardScope);

  const card1 = useRef(null);
  const card2 = useRef(null);
  const card3 = useRef(null);

  useEffect(() => {
    if (isInViewCard) {
      cardAnimate(
        cardScope.current,
        {
          opacity: 1,
        },
        {
          duration: 0.7,
        },
      );
      animate(
        card1.current,
        {
          opacity: 1,
          x: 0,
        },
        {
          duration: 1,
        },
      );
      animate(
        card2.current,
        {
          opacity: 1,
          x: 0,
        },
        {
          duration: 1,
        },
      );
      animate(
        card3.current,
        {
          opacity: 1,
          x: 0,
        },
        {
          duration: 1,
        },
      );
    } else {
      cardAnimate(cardScope.current, {
        opacity: 0,
      });
      animate(card1.current, {
        opacity: 0,
        x: -windowWidth,
      });
      animate(card2.current, {
        opacity: 0,
        x: windowWidth,
      });
      animate(card3.current, {
        opacity: 0,
        x: -windowWidth,
      });
    }
  }, [isInViewCard]);

  return (
    <div ref={cardScope} className="w-full flex min-h-screen relative ">
      {/* Background colors for the section start */}
      <div className="absolute flex -z-20 top-0 left-0 w-full h-full">
        <div
          className=" w-1/2 h-full"
          style={{ backgroundColor: isDark ? '#272829' : '#F3EEEA' }}
        ></div>
        <div
          className=" w-1/2 h-full"
          style={{ backgroundColor: isDark ? '#61677A' : '#EBE3D5' }}
        ></div>
      </div>
      {/* Background colors for the section end */}

      {/* Content for the section start */}
      <div className="flex flex-col gap-[4rem] justify-center items-center my-20">
        <div
          ref={card1}
          className=" text-slate-300 p-6 rounded-lg w-3/4 md:w-1/2 md:relative md:-left-20 shadow-lg "
          style={{
            backgroundColor: isDark ? '#1F4068' : '#F5F7F8',
            color: isDark ? '#ffffff' : '#000000',
          }}
        >
          <h3 className=" text-4xl font-bold ">What We Do</h3>
          <h6 className=" text-2xl mt-4 ">
            We are a community of developers, designers, and tech enthusiasts
            who are passionate about technology and its impact on the world.
          </h6>
        </div>
        <div
          ref={card2}
          className=" text-slate-300 p-6 rounded-lg w-3/4 md:w-1/2 md:relative md:left-20 shadow-lg"
          style={{
            backgroundColor: isDark ? '#221F3B' : '#D0D4CA',
            color: isDark ? '#ffffff' : '#000000',
          }}
        >
          <h3 className=" text-4xl font-bold ">Our Purpose</h3>
          <h6 className=" text-2xl mt-4 ">
            We are a community of developers, designers, and tech enthusiasts
            who are passionate about technology and its impact on the world.
          </h6>
        </div>
        <div
          ref={card3}
          className=" text-slate-300 p-6 rounded-lg w-3/4 md:w-1/2 md:relative md:-left-20 shadow-lg "
          style={{
            backgroundColor: isDark ? '#1F4068' : '#F5F7F8',
            color: isDark ? '#ffffff' : '#000000',
          }}
        >
          <h3 className=" text-4xl font-bold ">Our Future </h3>
          <h6 className=" text-2xl mt-4 ">
            We are a community of developers, designers, and tech enthusiasts
            who are passionate about technology and its impact on the world.
          </h6>
        </div>
      </div>
      {/* Content for the section end */}
    </div>
  );
}
