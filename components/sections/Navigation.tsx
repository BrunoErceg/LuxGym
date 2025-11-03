import { useContext } from "react";
import {
  faGoogle,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { useTranslation } from "react-i18next";
import { changeLanguage } from "i18next";
import "@utils/i18n/i18n";
import { SOCIAL_LINKS } from "@utils/constants";
import { RefContext } from "@context/context";
import Container from "@layout/Container";
import Stack from "@layout/Stack";
import Flex from "@layout/Flex";
import NavIcon from "@ui/NavIcon";
import ScrollTo from "@ui/ScrollTo";
import Animated from "@animations/Animate";

function Navigation() {
  const sectionRef = useContext(RefContext);
  const { t } = useTranslation();
  return (
    <Animated direction="none" margin={"0px"} delay={0.3}>
      <Container>
        <Flex justify="between" align="center" className="py-6">
          {/* -- Logo -- */}
          <p className="font-gilory-bold text-3xl">LUX GYM</p>

          {/* -- Scroll Navigation -- */}
          <Stack gap="lg" className="hidden lg:flex">
            <ScrollTo section={sectionRef.gym}>{t("navigation.gym")}</ScrollTo>
            <ScrollTo section={sectionRef.personalTrainer}>
              {t("navigation.personalTrainer")}
            </ScrollTo>
            <ScrollTo section={sectionRef.galery}>
              {t("navigation.gallery")}
            </ScrollTo>
            <ScrollTo section={sectionRef.priceList}>
              {t("navigation.priceList")}
            </ScrollTo>
          </Stack>

          {/* -- Social Icons -- */}
          <Stack>
            <NavIcon link={SOCIAL_LINKS.instagram} icon={faInstagram} />
            <NavIcon link={SOCIAL_LINKS.whatsapp} icon={faWhatsapp} />
            <NavIcon
              link={SOCIAL_LINKS.google}
              icon={faGoogle}
              className="scale-90"
            />
            <p onClick={() => changeLanguage("hr")}>HR</p>
            <p onClick={() => changeLanguage("en")}>Eng</p>
          </Stack>
        </Flex>
      </Container>
    </Animated>
  );
}

export default Navigation;
