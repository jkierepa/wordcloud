import { WordSet } from "@appTypes/appTypes";

const fetchWordSet = async (set: string): Promise<WordSet> => {
    const uri = `${set}.json`
    const response = await fetch(uri)
    const data = await response.json()
    return data
}

export default fetchWordSet