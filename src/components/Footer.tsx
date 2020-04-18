import React from 'react';
import { Flex, Text } from 'theme-ui';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

const Footer: React.FC = () => (
  <Flex sx={{ justifyContent: 'flex-end', py: 4 }}>
    <Text>
      Find me on{' '}
      <OutboundLink href="https://github.com/josephrace">Github</OutboundLink>{' '}
      or{' '}
      <OutboundLink href="https://www.linkedin.com/in/josephrace">
        LinkedIn
      </OutboundLink>
    </Text>
  </Flex>
);

export default Footer;
