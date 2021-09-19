const toggleSelection = (state: string[], selected: string): string[] => {
    const len =  state.length
    const filtered = state.filter((s) => s !== selected)
    if (len === filtered.length) {
        return [...state, selected]
    } else {
        return filtered
    }
}

export default toggleSelection