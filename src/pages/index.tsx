/** @jsx jsx */
import React from 'react';
import { Text, Box, Grid, jsx } from 'theme-ui';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Emoji from '../components/Emoji';

const IndexPage: React.FC = () => (
  <Layout>
    <SEO title="Full-Stack Developer" />
    <Grid columns={[1, null, null, '4fr 1fr']} mb={5}>
      <Text
        sx={{
          fontSize: [6, 7, null, 8],
          lineHeight: 'heading',
          fontFamily: 'heading',
        }}
      >
        Usability <strong>accessibility</strong>{' '}
        <Emoji label="Avocado" symbol="🥑" /> <strong>inclusivity</strong>{' '}
        <Emoji label="Wizard" symbol="🧙‍♂️" /> innovation impact{' '}
        <strong>sharing</strong> <Emoji label="Squid" symbol="🦑" /> equality{' '}
        <strong>openness</strong>
      </Text>
    </Grid>
    <Grid columns={[1, null, 2]}>
      <Box>
        <Box sx={{ mb: 3 }}>
          <Text mb={3}>
            As a full-stack developer I am passionate about building websites
            and applications that have a meaningful impact on people's lives -
            from helping charities reach their audiences to providing tools for
            aspiring musicians.
          </Text>
          <Text mb={3}>
            <OutboundLink sx={{ color: 'inherit' }} href="https://reactjs.org/">
              React
            </OutboundLink>
            ,{' '}
            <OutboundLink
              sx={{ color: 'inherit' }}
              href="https://www.typescriptlang.org/"
            >
              TypeScript
            </OutboundLink>{' '}
            &amp;{' '}
            <OutboundLink sx={{ color: 'inherit' }} href="https://graphql.org/">
              GraphQL
            </OutboundLink>{' '}
            are some of the things I have enjoyed working with over the last few
            years. This site was built with{' '}
            <OutboundLink
              sx={{ color: 'inherit' }}
              href="https://www.gatsbyjs.org/"
            >
              Gatsby
            </OutboundLink>{' '}
            using{' '}
            <OutboundLink
              sx={{ color: 'inherit' }}
              href="https://theme-ui.com/"
            >
              Theme UI
            </OutboundLink>{' '}
            and is hosted on{' '}
            <OutboundLink
              sx={{ color: 'inherit' }}
              href="https://www.netlify.com/"
            >
              Netlify
            </OutboundLink>
            .
          </Text>
        </Box>
      </Box>
    </Grid>
  </Layout>
);

export default IndexPage;