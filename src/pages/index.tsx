import React from 'react';
import { Text, Box, Grid, Heading } from 'theme-ui';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const IndexPage: React.FC = () => (
  <Layout>
    <SEO title="Vegan fusce" />
    <Grid columns={[1, null, null, '4fr 1fr']} mb={5}>
      <Text
        sx={{
          fontSize: [6, 7, null, 8],
          lineHeight: 'heading',
          fontFamily: 'heading',
        }}
      >
        Usable <strong>accessible</strong> 🥑 simplify <strong>impact</strong>{' '}
        💥 awareness collaborate equal open 📦 share explore{' '}
        <strong>inclusive</strong>
      </Text>
    </Grid>
    <Grid columns={[1, null, null, 2]}>
      <Box>
        <Heading mb={4}>Vegan fusce</Heading>
        <Text mb={4} sx={{ lineHeight: 'body' }}>
          Elementum porta porttitor nec leo amet quam artisan proin ornare amet
          vitae arcu commodo urna artisan odio undefined. Eros morbi risus
          bibendum ipsum you probably haven't heard of them vitae pellentesque
          quam gravida bibendum arcu vulputate bicycle nulla amet.
        </Text>
        <Text mb={4} sx={{ lineHeight: 'body' }}>
          Eros morbi risus bibendum ipsum you probably haven't heard of them
          vitae pellentesque quam gravida bibendum arcu vulputate bicycle nulla
          amet.
        </Text>
        <Text mb={4} sx={{ lineHeight: 'body' }}>
          Elementum porta porttitor nec leo amet quam artisan proin ornare amet
          vitae arcu commodo urna artisan odio undefined. Eros morbi risus
          bibendum ipsum you probably haven't heard of them vitae pellentesque
          quam gravida bibendum arcu vulputate bicycle nulla amet.
        </Text>
      </Box>
    </Grid>
  </Layout>
);

export default IndexPage;
