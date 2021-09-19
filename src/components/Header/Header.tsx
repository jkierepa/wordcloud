import React from 'react';
import cln from 'classnames';

import { HeaderProps } from '@appTypes/propTypes';
import styles from './Header.module.css';

const Header = ({ children, customStyle }: HeaderProps): React.ReactElement => <h3 className={cln([styles.header, customStyle])}>{children}</h3>;

export default Header;
