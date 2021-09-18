const fetchSets = async (): Promise<string[]> => {
    const response = await fetch("set.json")
    const data = await response.json()
    return data.set
}

export default fetchSets