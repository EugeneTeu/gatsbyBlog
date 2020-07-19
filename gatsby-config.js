module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {
        
        prismPreset: `dracula`,
      },
    },
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `Teu Dev`,
    author: `Eugene Teu`,
    description: `My site description...`,
    social: [
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/eugeneteu/`,
      },
      {
        name: `github`,
        url: `https://github.com/EugeneTeu`,
      },
    ],
  },
}
