import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import VehicleList from './VehicleList';
import SearchBar from './SearchBar';
import useFilterSearch from '../../hooks/useFilterSearch';

const vehicles = [
  {
    id: 1,
    name: 'Alex Car',
    model: 'Volvo1337',
    tags: ['fleet 1', 'damaged'],
    speed: 130,
    latitude: 10,
    longitude: 10,
    sensors: [
      { name: 'Fridge', value: '-100' },
      { name: 'Breaks', value: 'true' },
    ],
    comments: [
      {
        id: 0,
        by: 'Alex',
        date: '2020-04-21',
        comment: 'The road was a bit tricky with this truck.',
      },
      {
        id: 1,
        by: 'Alex',
        date: '2020-04-18',
        comment: 'The road was a bit tricky with this truck.',
      },
      {
        id: 2,
        by: 'Alex',
        date: '2020-04-17',
        comment: 'The road was a bit tricky with this truck.',
      },
      {
        id: 3,
        by: 'Alex',
        date: '2020-04-10',
        comment: 'The road was a bit tricky with this truck.',
      },
    ],
  },
  {
    id: 2,
    name: 'Rochis Car',
    model: 'Saab1337',
    tags: ['fleet 1', 'undamaged'],
  },
  {
    id: 3,
    name: 'Kents Car',
    model: 'Toyota1337',
    tags: ['fleet 2'],
  },
  {
    id: 4,
    name: 'Alex Car',
    model: 'Nissan1337',
    tags: ['fleet 2'],
  },
  {
    id: 4,
    name: 'Alex Car',
    model: 'Nissan1337',
    tags: ['fleet 2'],
  },
  {
    id: 5,
    name: 'Alex Car',
    model: 'Nissan1337',
    tags: ['fleet 2'],
  },
  {
    id: 6,
    name: 'Alex Car',
    model: 'Nissan1337',
    tags: ['fleet 2'],
  },
  {
    id: 7,
    name: 'Alex Car',
    model: 'Nissan1337',
    tags: ['fleet 2'],
  },
  {
    id: 8,
    name: 'Alex Car',
    model: 'Nissan1337',
    tags: ['fleet 2'],
  },
  {
    id: 9,
    name: 'Alex Car',
    model: 'Nissan1337',
    tags: ['fleet 2'],
  },
  {
    id: 10,
    name: 'Alex Car',
    model: 'Nissan1337',
    tags: ['fleet 2'],
  },
  {
    id: 11,
    name: 'Alex Car',
    model: 'Nissan1337',
    tags: ['fleet 2'],
  },
  {
    id: 12,
    name: 'Alex Car',
    model: 'Nissan1337',
    tags: ['fleet 2'],
  },
  {
    id: 13,
    name: 'Alex Car',
    model: 'Nissan1337',
    tags: ['fleet 2'],
  },
  {
    id: 14,
    name: 'Alex Car',
    model: 'Nissan1337',
    tags: ['fleet 2'],
  },
  {
    id: 15,
    name: 'Alex Car',
    model: 'Nissan1337',
    tags: ['fleet 2'],
  },
  {
    id: 16,
    name: 'Alex Car',
    model: 'Nissan1337',
    tags: ['fleet 2'],
  },
  {
    id: 17,
    name: 'Alex Car',
    model: 'Nissan1337',
    tags: ['fleet 2'],
  },
  {
    id: 18,
    name: 'Alex Car',
    model: 'Nissan1337',
    tags: ['fleet 2'],
  },
  {
    id: 19,
    name: 'Alex Car',
    model: 'Nissan1337',
    tags: ['fleet 2'],
  },
  {
    id: 20,
    name: 'Alex Car',
    model: 'Nissan1337',
    tags: ['fleet 2'],
  },
  {
    id: 21,
    name: 'Alex Car',
    model: 'Nissan1337',
    tags: ['fleet 2'],
  },
  {
    id: 22,
    name: 'Alex Car',
    model: 'Nissan1337',
    tags: ['fleet 2'],
  },
  {
    id: 23,
    name: 'Alex Car',
    model: 'Nissan1337',
    tags: ['fleet 2'],
  },
  {
    id: 24,
    name: 'Alex Car',
    model: 'Nissan1337',
    tags: ['fleet 2'],
  },
  {
    id: 25,
    name: 'Alex Car',
    model: 'Nissan1337',
    tags: ['fleet 2'],
  },
  {
    id: 26,
    name: 'Alex Car',
    model: 'Nissan1337',
    tags: ['fleet 2'],
  },
  {
    id: 27,
    name: 'Alex Car',
    model: 'Nissan1337',
    tags: ['fleet 2'],
  },
  {
    id: 28,
    name: 'Alex Car',
    model: 'Nissan1337',
    tags: ['fleet 2'],
  },
  {
    id: 29,
    name: 'Alex Car',
    model: 'Nissan1337',
    tags: ['fleet 2'],
  },
  {
    id: 30,
    name: 'Alex Car',
    model: 'Nissan1337',
    tags: ['fleet 2'],
  },
  {
    id: 31,
    name: 'Alex Car',
    model: 'Nissan1337',
    tags: ['fleet 2'],
  },
  {
    id: 32,
    name: 'Alex Car',
    model: 'Nissan1337',
    tags: ['fleet 2'],
  },
  {
    id: 33,
    name: 'Alex Car',
    model: 'Nissan1337',
    tags: ['fleet 2'],
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

const initialValues = {
  searchPhrase: '',
  filter: 'name',
  list: vehicles,
  filteredList: vehicles,
};

function VehicleTable(props) {
  const classes = useStyles();
  const { setCurrent } = props;
  const [{ searchPhrase, filter, filteredList }, onChange] = useFilterSearch(
    initialValues
  );

  console.log('rerender?');

  return (
    <div className={classes.root}>
      <SearchBar
        searchPhrase={searchPhrase}
        filter={filter}
        onChange={onChange}
      />
      <div style={{ height: 'calc(100% - 64px)' }}>
        <VehicleList vehicles={filteredList} setCurrent={setCurrent} />
      </div>
    </div>
  );
}

export default VehicleTable;
