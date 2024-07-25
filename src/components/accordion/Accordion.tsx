import { ReactNode } from 'react'
import AccordionProvider from './AccordionProvider'

export default function Accordion({ children }: { children: ReactNode }) {
  return <AccordionProvider>{children}</AccordionProvider>
}
