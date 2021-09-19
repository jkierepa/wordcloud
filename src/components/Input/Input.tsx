import React from 'react';
import cln from 'classnames';

import styles from './Input.module.css';

import { InputProps } from '@appTypes/propTypes';

const Input = ({
  placeholder, customStyle, value, setValue,
}: InputProps): React.ReactElement => (
  <input
    type="text"
    value={value}
    onChange={(event) => setValue(event.target.value)}
    className={cln([styles.input, customStyle])}
    placeholder={placeholder}
  />
);

export default Input;
