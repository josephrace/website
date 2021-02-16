module.exports = {
  siteMetadata: {
    title: 'Joe Race',
    description:
      "Full-Stack Developer passionate about building websites and applications that have a meaningful impact on people's lives",
    author: 'Joe Race',
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
