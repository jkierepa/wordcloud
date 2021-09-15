import { CustomStyle } from '@appTypes/appTypes';
import React from 'react';
import cln from 'classnames';
import styles from './Header.module.css';

type HeaderProps = {
    children?: React.ReactNode
    customStyle?: CustomStyle
}

const Header = ({ children, customStyle }: HeaderProps) => <h3 className={cln([styles.header, customStyle])}>{children}</h3>;

export default Header;
