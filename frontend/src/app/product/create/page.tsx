import CreateProductWrapper from '@/components/CreateProduct/CreateProductView';

export const metadata = {
  title: 'Create Product'
};

export default async function CreateProduct() {
  return <CreateProductWrapper></CreateProductWrapper>;
}
