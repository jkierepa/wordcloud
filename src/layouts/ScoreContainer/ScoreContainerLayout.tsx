import React from 'react'
import cln from 'classnames'

import Button from '@components/Button/Button'
import Header from '@components/Header/Header'

import styles from './ScoreContainerLayout.module.css'

export type ScoreContainerLayoutProps = {
    score: number | undefined;
    scoreText: string;
    onLogoutClick(): void;
}

const ScoreContainerLayout = ({ onLogoutClick, score, scoreText }: ScoreContainerLayoutProps): React.ReactElement => {
    return(
    <div className={styles.container}>
        <Header>{scoreText}</Header>
        <div className={styles.text}>Your score:</div>
        <div className={cln([styles.text, styles.textPrimaryColor])}>{`${score} points`}</div>
        <div className={styles.buttonWrapper}>
            <Button onClick={() => onLogoutClick()}><h3>Logout</h3></Button>
        </div>    
    </div>)
}

export default ScoreContainerLayout