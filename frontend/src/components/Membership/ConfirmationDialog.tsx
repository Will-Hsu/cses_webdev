import React from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';

interface ConfirmationDialogProps {
  open: boolean;
  handleClose: () => void;
  handleConfirm: () => void;
  title: string;
  message: string;
}

const ConfirmationDialog = (confirmationProps: ConfirmationDialogProps) => {
  return (
    <Dialog open={confirmationProps.open} onClose={confirmationProps.handleClose}>
      <DialogTitle>{confirmationProps.title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{confirmationProps.message}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={confirmationProps.handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={confirmationProps.handleConfirm} color="primary">
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmationDialog;
