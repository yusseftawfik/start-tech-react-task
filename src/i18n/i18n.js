import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import translationsEN from "./en/en.json";
import translationsAR from "./ar/ar.json";

const resources = {
  en: {
    translation: translationsEN,
  },
  ar: {
    translation: translationsAR,
  },
};

const fallbackLng = ["en"];
const availableLanguages = ["en", "ar"];
const savedLanguage = localStorage.getItem("i18nextLng");

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    lng: savedLanguage || "en",
    resources,
    fallbackLng,
    detection: {
      checkWhitelist: true,
      order: ["localStorage", "htmlTag", "cookie"],
      caches: ["localStorage", "cookie"],
    },
    whitelist: availableLanguages,
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
