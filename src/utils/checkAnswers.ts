const checkAnswers = (selected: string[], correct: string[]): number => {
    let good = 0
    let bad = 0
    selected.forEach((sel) => {
        if (correct.includes(sel)){
            good += 1
        }else{
            bad += 1
        }
    })
    const points = good - bad
    return (points < 0 ? 0 : points)
}

export default checkAnswers