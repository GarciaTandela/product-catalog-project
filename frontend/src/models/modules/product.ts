namespace Product {
  export interface FormProps {
    data?: {
      Title?: string;
      Description?: string;
      Price?: string | number;
      Stock?: string | number;
      Category?: string;
    };
    handleSubmit: (state: FormInitialState) => void;
    title: string;
    btnLabel: string;
    isLoading: boolean;
  }

  export interface FormInitialState {
    Title: string;
    Description: string;
    Price: string;
    Stock: string;
    Category: string;
  }

  export interface ProductCardProps {
    data: {
      _id: string;
      Title: string;
      Price: number;
      Stock: number;
      Category: string;
      Description: string;
    };
    openAlertDialog: (id: string) => void;
  }

  export interface ProductListProps {
    products: {
      _id: string;
      Title: string;
      Price: number;
      Stock: number;
      Category: string;
      Description: string;
    }[];
  }

  export interface ProductDataProps {
    product: {
      _id: string;
      Title: string;
      Price: number;
      Stock: number;
      Category: string;
      Description: string;
    };
  }

  export interface ProductStoreState {
    products: {
      _id: string;
      Title: string;
      Price: number;
      Stock: number;
      Category: string;
      Description: string;
    }[];
  }
}

export default Product;
