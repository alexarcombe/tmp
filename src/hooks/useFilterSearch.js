import { useState } from 'react';

export default (initialValues = {}) => {
  const [values, setValues] = useState(initialValues);

  const onChange = (e) => {
    const { name, value } = e.target;

    const filter = name === 'filter' ? value : values.filter;
    const searchPhrase = name === 'searchPhrase' ? value : values.searchPhrase;
    const filtered = values.list.filter((element) => {
      if (Array.isArray(element[filter])) {
        return element[filter].reduce((acc, current) => {
          return (
            acc ||
            current.toLowerCase().indexOf(searchPhrase.toLowerCase()) !== -1
          );
        }, false);
      }
      return (
        element[filter].toLowerCase().indexOf(searchPhrase.toLowerCase()) !== -1
      );
    });

    setValues((values) => {
      return { ...values, [name]: value, filteredList: filtered };
    });
  };

  return [values, onChange];
};
