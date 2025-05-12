namespace Snackbar {
  export interface InfoSnackBar {
    data: {
      show: boolean;
      type: 'error' | 'info' | 'success' | 'warning';
      message: string;
    };
  }
}

export default Snackbar;
