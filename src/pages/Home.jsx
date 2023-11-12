import React, { useEffect } from 'react';
import BaseLayout from '../layouts/base';
import { useAnimate, useInView, motion } from 'framer-motion';
import Hero from '../components/Home/Hero';
import Cards from '../components/Home/Cards';

export default function Home() {
  return (
    <BaseLayout>
      <Hero />
      <Cards />
    </BaseLayout>
  );
}
