import React from 'react';
import Input from '@components/Input/Input';
import Button from '@components/Button/Button';

type LoginContainerLayoutProps = {
    inputValue: string;
    setInputValue: (value: string) => void;
    onPlayClick(): void
}

//TODO: contenxt maybe ??? 
// TODO: styling components
const LoginContainerLayout = ({inputValue, setInputValue, onPlayClick }: LoginContainerLayoutProps): React.ReactElement => {
  return (
    <div style={{display: "flex", flexDirection: "column", justifyContent: "space-evenly", alignItems:"center", flex: 1}}>
      <div style={{ display: 'flex', width: "50%", minWidth: "150px" }}>
        <Input value={inputValue} setValue={(value) => setInputValue(value)} />
      </div>
      <div style={{ display: 'flex', width: "25%", minWidth: "150px" }}>
        <Button onClick={() => onPlayClick()}><h3>PLAY</h3></Button>
      </div>
    </div>
  );
};

export default LoginContainerLayout;
