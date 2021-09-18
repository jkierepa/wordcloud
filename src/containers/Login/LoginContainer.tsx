import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@store/store';
import { setUser } from '@store/slices/user/userSlice';
import { useHistory } from 'react-router';
import LoginContainerLayout from '@layouts/LoginContainer/LoginContainerLayout';

const LoginContainer = (): React.ReactElement => {
  const [username, setUsername] = useState<string>("");
  const user = useAppSelector(state => state.user)
  const dispatch = useAppDispatch();
  const history = useHistory()

  useEffect(() => {
    if (user.id && user.name){
      history.replace("/game");
    }
  }, [user.id, user.name, history])

  const handlePlayClick = () => {
    if (!username) return;
    dispatch(setUser(username));
  }

  return (<LoginContainerLayout
    inputValue={username} 
    setInputValue={(value) => setUsername(value)} 
    onPlayClick={() => handlePlayClick()}
    />)

  // return (
  //   <div style={{display: "flex", flexDirection: "column", justifyContent: "space-evenly", alignItems:"center", flex: 1}}>
  //     <div style={{ display: 'flex', width: "50%", minWidth: "150px" }}>
  //       <Input value={username} setValue={(value) => setUsername(value)} />
  //     </div>
  //     <div style={{ display: 'flex', width: "25%", minWidth: "150px" }}>
  //       <Button onClick={() => handleClickPlay()}><h3>PLAY</h3></Button>
  //     </div>
  //   </div>
  // );
};

export default LoginContainer;
