import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Actions from './Actions';
import SensorList from './SensorList';
import CommentList from './CommentList';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
    height: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  form: {
    width: '100%',
    height: '100%',
  },
  textField: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: theme.spacing(1),
    width: '80%',
  },
  fieldGrid: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '80%',
  },
  listGrid: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '80%',
    height: '25%',
  },
}));

export default function Vehicle(props) {
  const classes = useStyles();
  const { values, handleChange, setFormFields, formMode, setFormMode } = props;

  let submitButton =
    formMode === 'Selected' ? null : (
      <Button
        type="submit"
        variant="contained"
        color="primary"
        component="span"
      >
        {formMode}
      </Button>
    );

  return (
    <div className={classes.root}>
      <form className={classes.form} onSubmit={() => console.log(values)}>
        <Actions
          reset={setFormFields}
          id={values.id}
          setFormMode={setFormMode}
        />
        <TextField
          className={classes.textField}
          id="name"
          label="Name"
          value={values.name}
          onChange={handleChange}
          disabled={formMode === 'Selected'}
          fullWidth
        />
        <TextField
          className={classes.textField}
          id="model"
          label="Model"
          value={values.model}
          onChange={handleChange}
          disabled={formMode === 'Selected'}
          fullWidth
        />
        <TextField
          className={classes.textField}
          id="tags"
          label="Tags"
          value={values.tags}
          onChange={handleChange}
          helperText="Seperated by comma ( , )"
          disabled={formMode === 'Selected'}
          fullWidth
        />
        <Grid className={classes.fieldGrid} container spacing={1}>
          <Grid item xs={4}>
            <TextField
              id="speed"
              label="Speed"
              value={values.speed}
              onChange={handleChange}
              disabled={formMode === 'Selected'}
              type="number"
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              id="latitude"
              label="Latitude"
              value={values.latitude}
              onChange={handleChange}
              disabled={formMode === 'Selected'}
              type="number"
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              id="longitude"
              label="Longitude"
              value={values.longitude}
              onChange={handleChange}
              disabled={formMode === 'Selected'}
              type="number"
            />
          </Grid>
        </Grid>
        <Grid className={classes.listGrid} container spacing={1}>
          <Grid item xs={6} style={{ textAlign: 'center' }}>
            Sensors
            <SensorList sensors={values.sensors} />
          </Grid>
          <Grid item xs={6} style={{ textAlign: 'center' }}>
            Comments
            <CommentList comments={values.comments} />
          </Grid>
        </Grid>
      </form>
    </div>
  );
}

{
  /* {submitButton} */
}
