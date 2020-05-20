import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Fab, colors } from '@material-ui/core';
import { Add, Edit, Delete } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  container: {
    margin: theme.spacing(2),
  },
  icons: {
    margin: theme.spacing(1),
  },
  danger: {
    backgroundColor: colors.red[900],
  },
}));

function Actions({ reset, id, setFormMode }) {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Fab
        className={classes.icons}
        color="primary"
        aria-label="add"
        onClick={() => {
          reset({});
          setFormMode('Create');
        }}
      >
        <Add />
      </Fab>
      <Fab
        className={classes.icons}
        color="secondary"
        aria-label="edit"
        disabled={id === undefined}
        onClick={() => setFormMode('Edit')}
      >
        <Edit />
      </Fab>
      <Fab
        className={`${classes.icons} ${classes.danger}`}
        color="secondary"
        aria-label="delete"
        disabled={id === undefined}
      >
        <Delete />
      </Fab>
    </div>
  );
}

export default Actions;
