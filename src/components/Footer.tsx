/** @jsx jsx */
import React from 'react';
import { Flex, Text, jsx } from 'theme-ui';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import Emoji from '../components/Emoji';

const Footer: React.FC = () => (
  <Flex sx={{ justifyContent: 'flex-end', py: 4 }}>
    <Text>
      <Emoji label="Detective" symbol="🕵🏻‍♂️" /> Find me on{' '}
      <OutboundLink
        sx={{ color: 'inherit' }}
        href="https://github.com/josephrace"
      >
        Github
      </OutboundLink>
      ,{' '}
      <OutboundLink
        sx={{ color: 'inherit' }}
        href="https://stackoverflow.com/users/1391229/josephrace"
      >
        Stack Overflow
      </OutboundLink>{' '}
      or{' '}
      <OutboundLink
        sx={{ color: 'inherit' }}
        href="https://www.linkedin.com/in/josephrace"
      >
        LinkedIn
      </OutboundLink>{' '}
    </Text>
  </Flex>
);

export default Footer;
