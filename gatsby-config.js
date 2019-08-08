const path = require('path')

module.exports = {
  siteMetadata: {
    author: `Dustin Schau`,
    description: `An excellent blog made at MidwestJS`,
    // Used for social links in the root footer
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/schaudustin`,
      },
      {
        name: `github`,
        url: `https://github.com/dschau`,
      },
    ],
    title: `MidwestJS Blog`
  },
  plugins: [
    {
      resolve: 'gatsby-theme-blog',
      options: {
        basePath: `/blog/`,
        contentPath: `content`
      }
    }
  ]
}
