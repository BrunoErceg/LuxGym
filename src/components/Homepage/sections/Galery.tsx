import { PhotoProvider } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import GaleryImg from "../../ui/GaleryImg";
import Section from "../../layout/Section";
import GaleryGrid from "../../layout/GaleryGrid";
import { useTranslation } from "../../../../node_modules/react-i18next";

function Galery() {
  const { t } = useTranslation();
  return (
    <Section padding="none" id="galery">
      <PhotoProvider>
        <GaleryGrid>
          <GaleryImg
            src="\src\assets\images\bicikla.jpg"
            className="col-start-2 row-start-4 lg:col-start-1 lg:row-start-1"
            alt={t("galery.bikeImgAlt")}
          />
          <GaleryImg
            src="\src\assets\images\prostor-teretane-unutarnji.jpg"
            className="col-span-2"
            alt={t("galery.gymImgAlt")}
          />
          <GaleryImg
            src="\src\assets\images\lat-pulldown-privatni-trening.jpg"
            alt={t("galery.personalTreinerImgAlt")}
          />
          <GaleryImg
            src="\src\assets\images\lat-pulldown.jpg"
            alt={t("galery.latpulldownImgAlt")}
          />

          <GaleryImg
            src="\src\assets\images\recepcija-teretane-2.jpg"
            className="col-span-2"
            alt={t("galery.receptionImgAlt")}
          />
          <GaleryImg
            src="\src\assets\images\svlacionica.jpg"
            alt={t("galery.lockerRoomImgAlt")}
          />
          <GaleryImg
            src="\src\assets\images\prostor-teretane-vanjski.jpg"
            className="col-span-2"
            alt={t("galery.gymRoomImgAlt")}
          />
        </GaleryGrid>
      </PhotoProvider>
    </Section>
  );
}

export default Galery;
