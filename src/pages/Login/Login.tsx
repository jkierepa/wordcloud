import React from 'react';
import LoginContainer from '@containers/Login/LoginContainer';
import Header from '@components/Header/Header';
import LogoutButtonContainer from '@containers/LogoutButton/LogoutButtonContainer';
import styles from './Login.module.css'

const Login = (): React.ReactElement => (
  <>
  <LogoutButtonContainer />
  <div className={styles.screenContainer}>
    <Header>WordCloud</Header>
    <div className={styles.authorText}>by Jakub Kierepa</div>
    <div className={styles.container}>
      <LoginContainer />
    </div>
  </div>
  </>
);

export default Login;
