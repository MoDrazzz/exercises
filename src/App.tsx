import { useState } from 'react'
import { InlineInput } from './components'

const INITIAL_VALUE = 'Placeholder Value'

function App() {
  const [inlineInputValue, setInlineInputValue] = useState(INITIAL_VALUE)

  return (
    <div className="bg-neutral-800 grid place-items-center h-screen w-full">
      <div className="w-64 p-5 bg-neutral-50 text-neutral-800 rounded-lg">
        <h1 className="text-2xl mb-2">Form</h1>
        <InlineInput value={inlineInputValue} setValue={setInlineInputValue} />
      </div>
    </div>
  )
}

export default App
