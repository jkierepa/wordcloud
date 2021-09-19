import React from 'react';
import cln from 'classnames';

import { ButtonProps } from '@appTypes/propTypes';

import styles from './Button.module.css';



const Button = ({ children, onClick, customStyle }: ButtonProps): React.ReactElement => (
  <button
    type="button"
    onClick={() => onClick()}
    className={cln([styles.button, customStyle])}
  >
    {children}
  </button>
);

export default Button;
