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
        Sustainable <Emoji label="Tree" symbol="🌳" /> <strong>accessible</strong>{' '}
        <strong>inclusive</strong> impactful <Emoji label="Squid" symbol="🦑" />{' '}
        <strong>shared</strong> equal <strong>open</strong> <Emoji label="Avocado" symbol="🥑" />
      </Text>
    </Grid>
    <Grid columns={[1, null, 2]}>
      <Box>
        <Box sx={{ mb: 3 }}>
          <Text mb={3} as="p">
            As a full-stack developer, I am dedicated to building meaningful and sustainable web
            projects &mdash; from helping charities reach their audiences to providing tools for
            aspiring musicians.
          </Text>
          <Text mb={3} as="p">
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
            are some of the tools I have enjoyed working with over the last few years. This site was
            built with{' '}
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
