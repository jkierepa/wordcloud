import React, { useState } from 'react';
import Input from '@components/Input/Input';
import Button from '@components/Button/Button';

const LoginContainer = () => {
  const [username, setUsername] = useState<string>('');
  return (
    <div>
      <Input value={username} setValue={(value) => setUsername(value)} />
      <div style={{ display: 'flex', width: '200px' }}>
        <Button onClick={() => console.log('elo')}><h3>PLAY</h3></Button>
      </div>
    </div>
  );
};

export default LoginContainer;
