import React, { useEffect } from 'react'
import { useHistory } from 'react-router'

import { useAppSelector } from '@store/store'
import logout from '@store/actions/logout'

import ScoreContainerLayout from '@layouts/ScoreContainer/ScoreContainerLayout'

const ScoreContainer = (): React.ReactElement => {
    const score = useAppSelector((state) => state.score.score)
    const user = useAppSelector((state) => state.user)

    const history = useHistory() 
    
    useEffect(() => {
        if (score === undefined) {
            history.replace("/")
        }
    }, [history, score])

    const scoreText = score !== 0 ? `Congratulations, ${user.name}!` : `Better luck next time, ${user.name}!`
    
    const handleLogoutClick = () => {
        logout()
        history.replace("/")
    } 

    return (<ScoreContainerLayout onLogoutClick={() => handleLogoutClick()} scoreText={scoreText} score={score}/>)
}

export default ScoreContainer