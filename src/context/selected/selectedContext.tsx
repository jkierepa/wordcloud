import { createContext, useContext } from "react"

export type SelectedContextType = {
  selected: string[]
  setSelected:(sel: string) => void
}

export const SelectedContext = createContext<SelectedContextType>({
    selected: [],
    setSelected: () => undefined,
})

const useSelectedContext = () => useContext(SelectedContext)

export default useSelectedContext
