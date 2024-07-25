import { ReactNode } from 'react'

type TabPanelProps = {
  label: string
  children: ReactNode
}
export default function TabPanel({ children }: TabPanelProps) {
  return <div>{children}</div>
}
