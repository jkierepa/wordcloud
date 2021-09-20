import React, { useContext, useMemo } from 'react'

import Word from '@components/Word/Word'
import { SelectedContext } from '@context/Selected/SelectedContext'
import { CheckContext } from '@context/Check/CheckContext'

import getCombinations from '@utils/getCombinations'
import styles from './WordGrid.module.css'
import { WordGridProps } from '@appTypes/propTypes'

const WordGrid = ({columns = 5, rows = 5, wordSet, correctWords}: WordGridProps): React.ReactElement => {
    const memoizedCombinations = useMemo(() => getCombinations(columns, rows), [columns, rows])
    const { setSelected } = useContext(SelectedContext)
    const { isChecked } = useContext(CheckContext)

    return (
        <div className={styles.grid}
        style={{ gridTemplateColumns: `repeat(${columns}, minmax(0px, 1fr))`, gridTemplateRows: `repeat(${rows}, minmax(0px, 1fr))`}}>
                {wordSet?.all_words.map((word, index) => {
                    const comb = memoizedCombinations[index]
                    return (<Word 
                        word={word} 
                        column={comb?.column} 
                        row={comb?.row} 
                        key={word} 
                        setSelected={(sel) => setSelected(sel)} 
                        isChecked={isChecked}
                        isCorrect={correctWords.includes(word)}/>)
                })}
        </div>)
}

export default WordGrid

// return (<div style={{flex: 1, backgroundColor: "blue", 
// gridRow: comb?.row, gridColumn: comb?.column}} key={text}>{text}</div>)