import { createContext } from 'react'

interface AccordionContextType {
  activeIndex: number | null
  togglePanel: (index: number) => void
}

export const AccordionContext = createContext<AccordionContextType | undefined>(
  undefined
)
