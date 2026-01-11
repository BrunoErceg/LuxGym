'use client';
import { RefContext } from '@context/context.tsx';
import PriceList from '@/components/sections/PriceList';
import CookiesProvider from '@/components/sections/CookiesProvider';
import Footer from '@/components/layout/Footer';
import Gallery from '@/components/sections/Gallery';
import Hashtags from '@/components/sections/Hashtags';
import Hero from '@/components/sections/Hero';
import PersonalTrainer from '@/components/sections/PersonalTrainer';
import Gym from '@/components/sections/Gym';
import InViewAnimation from '@/components/animations/InViewAnimation';
import { delay, motion } from 'framer-motion';

function Homepage() {
  const refSections = {};
  return (
    <CookiesProvider>
      <RefContext.Provider value={refSections}>
        <Hero />
        <Gym />
        <Hashtags />
        <PersonalTrainer />
        <Gallery />
        <PriceList />
        <Footer />
      </RefContext.Provider>
    </CookiesProvider>
  );
}

export default Homepage;
