/** @jsx jsx */
import React from 'react';
import { Flex, Text, jsx } from 'theme-ui';
import Emoji from '../components/Emoji';

const Footer: React.FC = () => (
  <Flex sx={{ justifyContent: 'flex-end', py: 4 }}>
    <Text>
      <Emoji label="Detective" symbol="🕵🏻‍♂️" /> Find me on{' '}
      <a sx={{ color: 'inherit' }} href="https://github.com/josephrace">
        Github
      </a>
      ,{' '}
      <a sx={{ color: 'inherit' }} href="https://stackoverflow.com/users/1391229/josephrace">
        Stack Overflow
      </a>{' '}
      or{' '}
      <a sx={{ color: 'inherit' }} href="https://www.linkedin.com/in/josephrace">
        LinkedIn
      </a>{' '}
    </Text>
  </Flex>
);

export default Footer;
