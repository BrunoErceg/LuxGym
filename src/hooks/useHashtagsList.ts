import { useTranslation } from "../../node_modules/react-i18next";

export default function useHashtagsList() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  const hashtags = [
    currentYear,
    "Šibenik",
    t("hashtags.gym"),
    "fitness",
    "legday",
    t("hashtags.new"),
    t("hashtags.yoga"),
    t("hashtags.energy"),
    t("hashtags.strength"),
    t("hashtags.activity"),
    t("hashtags.cardio"),
    t("hashtags.running"),
  ];

  return [...hashtags].sort(() => Math.random() - 0.5);
}
