import React from 'react';
import LoginContainer from '@containers/Login/LoginContainer';

const Login = () => (
  <div id="test1" style={{flex: 1, display: "flex", justifyContent: "center", alignItems: "center"}}>
    <div id="test" style={{width: "50%", height: "50%", display: "flex"}}>
      <LoginContainer />
    </div>
  </div>
);

export default Login;
