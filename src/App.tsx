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
  return (
    <div className="grid place-items-center text-xl bg-neutral-800 w-full h-screen">
      <Searchbox items={colors} placeholder="Search..." />
    </div>
  )
}

export default App
