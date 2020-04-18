/** @jsx jsx */
import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { Button, Flex, useColorMode, jsx } from 'theme-ui';

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
    <Flex
      sx={{
        justifyContent: 'space-between',
        alignItems: 'center',
        my: 4,
      }}
    >
      <Link to="/" sx={{ textDecoration: 'none', color: 'inherit' }}>
        {siteMetadata.title}
      </Link>
      <Button onClick={toggleColorMode} sx={{ py: 1, fontFamily: 'body' }}>
        {colorMode === 'default' ? 'Dark' : 'Light'}
      </Button>
    </Flex>
  );
};

export default Header;
