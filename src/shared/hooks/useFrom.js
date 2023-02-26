import { useState } from 'react';

export const useForm = ({ initialState, onSubmit }) => {
  const [state, setState] = useState(initialState);

  const handleSubmit = evt => {
    evt.preventDefault();
    onSubmit(state);
    setState(initialState);
    // if (onSubmit(state)) {
    //   setState(initialState);
    // }
    const form = evt.target;
    form.reset();
  };

  const handleOnChange = e => {
    const { name, value } = e.target;
    setState(prevState => ({ ...prevState, [name]: value }));
  };

  return { state, handleSubmit, handleOnChange };
};
