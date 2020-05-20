import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Fab, colors } from '@material-ui/core';
import { Add, Edit, Delete, Save } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  container: {
    margin: theme.spacing(2),
  },
  icons: {
    margin: theme.spacing(1),
  },
  danger: {
    color: 'white',
    backgroundColor: colors.red[500],
    '&:hover': {
      backgroundColor: colors.red[700],
    },
  },
  save: {
    color: 'white',
    backgroundColor: colors.green[400],
    '&:hover': {
      backgroundColor: colors.green[600],
    },
  },
}));

function Actions({ reset, id, formMode, setFormMode }) {
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
        className={`${classes.icons} ${classes.save}`}
        aria-label="save"
        disabled={formMode !== 'Changed'}
      >
        <Save />
      </Fab>
      <Fab
        className={`${classes.icons} ${classes.danger}`}
        aria-label="delete"
        disabled={id === undefined}
      >
        <Delete />
      </Fab>
    </div>
  );
}

export default Actions;
