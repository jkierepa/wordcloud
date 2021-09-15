import { CustomStyle } from '@appTypes/appTypes';
import React from 'react';
import cln from 'classnames';
import styles from './Button.module.css';

type ButtonProps = {
    children?: React.ReactNode
    customStyle?: CustomStyle
    onClick(): void
}

const Button = ({ children, onClick, customStyle }: ButtonProps) => (
  <button
    type="button"
    onClick={() => onClick()}
    className={cln([styles.button, customStyle])}
  >
    {children}
  </button>
);

export default Button;
