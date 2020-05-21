// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

// Import main css
import '~/assets/style/index.scss'

import DefaultLayout from "~/layouts/Default.vue";
import "prismjs/themes/prism.css";

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);
  head.script.push({
    src:
      "//downloads.mailchimp.com/js/signup-forms/popup/unique-methods/embed.js",
  });
  head.script.push({ src: "./js/newsletter.js" });
}
