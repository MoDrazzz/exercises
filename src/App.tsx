import { useEffect, useState } from 'react'
import { Searchbox } from './components'
import { DropdownItem } from './types'

const colors: DropdownItem[] = [
  { id: 1, value: 'red' },
  { id: 2, value: 'blue' },
  { id: 3, value: 'green' },
  { id: 4, value: 'yellow' },
  { id: 5, value: 'orange' },
  { id: 6, value: 'purple' },
  { id: 7, value: 'pink' },
  { id: 8, value: 'cyan' },
  { id: 9, value: 'magenta' },
  { id: 10, value: 'teal' },
]

function App() {
  const [selectedItem, setSelectedItem] = useState(colors[0])

  useEffect(() => {
    document.title = selectedItem.value
  }, [selectedItem])

  return (
    <div className="grid place-items-center text-xl bg-neutral-800 w-full h-screen">
      <div>
        <Searchbox
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
          items={colors}
          placeholder="Search..."
        />
        <span
          className="w-40 mt-10 mx-auto block h-20"
          style={{
            backgroundColor: selectedItem.value,
          }}
        />
      </div>
    </div>
  )
}

export default App
