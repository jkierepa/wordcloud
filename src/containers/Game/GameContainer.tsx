import WordGrid from '@components/WordGrid/WordGrid'
import { fetchGameSets, fetchRandomSet } from '@store/slices/game/gameSlice'
import { useAppDispatch, useAppSelector } from '@store/store'
import React, {useEffect, useState} from 'react'
import { SelectedContext } from '@context/selected/selectedContext'

const onSelect = (state: string[], selected: string) => {
    const len =  state.length
    const filtered = state.filter((s) => s !== selected)
    if (len === filtered.length) {
        return [...state, selected]
    } else {
        return filtered
    }
}

const GameContainer = (): React.ReactElement => {
    const [selected, setSelected] = useState<string[]>([])
    const dispatch = useAppDispatch()
    const gameSets = useAppSelector((state) => state.game.availableGameSets)
    const wordSet = useAppSelector((state) => state.game.wordSet)

    useEffect(() => {
            dispatch(fetchGameSets())
    }, [dispatch])

    useEffect(() => {
        if (gameSets.length !== 0)
            dispatch(fetchRandomSet())
    }, [gameSets, dispatch])

    return (
    <SelectedContext.Provider value={{selected, setSelected: (sel) => setSelected((prevState => onSelect(prevState, sel)))}}>
        <WordGrid columns={wordSet?.all_words && Math.floor(wordSet?.all_words.length / 2)} 
        rows={wordSet?.all_words && Math.floor(wordSet?.all_words.length / 2)} 
        wordSet={wordSet}/>
    </SelectedContext.Provider>)
}

export default GameContainer
