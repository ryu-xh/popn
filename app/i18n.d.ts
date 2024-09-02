import "react-i18next";

import ja from "./translation/ja.json";
import ko from "./translation/ko.json";

declare module "react-i18next" {
  interface Resources {
    ja: typeof ja;
    ko: typeof ko;
  }
}

declare module "react-i18next" {
  interface CustomTypeOptions {
    defaultNS: "en";
    resources: {
      ja: typeof ja;
      ko: typeof ko;
    };
  }
}
