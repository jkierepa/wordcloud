import React from 'react';

import Input from '@components/Input/Input';
import Button from '@components/Button/Button';

import styles from './LoginContainerLayout.module.css'

import { LoginContainerLayoutProps } from '@appTypes/propTypes';

const LoginContainerLayout = ({inputValue, setInputValue, onPlayClick }: LoginContainerLayoutProps): React.ReactElement => {
  return (
    <div className={styles.container}>
      <div className={styles.input}>
        <Input value={inputValue} setValue={(value) => setInputValue(value)} />
      </div>
      <div className={styles.button}>
        <Button onClick={() => onPlayClick()}><h3>PLAY</h3></Button>
      </div>
    </div>
  );
};

export default LoginContainerLayout;
