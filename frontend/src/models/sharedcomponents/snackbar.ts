namespace Snackbar {
  export interface InfoSnackBar {
    data: {
      show: boolean;
      type: 'error' | 'info' | 'success' | 'warning';
      message: string;
    };
    close?: () => void;
  }
}

export default Snackbar;
