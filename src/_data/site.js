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
  url: "https://mf-blogstarter.netlify.app", // Don't end with a slash /
  brandName: "MF", // for copyright and legal page

  author: {
    name: "Marc Filleul", // For posts meta and Open Graph meta (FB and Twitter)
    email: "marc@mfmail.fr",
    github: "https://github.com/marcfilleul",
    twitter: "https://twitter.com/marcfilleul",
  },

  meta_data: {
    theme_color: "#ffffff", // used in Chrome, Firefox OS and Opera
    default_social_image: "/assets/img/featured_image.png", // For Open Graph meta
    locale: "en_US", // For Open Graph meta
    twitter_username: "@marcfilleul", // For Twitter Open Graph meta
  },
};
