'use client';
import CookiesProvider from '@sections/CookiesProvider';
import PriceList from '@sections/PriceList';
import Gallery from '@sections/Gallery';
import Hashtags from '@sections/Hashtags';
import Hero from '@sections/Hero';
import PersonalTrainer from '@sections/PersonalTrainer';
import Gym from '@sections/Gym';
import Footer from '@layout/Footer';

/**
 * Homepage component, displays all the main sections of the website.
 * It uses the CookiesProvider to manage the cookies of the website.
 */
function Homepage() {
  return (
    <>
      <Hero />
      <Gym />
      <Hashtags />
      <PersonalTrainer />
      <Gallery />
      <PriceList />
    </>
  );
}

export default Homepage;
