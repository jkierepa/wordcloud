import React from 'react';

import GameContainer from '@containers/Game/GameContainer';
import LogoutButtonContainer from '@containers/LogoutButton/LogoutButtonContainer';

const Game = (): React.ReactElement => {
    return (
      <>  
        <LogoutButtonContainer />
        <GameContainer />
      </>
)};

export default Game;
