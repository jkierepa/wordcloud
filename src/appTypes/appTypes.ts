export type CustomStyle = {[key: string]: string} | string
export type WordSet = {
    question: string; 
    all_words: string[];
    good_words: string[];
}

export type Combination = {
    column: number,
    row: number
}