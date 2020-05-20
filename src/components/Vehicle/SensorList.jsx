import React from 'react';
import VirtualizedTable from '../VirtualizedTable/VirtualizedTable';

export default function SensorList(props) {
  const { sensors } = props;
  console.log(sensors);
  return (
    <VirtualizedTable
      rowCount={sensors.length}
      rowGetter={({ index }) => sensors[index]}
      columns={[
        {
          width: 200,
          label: 'Name',
          dataKey: 'name',
        },
        {
          width: 200,
          label: 'Value',
          dataKey: 'value',
        },
      ]}
    />
  );
}
