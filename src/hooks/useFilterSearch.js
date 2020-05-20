import { useState } from 'react';

export default (initialValues = {}) => {
  const [values, setValues] = useState(initialValues);

  const onChange = (e) => {
    const { name, value } = e.target;

    const filter = name === 'filter' ? value : values.filter;
    const searchPhrase = name === 'searchPhrase' ? value : values.searchPhrase;
    const filtered = filterList(values.list, searchPhrase, filter);

    setValues((values) => {
      return { ...values, [name]: value, filteredList: filtered };
    });
  };

  const setList = (newList) => {
    const { searchPhrase, filter } = values;
    const filtered = filterList(newList, searchPhrase, filter);
    setValues((values) => {
      return { ...values, list: newList, filteredList: filtered };
    });
  };

  return [values, onChange, setList];
};

const filterList = (list, searchPhrase, filter) => {
  return list.filter((element) => {
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
};
