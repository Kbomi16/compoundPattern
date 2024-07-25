import { ReactNode, useContext } from 'react'
import { AccordionContext } from './AccordionContext'

interface AccordionPanelProps {
  index: number
  label: string
  children: ReactNode
}

export default function AccordionPanel({
  index,
  label,
  children,
}: AccordionPanelProps) {
  const context = useContext(AccordionContext)
  if (!context) return null

  const { activeIndex, togglePanel } = context
  return (
    <div>
      <button onClick={() => togglePanel(index)}>{label}</button>
      {activeIndex === index && <div>{children}</div>}
    </div>
  )
}
