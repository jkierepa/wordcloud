import React, { useState } from 'react'
import cln from 'classnames'

import { WordProps } from '@appTypes/propTypes'
import styles from './Word.module.css'

const randomPropertyArray = ['flex-start', 'center', 'flex-end']

const Word = ({ word, row = 1, column = 1, setSelected, isCorrect, isChecked }: WordProps): React.ReactElement => {
    const [isSelected, setIsSelected] = useState<boolean>(false)
    const [randomJustify] = useState<string>(randomPropertyArray[Math.floor(Math.random() * randomPropertyArray.length)])
    const [randomAlign] = useState<string>(randomPropertyArray[Math.floor(Math.random() * randomPropertyArray.length)])
    const checkText = isCorrect ? "Correct!" : "Wrong!"


    const handleWordClick = () => {
        setIsSelected(prevState => !prevState)
        setSelected(word)
    }

    const style = cln([
        styles.wordWrapper, styles.word, 
        isSelected && styles.selected, 
        isSelected && isChecked && styles.checked, 
        isSelected && isCorrect && isChecked && styles.correct
    ])

    return (
    <button 
    type="button" 
    style={{ gridColumn: column, gridRow: row, justifySelf: randomJustify, alignSelf: randomAlign}} 
    className={style} 
    onClick={() => handleWordClick()}
    disabled={isChecked}>
        <h3>{isChecked && isSelected && checkText}</h3>
        <h3>{word}</h3>
    </button>)

}

export default Word