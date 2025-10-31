import Card from "../../ui/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Vrijeme from "../../../assets/icons/vrijeme.png";
import Oprema from "../../../assets/icons/oprema.png";
import Organizacija from "../../../assets/icons/organizacija.png";
import Atmosfera from "../../../assets/icons/atmosfera.png";
import Section from "../../layout/Section";
import Container from "../../layout/Container";
import TextGroup from "../../layout/TextGroup";
import Columns from "../../layout/Columns";
import { useTranslation } from "../../../../node_modules/react-i18next";

function Gym() {
  const { t } = useTranslation();

  return (
    <Section padding="lg" id="gym">
      <Container>
        <TextGroup>
          <h5>{t("gym.subtitle")}</h5>
          <h2>
            {t("gym.title")}{" "}
            <FontAwesomeIcon icon={faHeart} className="text-primary" />
          </h2>
        </TextGroup>

        <Columns sm={1} md={2} lg={4} gap="md">
          <Card
            title={t("gym.openingHours.title")}
            description={t("gym.openingHours.description")}
            icon={Vrijeme}
            animationDelay={0}
          />
          <Card
            title={t("gym.equipment.title")}
            description={t("gym.equipment.description")}
            icon={Oprema}
            animationDelay={0.2}
          />
          <Card
            title={t("gym.capacity.title")}
            description={t("gym.capacity.description")}
            icon={Organizacija}
            animationDelay={0.4}
          />
          <Card
            title={t("gym.atmosphere.title")}
            description={t("gym.atmosphere.description")}
            icon={Atmosfera}
            animationDelay={0.6}
          />
        </Columns>
      </Container>
    </Section>
  );
}

export default Gym;
