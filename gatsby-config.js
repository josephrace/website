module.exports = {
  siteMetadata: {
    title: 'Joseph Race',
    description:
      'Full-Stack Developer dedicated to working on meaningful and sustainable web projects.',
  },
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-theme-ui',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: ['PT Serif:400'],
      },
    },
  ],
};
