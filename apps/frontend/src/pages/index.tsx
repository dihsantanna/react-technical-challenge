import Container from '@/core-components/container';
import { Header } from '@/components/header';

const Home: React.FC = () => {
  return (
    <Container
      as="div"
      className="bg-base min-w-full min-h-screen text-[#585858] relative pb-[400px]"
    >
      <Header />
      <Container as="section" className="max-w-[1440px]">
        Main
      </Container>
    </Container>
  );
};

export default Home;
