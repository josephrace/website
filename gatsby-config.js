module.exports = {
  siteMetadata: {
    title: 'Joseph Race',
    description: 'Full Stack web developer',
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
        fonts: [`Zilla Slab\:300,400`],
      },
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
