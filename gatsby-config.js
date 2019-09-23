module.exports = {
  siteMetadata: {
    title: 'Joseph Race',
    description: 'Web Developer specialising in Front-End Development & JavaScript Full-Stack',
    links: {
      github: 'https://github.com/josephrace',
      linkedin: 'https://www.linkedin.com/in/josephrace',
    },
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Roboto`]
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-38769385-1',
        respectDNT: true,
      },
    },
  ],
};
