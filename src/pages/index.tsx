/** @jsx jsx */
import React from 'react';
import { Text, Box, Grid, jsx } from 'theme-ui';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Emoji from '../components/Emoji';

const IndexPage: React.FC = () => (
  <Layout>
    <SEO title="Full-Stack Developer" />
    <Grid columns={[1, null, null, '4fr 1fr']} mb={[4, 5]}>
      <Text
        sx={{
          fontSize: [5, 6, 7, 8],
          lineHeight: 'heading',
          fontFamily: 'heading',
        }}
      >
        Sustainable <strong>accessible</strong> <Emoji label="Avocado" symbol="🥑" />{' '}
        <strong>inclusive</strong> <Emoji label="Wizard" symbol="🧙‍♂️" /> impactful{' '}
        <strong>shared</strong> <Emoji label="Squid" symbol="🦑" /> equal <strong>open</strong>
      </Text>
    </Grid>
    <Grid columns={[1, null, 2]}>
      <Box>
        <Box sx={{ mb: 3 }}>
          <Text mb={3}>
            As a full-stack developer, I am passionate about working on meaningful and sustainable
            web projects &mdash; from helping charities reach their audiences to providing tools for
            aspiring musicians.
          </Text>
          <Text mb={3}>
            <a sx={{ color: 'inherit' }} href="https://reactjs.org/">
              React
            </a>
            ,{' '}
            <a sx={{ color: 'inherit' }} href="https://www.typescriptlang.org/">
              TypeScript
            </a>{' '}
            &amp;{' '}
            <a sx={{ color: 'inherit' }} href="https://graphql.org/">
              GraphQL
            </a>{' '}
            are some of the things I have enjoyed working with over the last few years. This site
            was built with{' '}
            <a sx={{ color: 'inherit' }} href="https://www.gatsbyjs.org/">
              Gatsby
            </a>{' '}
            using{' '}
            <a sx={{ color: 'inherit' }} href="https://theme-ui.com/">
              Theme UI
            </a>{' '}
            and is hosted on{' '}
            <a sx={{ color: 'inherit' }} href="https://www.netlify.com/">
              Netlify
            </a>
            .
          </Text>
        </Box>
      </Box>
    </Grid>
  </Layout>
);

export default IndexPage;
