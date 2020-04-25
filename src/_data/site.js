/**
  This file can be accessed using: {{ site.title }}
*/

const year = new Date().getFullYear();

module.exports = {
  annee: `${year}`,
  allowDarkMode: true,
  lang: "en", // for html tag
  title: "MF Blog Starter",
  description: "Eleventy + Tailwind CSS blog starter",
  url: "https://mf-blogstarter.netlify.app", // don't end with a slash /
  brandName: "MF", // for copyright and legal page

  author: {
    name: "Marc Filleul", // for posts meta and Open Graph meta (FB and Twitter)
    email: "marc@mfmail.fr", // used in legal page
    github: "https://github.com/marcfilleul", // used in footer
    twitter: "https://twitter.com/marcfilleul", // used in footer
  },

  meta_data: {
    theme_color: "#ffffff", // used in Chrome, Firefox OS and Opera
    default_social_image: "/assets/img/featured_image.png", // for Open Graph meta
    locale: "en_US", // for Open Graph meta
    twitter_username: "@marcfilleul", // for Twitter Open Graph meta
  },
};
