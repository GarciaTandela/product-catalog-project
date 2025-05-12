import HomeWrapper from '@/components/Home/Home';

export const metadata = {
  title: 'Product Catalog App'
};

export default function Home() {
  const products = [
    {
      _id: '1',
      Title: 'Teste',
      Price: 99.99,
      Stock: 2,
      Category: 'Food',
      Description: 'Testando a listagem'
    },
    {
      _id: '2',
      Title: 'Teste',
      Price: 99.99,
      Stock: 2,
      Category: 'Food',
      Description: 'Testando a listagem'
    },
    {
      _id: '3',
      Title: 'Teste',
      Price: 99.99,
      Stock: 2,
      Category: 'Food',
      Description: 'Testando a listagem'
    },
    {
      _id: '4',
      Title: 'Teste',
      Price: 99.99,
      Stock: 2,
      Category: 'Food',
      Description: 'Testando a listagem'
    },
    {
      _id: '5',
      Title: 'Teste',
      Price: 99.99,
      Stock: 2,
      Category: 'Food',
      Description: 'Testando a listagem'
    }
  ];
  return <HomeWrapper products={products}></HomeWrapper>;
}
