import { Box, Heading, Text } from 'theme-ui';
import Layout from '../components/Layout';

const NotFoundPage = () => (
  <Layout>
    <Box>
      <Heading as="h1" sx={{ fontSize: 8 }} mb={3}>
        Not Found
      </Heading>
      <Text>You just hit a route that doesn&#39;t exist...</Text>
    </Box>
  </Layout>
);

export default NotFoundPage;
