import React, { ReactElement, ReactNode } from 'react'
import { useState } from 'react'

type TabPanelProps = {
  label: string
  children: ReactNode
}

type TabsProps = {
  children: ReactElement<TabPanelProps> | ReactElement<TabPanelProps>[]
}

export default function Tabs({ children }: TabsProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  const handleTabClick = (index: number) => {
    setActiveIndex(index)
  }

  return (
    <div>
      <div>
        {React.Children.map(
          children,
          (child: ReactElement<TabPanelProps>, index) => (
            <button onClick={() => handleTabClick(index)}>
              {child.props.label}
            </button>
          )
        )}
      </div>
      <div className="tab-content">
        {React.Children.toArray(children)[activeIndex]}
      </div>
    </div>
  )
}
