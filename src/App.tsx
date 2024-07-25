import Accordion from './components/accordion/Accordion'
import AccordionPanel from './components/accordion/AccordionPanel'
import TabPanel from './components/tabs/TabPanel'
import Tabs from './components/tabs/Tabs'

function App() {
  return (
    <div>
      <h1>CompoundPattern</h1>
      <h2>Tabs</h2>
      <Tabs>
        <TabPanel label="Tab 1">Content of Tab 1</TabPanel>
        <TabPanel label="Tab 2">Content of Tab 2</TabPanel>
        <TabPanel label="Tab 3">Content of Tab 3</TabPanel>
      </Tabs>
      <h2>Accordion</h2>
      <Accordion>
        <AccordionPanel index={0} label="Panel 1">
          Content of Panel 1
        </AccordionPanel>
        <AccordionPanel index={1} label="Panel 2">
          Content of Panel 2
        </AccordionPanel>
        <AccordionPanel index={2} label="Panel 3">
          Content of Panel 3
        </AccordionPanel>
      </Accordion>
    </div>
  )
}

export default App
