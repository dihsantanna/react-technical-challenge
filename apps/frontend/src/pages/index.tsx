import Container from '@/core-components/container';
import { Footer, Header, NavBar } from '@/components';
import { Sort } from '@/features/sort/components/sort';
import { ProductList } from '@/features/products/components/productList';

const Home: React.FC = () => {
  return (
    <Container
      as="div"
      className="bg-base min-w-full min-h-screen text-[#585858] relative pb-[400px]"
    >
      <Header />
      <Container
        as="main"
        className="max-w-[1440px] flex flex-col md:flex-row px-16 py-5 gap-2"
      >
        <aside className="flex w-full md:min-w-[280px]">
          <NavBar />
        </aside>
        <Container as="section">
          <div className="flex items-center justify-between flex-wrap gap-2 md:max-w-[calc(100%-280px)]">
            <h1 className="text-xl font-bold whitespace-nowrap">
              Produtos mais buscados
            </h1>
            <Sort />
            <ProductList />
          </div>
        </Container>
      </Container>
      <Footer />
    </Container>
  );
};

export default Home;
