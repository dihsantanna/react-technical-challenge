import Container from '@/core-components/container';
import { Footer, Header, NavBar } from '@/components';

const Home: React.FC = () => {
  return (
    <Container
      as="div"
      className="bg-base min-w-full min-h-screen text-[#585858] relative pb-[400px]"
    >
      <Header />
      <Container
        as="main"
        className="max-w-[1440px] flex flex-col md:flex-row px-16"
      >
        <aside className="flex w-full md:w-[620px]">
          <NavBar />
        </aside>
        <Container as="section">Main</Container>
      </Container>
      <Footer />
    </Container>
  );
};

export default Home;
