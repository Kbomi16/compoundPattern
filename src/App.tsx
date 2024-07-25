import TabPanel from './components/tabs/TabPanel'
import Tabs from './components/tabs/Tabs'

function App() {
  return (
    <div>
      <h1>CompoundPattern</h1>
      <Tabs>
        <TabPanel label="Tab 1">Content of Tab 1</TabPanel>
        <TabPanel label="Tab 2">Content of Tab 2</TabPanel>
        <TabPanel label="Tab 3">Content of Tab 3</TabPanel>
      </Tabs>
    </div>
  )
}

export default App
