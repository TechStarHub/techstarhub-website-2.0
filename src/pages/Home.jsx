import React, { useEffect } from 'react';
import BaseLayout from '../layouts/base';
import Hero from '../components/Home/Hero';
import Cards from '../components/Home/Cards';
import Learn from '../components/Home/Learn';
import OpenSource from '../components/Home/OpenSource';

export default function Home() {
  return (
    <BaseLayout>
      <Hero />
      <Cards />
      <Learn />
      <OpenSource />
    </BaseLayout>
  );
}
