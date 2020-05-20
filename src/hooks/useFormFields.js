import { useState } from 'react';

export default ({ initialValues, onSubmit = () => console.log('submit') }) => {
  const [values, setValues] = useState(initialValues || {});

  const handleChange = (e) => {
    const { id, value } = e.target;
    setValues((values) => {
      return { ...values, [id]: value };
    });
  };

  const setFormFields = (values) => {
    setValues({ ...initialValues, ...values });
  };

  return [values, handleChange, setFormFields];
};
