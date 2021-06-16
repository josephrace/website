/** @jsxImportSource theme-ui */
import { Text, Box, Grid } from 'theme-ui';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Emoji from '../components/Emoji';

const IndexPage: React.FC = () => (
  <Layout>
    <SEO title="Full-Stack Developer" />
    <Grid columns={[1, null, null, '4fr 2fr']} mb={[4, 5]}>
      <Text
        sx={{
          fontSize: [5, 6, 7, 8],
          lineHeight: 'heading',
          fontFamily: 'heading',
        }}
      >
        Sustainable <Emoji label="Tree" symbol="🌳" /> <strong>accessible</strong>{' '}
        <strong>inclusive</strong> <Emoji label="Squid" symbol="🦑" /> impactful equal{' '}
        <strong>open</strong> <Emoji label="Avocado" symbol="🥑" />
      </Text>
    </Grid>
    <Grid columns={[1, null, 2]}>
      <Box>
        <Box sx={{ mb: 3 }}>
          <Text mb={3} as="p">
            Full-Stack Developer driven by working on projects with purpose — from helping charities
            reach their audiences to providing tools for aspiring musicians.
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
            and{' '}
            <a sx={{ color: 'inherit' }} href="https://www.serverless.com/">
              Serverless
            </a>{' '}
            are some of the tools I have enjoyed working with over the last few years.
          </Text>
          <Text>
            This site was built with{' '}
            <a sx={{ color: 'inherit' }} href="https://www.gatsbyjs.org/">
              Gatsby
            </a>{' '}
            and{' '}
            <a sx={{ color: 'inherit' }} href="https://theme-ui.com/">
              Theme UI
            </a>
            .
          </Text>
        </Box>
      </Box>
    </Grid>
  </Layout>
);

export default IndexPage;
