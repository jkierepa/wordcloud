import React, {useEffect, useState} from 'react'
import { useHistory } from 'react-router'

import { fetchGameSets, fetchRandomSet } from '@store/slices/game/gameSlice'
import { useAppDispatch, useAppSelector } from '@store/store'
import { setScore } from '@store/slices/score/scoreSlice'

import GameContainerLayout from '@layouts/GameContainer/GameContainerLayout'

import { SelectedContext } from '@context/Selected/SelectedContext'
import { CheckContext } from '@context/Check/CheckContext'

import toggleSelection from '@utils/toggleSelection'
import checkAnswers from '@utils/checkAnswers'

const GameContainer = (): React.ReactElement => {
    const [selected, setSelected] = useState<string[]>([])
    const [isChecked, setIsChecked] = useState<boolean>(false)
    const [points, setPoints] = useState<number>(0)

    const {availableGameSets, wordSet, correctWords } = useAppSelector((state) => state.game)
    const dispatch = useAppDispatch()

    const history = useHistory()

    useEffect(() => {
        dispatch(fetchGameSets())
    }, [dispatch])

    useEffect(() => {
        dispatch(setScore(points))
    }, [points, dispatch])

    useEffect(() => {
        if (availableGameSets.length !== 0){
            dispatch(fetchRandomSet())
        }
    }, [availableGameSets, dispatch])

    const handleCheckClick = () => {
        setPoints(checkAnswers(selected, correctWords))
        setIsChecked(true)
    }

    const handleFinishClick = () => {
        history.push('/score')
    }
    
    return (
    <SelectedContext.Provider value={{selected, setSelected: (sel) => setSelected((prevState => toggleSelection(prevState, sel)))}}>
        <CheckContext.Provider value={{isChecked, setIsChecked }}>
            <GameContainerLayout 
                onCheckClick={() => handleCheckClick()} 
                onFinishClick={() => handleFinishClick()} 
                wordSet={wordSet} 
                correctWords={correctWords}
            />
        </CheckContext.Provider>
    </SelectedContext.Provider>)
}

export default GameContainer
