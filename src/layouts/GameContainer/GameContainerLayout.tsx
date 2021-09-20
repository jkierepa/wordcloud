import React from 'react';

import Button from '@components/Button/Button';
import WordGrid from '@components/WordGrid/WordGrid';
import useCheckContext from '@context/Check/CheckContext';

import styles from './GameContainerLayout.module.css'
import { GameContainerLayoutProps } from '@appTypes/propTypes';

const GameContainerLayout = ({onFinishClick, onCheckClick, wordSet, correctWords, rows = 4}: GameContainerLayoutProps): React.ReactElement => {
    const { isChecked } = useCheckContext()

  return (
    <div className={styles.container}>
      <h3 className={styles.question}>{wordSet?.question.toUpperCase()}</h3>
      <WordGrid columns={wordSet?.all_words && Math.ceil(wordSet?.all_words.length / rows)} 
      rows={rows} 
      wordSet={wordSet} correctWords={correctWords}/>
      <div className={styles.buttonWrapper}>
          {isChecked 
          ? <Button onClick={() => onFinishClick()}><h3>FINISH PLAYING</h3></Button> 
          : <Button onClick={() => onCheckClick()}><h3>CHECK ANSWERS</h3></Button>}
      </div>
    </div>
  );
};

export default GameContainerLayout;