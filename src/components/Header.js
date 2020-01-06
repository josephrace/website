import React from 'react';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const Header = () => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  console.log(siteMetadata);

  return (
    <Helmet
      title={siteMetadata.title}
      meta={[{ name: 'description', content: siteMetadata.description }]}
    />
  );
};

export default Header;
