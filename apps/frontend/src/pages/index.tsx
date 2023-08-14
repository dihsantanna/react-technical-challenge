import Container from '@/core-components/container';
import { Footer, Header, NavBar } from '@/components';
import { Sort } from '@/features/sort/components/sort';
import { ProductList } from '@/features/products/components/productList';
import { FilterList } from '@/features/filters/components/filterList';

const Home: React.FC = () => {
  return (
    <Container
      as="div"
      className="bg-base min-w-full min-h-screen text-[#585858] relative pb-[400px]"
    >
      <Header />
      <Container
        as="main"
        className="max-w-[1440px] flex flex-col md:flex-row px-16 py-5 gap-6"
      >
        <aside className="flex w-full md:min-w-[280px] md:max-w-[280px] flex-col gap-7">
          <NavBar />
          <FilterList />
        </aside>
        <Container as="section" className="md:max-w-[calc(100%-280px)]">
          <div className="flex flex-col gap-7">
            <div className="w-full flex items-center justify-between flex-wrap gap-2">
              <h1 className="text-xl font-bold whitespace-nowrap">
                Produtos mais buscados
              </h1>
              <Sort />
            </div>
            <ProductList />
          </div>
        </Container>
      </Container>
      <Footer />
    </Container>
  );
};

export default Home;
