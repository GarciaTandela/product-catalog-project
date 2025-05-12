import UpdateProductWrapper from '@/components/UpdateProduct/UpdateProduct';
import api from '@/services';

interface UpdateProductParams {
  id: string;
}

export const metadata = {
  title: 'Update Product'
};

async function fetchData(params: Promise<UpdateProductParams>) {
  try {
    const productResponse = await api.product.get((await params).id);

    const product = productResponse.data;
    return product;
  } catch (error) {
    console.log(error);
    return {};
  }
}

export default async function UpdateProduct({
  params
}: {
  params: Promise<UpdateProductParams>;
}) {
  const data = await fetchData(params);
  return <UpdateProductWrapper product={data}></UpdateProductWrapper>;
}
