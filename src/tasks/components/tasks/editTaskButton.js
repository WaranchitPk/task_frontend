import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import FormGroup from '@material-ui/core/FormGroup/FormGroup';
import TextField from '@material-ui/core/TextField/TextField';
import Slide from '@material-ui/core/Slide';
import DialogActions from '@material-ui/core/DialogActions';

const Transition = (props) => (
  <Slide direction="up" {...props}/>
)

const EditTaskButton = ({
                          isOpenDialogEdit,
                          onOpenDialogEdit,
                          onCloseDialogEdit,
                          onSubmitFormEdit,
                          onChangeFormEdit,
                          formSubject,
                          formDesc
                        }) => {
  return (
    <div>
      <Button size="small" color="primary" onClick={onOpenDialogEdit}>
        Edit Task
      </Button>
      <Dialog
        open={isOpenDialogEdit}
        TransitionComponent={Transition}
        onClose={onCloseDialogEdit}>
        <DialogTitle>Task : Edit Tasks</DialogTitle>
        <DialogContent>
          <FormGroup>
            <TextField
              name="subject"
              label="Task: Subject"
              value={formSubject}
              placeholder="Placeholder"
              multiline
              rowsMax="2"
              margin="normal"
              variant="outlined"
              helperText="ex.Exercise"
              onChange={onChangeFormEdit}/>
            <TextField
              name="desc"
              value={formDesc}
              label="Task: Content"
              multiline
              rowsMax="4"
              onChange={onChangeFormEdit}
              margin="normal"
              helperText="Today, i will go to gym at 9.00 pm"
              variant="outlined"
            />
          </FormGroup>
        </DialogContent>
        <DialogActions>
          <Button onClick={onCloseDialogEdit} color="primary">
            Disagree
          </Button>
          <Button onClick={onSubmitFormEdit} color="primary">
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default EditTaskButton;
