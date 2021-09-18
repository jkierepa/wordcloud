import shuffleArray from "./shuffleArray"

type Combination = {
    column: number,
    row: number
}

//TODO: extract type
const getCombinations = (columns: number, rows: number): Combination[] => {
    const combinations: Combination[] = []
    for (let i = 1; i <= columns; i++){
        for (let j = 1; j<=rows; j++){
            combinations.push({column: i, row: j})
        }
    }
    const shuffled = shuffleArray(combinations)
    return shuffled
} 

export default getCombinations