module.exports = {
  siteMetadata: {
    title: "Photo Gallery of YNU",
    description: "",
    author: "liudonghua123",
    social: [
      {
        name: "Source",
        url: "https://github.com/ynu/ynu-gallery",
      },
      {
        name: "YNU",
        url: "https://www.ynu.edu.cn/",
      },
      {
        name: "GitHub",
        url: "https://github.com/ynu",
      },
    ],
  },
  plugins: [
    "gatsby-theme-gallery",
    // {
    //   resolve: "gatsby-theme-gallery",
    //   options: {
    //     basePath: "/gallery",
    //   },
    // },
    "gatsby-plugin-typescript",
    "gatsby-plugin-emotion",
  ],
};
