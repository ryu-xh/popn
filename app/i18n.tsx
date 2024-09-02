import i18n from "i18next";
import {initReactI18next} from "react-i18next";

import ja from "../public/locales/ja.json";
import ko from "../public/locales/ko.json";

const resources = {
  ko: {
    translation: ko,
  },
  ja: {
    translation: ja,
  },
};

const userLanguage = typeof window !== "undefined" ? window.localStorage.getItem("language") || window.navigator.language : "ko";

i18n.use(initReactI18next).init({
  resources,
  lng: userLanguage,
  fallbackLng: "ko",
  interpolation: {
    escapeValue: false,
  },
});

if (typeof document !== "undefined") {
  document.documentElement.lang = i18n.language;
}

export default i18n;
