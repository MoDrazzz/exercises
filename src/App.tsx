import { useEffect, useState } from 'react'

const KONAMI_SECRET_CODE = 'injects3crets'

function App() {
  const [writtenKonami, setWrittenKonami] = useState('')

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setWrittenKonami('')
        return
      }

      setWrittenKonami((prev) => (e.key.length > 1 ? prev : prev + e.key))
    }

    window.addEventListener('keydown', handleKeyPress)

    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [])

  useEffect(() => {
    if (writtenKonami === KONAMI_SECRET_CODE) {
      console.log('Konami entered correctly.')
    }
  }, [writtenKonami])

  return (
    <div className="w-full h-screen bg-neutral-800 text-slate-50 flex justify-center items-center gap-10 flex-col">
      <header>
        <h1 className="text-3xl font-bold">Sweet Kittens!</h1>
      </header>
      <img src="http://placekitten.com/200/300" alt="Sweet cat" />
    </div>
  )
}

export default App
