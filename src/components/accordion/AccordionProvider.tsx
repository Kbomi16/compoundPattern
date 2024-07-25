import { ReactNode, useState } from 'react'
import { AccordionContext } from './AccordionContext'

export default function AccordionProvider({
  children,
}: {
  children: ReactNode
}) {
  // 어떤 패널이 활성화되어 있는지를 관리
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  // 클릭된 패널의 인덱스를 설정하거나,
  // 이미 활성화된 패널을 다시 클릭했을 때는 비활성화
  const togglePanel = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index))
  }

  return (
    <AccordionContext.Provider value={{ activeIndex, togglePanel }}>
      {children}
    </AccordionContext.Provider>
  )
}
