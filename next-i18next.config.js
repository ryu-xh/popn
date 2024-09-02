const path = require('path');

module.exports = {
    i18n: {
        defaultLocale: "ko",
        locales: ["ja", "ko"],
        localeDetection:true,
        localePath: path.resolve('./public/locales'),
    },
};
