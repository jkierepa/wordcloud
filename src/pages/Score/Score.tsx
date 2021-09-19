import React from 'react'

import LogoutButtonContainer from '@containers/LogoutButton/LogoutButtonContainer'
import ScoreContainer from '@containers/Score/ScoreContainer'

const Score = (): React.ReactElement => {
    return (
    <>
        <LogoutButtonContainer />
        <ScoreContainer />
    </>)
}

export default Score