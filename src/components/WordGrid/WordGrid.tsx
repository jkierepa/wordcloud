import { WordSet } from '@appTypes/appTypes'
import Word from '@components/Word/Word'
import getCombinations from '@utils/getCombinations'
import React, { useContext, useMemo } from 'react'
import { SelectedContext } from '@context/selected/selectedContext'

type WordGridProps = {
    columns: number| undefined;
    rows: number | undefined;
    wordSet?: WordSet
}

const WordGrid = ({columns = 5, rows = 5, wordSet}: WordGridProps): React.ReactElement => {
    const memoizedCombinations = useMemo(() => getCombinations(columns, rows), [columns, rows])
    const { setSelected } = useContext(SelectedContext)

    return (
        <div style={{
            width: "50%",
            height: "50%",
            display: "grid",
        /* gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))" */
        gridTemplateColumns: `repeat(${columns}, minmax(0px, 1fr))`,
        gridTemplateRows: `repeat(${rows}, minmax(0px, 1fr))`,
        gap: "1rem" }}>
                {wordSet?.all_words.map((word, index) => {
                    const comb = memoizedCombinations[index]
                    return (<Word word={word} column={comb?.column} row={comb?.row} key={word} setSelected={(sel) => setSelected(sel)}/>)
                })}

        </div>)
}

export default WordGrid

// return (<div style={{flex: 1, backgroundColor: "blue", 
// gridRow: comb?.row, gridColumn: comb?.column}} key={text}>{text}</div>)