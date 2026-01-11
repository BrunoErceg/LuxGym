'use client';
import PriceList from '@/components/sections/PriceList';
import CookiesProvider from '@/components/sections/CookiesProvider';
import Footer from '@/components/layout/Footer';
import Gallery from '@/components/sections/Gallery';
import Hashtags from '@/components/sections/Hashtags';
import Hero from '@/components/sections/Hero';
import PersonalTrainer from '@/components/sections/PersonalTrainer';
import Gym from '@/components/sections/Gym';

function Homepage() {
  return (
    <CookiesProvider>
      <Hero />
      <Gym />
      <Hashtags />
      <PersonalTrainer />
      <Gallery />
      <PriceList />
      <Footer />
    </CookiesProvider>
  );
}

export default Homepage;
