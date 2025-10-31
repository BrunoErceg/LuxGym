import { useEffect } from "react";
import { RefContext } from "../../context/context.tsx";
import PriceList from "./sections/PriceList.tsx";
import CookiesProvider from "./sections/CookiesProvider.tsx";
import Footer from "./sections/Footer.tsx";
import Galery from "./sections/Galery.tsx";
import Hashtags from "./sections/Hashtags.tsx";
import Hero from "./sections/Hero.tsx";
import PersonalTrainer from "./sections/PersonalTrainer.tsx";
import Gym from "./sections/Gym.tsx";

function Homepage() {
  useEffect(() => {
    document.title = "Lux Gym Šibenik - Najbolja teretana u gradu";
  }, []);

  const refSections = {};
  return (
    <CookiesProvider>
      <RefContext.Provider value={refSections}>
        <Hero />
        <Gym />
        <Hashtags />
        <PersonalTrainer />
        <Galery />
        <PriceList />
        <Footer />
      </RefContext.Provider>
    </CookiesProvider>
  );
}

export default Homepage;
