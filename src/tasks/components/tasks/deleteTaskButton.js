import React from 'react';
import Dialog from '@material-ui/core/Dialog/Dialog';
import DialogActions from '@material-ui/core/DialogActions/DialogActions';
import DialogContentText from '@material-ui/core/DialogContentText';
import Slide from '@material-ui/core/Slide';
import Button from '@material-ui/core/Button/Button';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

const Transition = (props) => (
  <Slide direction="up" {...props}/>
)


const DeleteTaskButton = ({
                            isOpenDialogDelete,
                            onOpenDialogDelete,
                            onCloseDialogDelete,
                            onSubmitFormDelete,
                            idTask
                          }) => {
  return (
    <div>
      <Button size="small" color="primary" onClick={onOpenDialogDelete}>
        Delete
      </Button>
      <Dialog
        open={isOpenDialogDelete}
        TransitionComponent={Transition}
        onClose={onCloseDialogDelete}>
        <DialogTitle>Task : Delete Task Id: {idTask}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Do You Want To Delete Task Id: {idTask} ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onCloseDialogDelete} color="primary">
            Disagree
          </Button>
          <Button onClick={onSubmitFormDelete} color="primary">
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DeleteTaskButton;
