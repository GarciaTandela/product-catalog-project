import UpdateProductWrapper from '@/components/UpdateProduct/UpdateProduct';

export const metadata = {
  title: 'Update Product'
};

interface UpdateProductParams {
  id: string;
}

export default async function UpdateProduct({
  params: rawParams
}: {
  params: Promise<UpdateProductParams>;
}) {
  const params = await rawParams;
  const data = {
    _id: params.id,
    Title: 'Olá',
    Description: 'Tudo bem ?',
    Price: 34.78,
    Stock: 2,
    Category: 'Electronics'
  };
  return <UpdateProductWrapper product={data}></UpdateProductWrapper>;
}
