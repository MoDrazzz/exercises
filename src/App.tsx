import { Searchbox } from './components'

const colors = [
  'red',
  'blue',
  'green',
  'yellow',
  'orange',
  'purple',
  'pink',
  'cyan',
  'magenta',
  'teal',
]
function App() {
  return (
    <div className="grid place-items-center text-xl bg-neutral-800 w-full h-screen">
      <Searchbox items={colors} placeholder="Search..." />
    </div>
  )
}

export default App
