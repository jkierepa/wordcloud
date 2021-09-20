import { createContext, useContext } from "react"

export type CheckContextType = {
  isChecked: boolean
  setIsChecked:(check: boolean) => void
}

export const CheckContext = createContext<CheckContextType>({
  isChecked: false,
  setIsChecked: () => undefined,
})

const useCheckContext = () => useContext(CheckContext)

export default useCheckContext
