import PriceList from '@sections/PriceList';
import Gallery from '@sections/Gallery';
import Hashtags from '@sections/Hashtags';
import Hero from '@sections/Hero';
import PersonalTrainer from '@sections/PersonalTrainer';
import Gym from '@sections/Gym';
import { useTranslations } from 'next-intl';
/**
 * Homepage component, displays all the main sections of the website.
 * It uses the CookiesProvider to manage the cookies of the website.
 */
export default function Homepage() {
  const t = useTranslations('');
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
