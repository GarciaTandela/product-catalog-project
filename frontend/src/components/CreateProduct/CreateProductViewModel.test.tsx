import { renderHook, act } from '@testing-library/react';
import useCreateProductViewModel from './CreateProductViewModel';

// Mocks will be defined inside beforeEach to avoid hoisting issues
let mockDispatch: jest.Mock;
let mockSetIsLoading: jest.Mock;
let mockCreate: jest.Mock;

vi.mock('react', () => {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const actual = require('react');
  return {
    ...actual,
    useReducer: () => [{ show: false }, mockDispatch],
    useState: (init: boolean) => [init, mockSetIsLoading]
  };
});

vi.mock('@/services', () => ({
  default: {
    product: {
      create: (...args: any[]) => mockCreate(...args)
    }
  }
}));

describe('useCreateProductViewModel', () => {
  const validData = {
    Category: 'Electronics',
    Title: 'Test Product',
    Description: 'A product',
    Price: '100',
    Stock: '10'
  };

  beforeEach(() => {
    mockDispatch = vi.fn();
    mockSetIsLoading = vi.fn();
    mockCreate = vi.fn();
    vi.clearAllMocks();
  });

  it('should dispatch warning if fields are missing', async () => {
    const { result } = renderHook(() => useCreateProductViewModel());
    await act(async () => {
      await result.current.createProduct({
        ...validData,
        Title: ''
      });
    });
    expect(mockDispatch).toHaveBeenCalledWith({
      type: 'setSnackbarInfo',
      data: {
        show: true,
        type: 'warning',
        message: 'Fill in all fields'
      }
    });
    expect(mockCreate).not.toHaveBeenCalled();
  });

  it('should call api and dispatch success on valid data', async () => {
    mockCreate.mockResolvedValueOnce({});
    const { result } = renderHook(() => useCreateProductViewModel());
    await act(async () => {
      await result.current.createProduct({ ...validData, Price: ' 100 ' });
    });
    expect(mockSetIsLoading).toHaveBeenCalledWith(true);
    expect(mockCreate).toHaveBeenCalledWith({
      ...validData,
      Price: '100'
    });
    expect(mockDispatch).toHaveBeenCalledWith({
      type: 'setSnackbarInfo',
      data: {
        show: true,
        type: 'success',
        message: 'Product created successfully'
      }
    });
    expect(mockSetIsLoading).toHaveBeenCalledWith(false);
  });

  it('should dispatch reset on closeSnackBar', () => {
    const { result } = renderHook(() => useCreateProductViewModel());
    act(() => {
      result.current.closeSnackBar();
    });
    expect(mockDispatch).toHaveBeenCalledWith({ type: 'reset' });
  });
});
