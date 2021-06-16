import { Container, Flex, Box } from 'theme-ui';
import Header from './Header';
import Footer from './Footer';

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => (
  <Container sx={{ px: 3 }}>
    <Flex
      sx={{
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <Header />
      <Box sx={{ flex: '1 1 auto' }}>{children}</Box>
      <Footer />
    </Flex>
  </Container>
);

export default Layout;
