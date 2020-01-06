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
          links {
            github
            linkedin
          }
        }
      }
    }
  `);

  return (
    <Helmet
      title={siteMetadata.title}
      meta={[{ name: 'description', content: siteMetadata.description }]}
    />
  );
};

export default Header;
