import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import SnackbarModel from '@/models/sharedcomponents/snackbar';

const InfoSnackbar: React.FC<SnackbarModel.InfoSnackBar> = ({
  data,
  close
}) => {
  const closeSnackBar = (event: unknown, reason: string) => {
    if (reason === 'clickaway') {
      return;
    }

    close?.();
  };

  return (
    <>
      <Snackbar
        open={data.show}
        autoHideDuration={6000}
        onClose={closeSnackBar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert severity={data.type} variant="filled" sx={{ width: '100%' }}>
          {data.message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default InfoSnackbar;
