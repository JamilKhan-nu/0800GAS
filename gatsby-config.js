const path = require("path")

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "My Portfolio",
    author: "Jamil Khan",
    logo: "JKhan",
  },
  plugins: [
    `gatsby-plugin-netlify`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    
    `gatsby-plugin-image`,
    
  ],
}
