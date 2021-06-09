import { NextPage } from 'next';
import { Heading } from '@chakra-ui/layout';
import { Page } from '../ui/page/Page';

const Home: NextPage = () => {
  return (
    <Page>
      <Heading as="h1" size="2xl" mb={4}>
        This is the landing page at some point.
      </Heading>
    </Page>
  );
};

export default Home;
