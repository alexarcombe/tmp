import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import VehicleTable from '../VehicleTable/VehicleTable';
import Vehicle from '../Vehicle/Vehicle';
import useFormFields from '../../hooks/useFormFields';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: 'calc(100% - 64px)',
    textAlign: 'center',
    paddingTop: theme.spacing(3),
  },
  grid: {
    height: 'calc(90% - 56px)',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const initialValues = {
  name: '',
  model: '',
  tags: [],
  speed: 0,
  latitude: -36.8077324,
  longitude: 174.7837708,
  sensors: [],
  comments: [],
};

function Vehicles() {
  const classes = useStyles();
  const [formMode, setFormMode] = useState('Create');
  const [values, handleChange, setFormFields] = useFormFields({
    initialValues,
    onSubmit: () => console.log('hola'),
  });

  return (
    <Container className={classes.root}>
      <Typography component="h1" variant="h3">
        Vehicles
      </Typography>
      <Grid className={classes.grid} container spacing={0}>
        <Grid item xs={12} sm={6}>
          <VehicleTable
            setCurrent={(current) => {
              setFormFields(current);
              setFormMode('Selected');
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Vehicle
            values={values}
            handleChange={handleChange}
            setFormFields={setFormFields}
            formMode={formMode}
            setFormMode={setFormMode}
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Vehicles;
