import React from 'react';
import Input from '@components/Input/Input';
import Header from '@components/Header/Header';

const Login = () => {
  const text = 'Login';
  return (
    <div>
      <Header>Wordcloud</Header>
      <Input value="elo" setValue={() => console.log('elo')} />
      {text}
    </div>
  );
};

export default Login;
