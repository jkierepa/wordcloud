import React, { useState, useEffect } from 'react'
import cln from 'classnames'

import styles from './Word.module.css'

type WordProps = {
    word: string;
    row?: number;
    column?: number
    setSelected(sel: string): void
}

const Word = ({ word, row = 1, column = 1, setSelected }: WordProps): React.ReactElement => {
    const [isSelected, setIsSelected] = useState<boolean>(false)

    useEffect(() => {
        console.log('changed?', isSelected)
    }, [isSelected])

    const handleWordClick = () => {
        setIsSelected(prevState => !prevState)
        setSelected(word)
    }

    return (<button type="button" style={{ flex: 1, gridColumn: column, gridRow: row, 
    backgroundColor: 'transparent'}} className={cln([isSelected && styles.selected])} onClick={() => handleWordClick()}>{word}</button>)

}

export default Word