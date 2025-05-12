import ProductModel from '@/models/modules/product';

// 1. Defina o estado inicial
export const initialState = {
  Title: '',
  Description: '',
  Price: '',
  Stock: '',
  Category: ''
};

interface action {
  key: string;
  value: string;
  type: string;
}

// 2. Crie a função reducer que recebe estado e ação
export function reducer(state: ProductModel.FormInitialState, action: action) {
  switch (action.type) {
    case 'setFormState':
      return { ...state, [action.key!]: action.value };
    case 'handlePriceChange':
      const value = action.value.replace(/\D/g, ''); // Remove non-numeric characters

      if (value === '00') {
        // Set empty string if input is cleared
        return { ...state, [action.key]: '' };
      }

      const formattedValue = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'EUR',
        minimumFractionDigits: 2
      })
        .format(Number(value) / 100)
        .replace('€', '');
      return { ...state, [action.key]: formattedValue };
    case 'reset':
      return initialState;
    default:
      throw new Error('Ação desconhecida: ${action.type}');
  }
}
