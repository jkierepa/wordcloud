import fetchWordSet from "./fetchWordSet";
import { WordSet } from "@appTypes/appTypes";

const fetchRandomWordSet = async (allSets: string[]): Promise<WordSet> => {
    const randomSet = allSets[Math.floor(Math.random() * allSets.length)];
    const set = fetchWordSet(randomSet)
    return set
}

export default fetchRandomWordSet