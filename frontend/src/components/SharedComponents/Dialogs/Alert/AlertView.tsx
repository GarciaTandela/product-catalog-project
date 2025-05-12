import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CircularProgress from '@mui/material/CircularProgress';
import DialogModel from '@/models/sharedcomponents/dialog';

const AlertDialog: React.FC<DialogModel.AlertDialogProps> = (props) => {
  const handleSubmit = () => {
    props.removeAction();
  };

  return (
    <>
      <Dialog
        open={props.showDialog}
        onClose={props.closeDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Remove</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to remove this item? This action cannot be
            undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            color="error"
            autoFocus
            onClick={handleSubmit}
            disabled={props.isLoading}
          >
            {props.isLoading ? (
              <CircularProgress size={24} color="inherit" />
            ) : (
              'Remove'
            )}
          </Button>
          <Button onClick={props.closeDialog} disabled={props.isLoading}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AlertDialog;
