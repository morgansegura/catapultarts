require("@mdi/font/css/materialdesignicons.min.css")

require("aos/dist/aos.js")
require("aos/dist/aos.css")

require("prismjs/themes/prism-coy.css")
require("prismjs/prism.js")

module.exports.onRouteUpdate = (location) => {
    if (location.hash) {
        setTimeout(() => {
            document.querySelector(`${location.hash}`).scrollIntoView();
        }, 0);
    }
};