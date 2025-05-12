namespace Dialog {
  export interface AlertDialogProps {
    showDialog: boolean;
    isLoading: boolean;
    closeDialog: () => void;
    removeAction: () => void;
  }
}

export default Dialog;
