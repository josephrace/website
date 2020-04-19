module.exports = {
  siteMetadata: {
    title: 'Joseph Race',
    description:
      "Full-Stack Developer passionate about building websites and applications that have a meaningful impact on people's lives",
    author: 'Joseph Race',
  },
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-theme-ui',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: ['Work Sans', 'PT Serif'],
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-38769385-1',
        respectDNT: true,
      },
    },
  ],
};
