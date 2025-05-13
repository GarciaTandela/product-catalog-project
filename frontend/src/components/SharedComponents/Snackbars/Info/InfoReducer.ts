import SnackbarModel from '@/models/sharedcomponents/snackbar';

// 2. Initial state
export const initialState: SnackbarModel.InfoSnackBar = {
  data: {
    show: false,
    type: 'info',
    message: ''
  }
};

// 3. Action types (discriminated union)
export type SnackAction =
  | {
      type: 'setSnackbarInfo';
      data: {
        show: boolean;
        type: 'error' | 'info' | 'success' | 'warning';
        message: string;
      };
    }
  | { type: 'reset' };

// 4. Reducer
export function reducer(
  state: SnackbarModel.InfoSnackBar,
  action: SnackAction
): SnackbarModel.InfoSnackBar {
  switch (action.type) {
    case 'setSnackbarInfo':
      return {
        data: {
          show: action.data.show,
          type: action.data.type,
          message: action.data.message
        }
      };

    case 'reset':
      return initialState;

    default:
      // exhaustive-check: if you add new action types,
      // TS will error here until you handle them
      const _exhaustive: never = action;
      throw new Error(`Unexpected action type: ${JSON.stringify(_exhaustive)}`);
  }
}
