import HomeWrapper from '@/components/Home/HomeView';
import api from '@/services';

export const metadata = {
  title: 'Product Catalog App'
};

async function fetchData() {
  try {
    const productsResponse = await api.product.getAll();

    const products = productsResponse.data;
    return {
      products
    };
  } catch (error) {
    console.log(error);
    return { products: [] };
  }
}

export default async function Home() {
  const { products } = await fetchData();
  return <HomeWrapper products={products}></HomeWrapper>;
}
