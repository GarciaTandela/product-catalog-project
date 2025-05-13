import ProductDetailWrapper from '@/components/ProductDetail/ProductDetailView';
import api from '@/services';

interface ProductDetailParams {
  id: string;
}

export const metadata = {
  title: 'Product Detail'
};

async function fetchData(params: Promise<ProductDetailParams>) {
  try {
    const productResponse = await api.product.get((await params).id);

    const product = productResponse.data;
    return product;
  } catch (error) {
    console.log(error);
    return {};
  }
}

export default async function ProductDetail({
  params
}: {
  params: Promise<ProductDetailParams>;
}) {
  const data = await fetchData(params);
  return <ProductDetailWrapper product={data}></ProductDetailWrapper>;
}
