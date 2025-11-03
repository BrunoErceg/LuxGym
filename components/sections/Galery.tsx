import { PhotoProvider } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import bicikla from "@images/bicikla.jpg";
import gymInnerRoom from "@images/prostor-teretane-unutarnji.jpg";
import latpulldownTrening from "@images/lat-pulldown-privatni-trening.jpg";
import latpulldownMachine from "@images/lat-pulldown.jpg";
import recepcion from "@images/recepcija-teretane-2.jpg";
import lockerRoom from "@images/svlacionica.jpg";
import gymOuterRoom from "@images/prostor-teretane-vanjski.jpg";
import { useTranslation } from "react-i18next";
import GaleryImg from "@ui/GaleryImg";
import Section from "@layout/Section";
import GaleryGrid from "@layout/GaleryGrid";

function Galery() {
  const { t } = useTranslation();
  return (
    <Section padding="none" id="galery">
      <PhotoProvider>
        <GaleryGrid>
          <GaleryImg
            src={bicikla.src}
            className="col-start-2 row-start-4 lg:col-start-1 lg:row-start-1"
            alt={t("galery.bikeImgAlt")}
          />
          <GaleryImg
            src={gymInnerRoom.src}
            className="col-span-2"
            alt={t("galery.gymImgAlt")}
          />
          <GaleryImg
            src={latpulldownTrening.src}
            alt={t("galery.personalTreinerImgAlt")}
          />
          <GaleryImg
            src={latpulldownMachine.src}
            alt={t("galery.latpulldownImgAlt")}
          />

          <GaleryImg
            src={recepcion.src}
            className="col-span-2"
            alt={t("galery.receptionImgAlt")}
          />
          <GaleryImg src={lockerRoom.src} alt={t("galery.lockerRoomImgAlt")} />
          <GaleryImg
            src={gymOuterRoom.src}
            className="col-span-2"
            alt={t("galery.gymRoomImgAlt")}
          />
        </GaleryGrid>
      </PhotoProvider>
    </Section>
  );
}

export default Galery;
