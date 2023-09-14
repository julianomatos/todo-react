import React from 'react'
import { useState } from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const NewTodo = ({onNewTodo}) => {
  const [value, setValue] = useState('');
  const ESCAPE_KEY = 27;
  const ENTER_KEY = 13;
  const erase = () => {
    setValue('');
  };

  const submit = () => {
    if(onNewTodo){
      onNewTodo(value);
      erase();
    }
  };

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onKeyDown = (event) => {
    if (event.which === ENTER_KEY) {
      submit();
    } else if (event.which === ESCAPE_KEY) {
      erase();
    }
  };

  return (
    <div>
      <input
          className="new-todo"
          placeholder="o que precisa ser feito?"
          value={value}
          onChange={onChange}
          onKeyDown={onKeyDown}
        />
    </div>
  )
}

NewTodo.prototype = {
  onNewTodo: PropTypes.func.isRequired,
}

export default NewTodo

