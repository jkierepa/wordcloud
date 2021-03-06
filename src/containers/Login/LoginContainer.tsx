import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';

import { useAppDispatch, useAppSelector } from '@store/store';
import { setUser } from '@store/slices/user/userSlice';

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
};

export default LoginContainer;
