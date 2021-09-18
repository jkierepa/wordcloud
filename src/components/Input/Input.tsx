import React from 'react';

import cln from 'classnames';
import { CustomStyle } from '@appTypes/appTypes';
import styles from './Input.module.css';

type InputProps = {
  value: string
  setValue(value: string): void
  placeholder?: string
  customStyle?: CustomStyle
}

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
