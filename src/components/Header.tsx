import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Text, Flex, useColorMode } from 'theme-ui';
import Link from './Link';

const Header: React.FC = () => {
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

  const [colorMode, setColorMode] = useColorMode();

  const toggleColorMode = () => {
    if (colorMode === 'default') {
      setColorMode('dark');
    } else {
      setColorMode('default');
    }
  };

  return (
    <Flex sx={{ justifyContent: 'space-between', mt: 4, mb: 5 }}>
      <Link to="/" sx={{ textDecoration: 'none' }}>
        {siteMetadata.title} - {siteMetadata.description}
      </Link>
      <Text onClick={toggleColorMode}>
        {colorMode === 'default' ? 'Dark' : 'Light'}
      </Text>
    </Flex>
  );
};

export default Header;
