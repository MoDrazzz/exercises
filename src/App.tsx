import { useEffect, useRef, useState } from 'react'
import { SecretContent } from './components'

const KONAMI_SECRET_CODE = 'injects3crets'
const KONAMI_AUTORESET_TIME = 5000
const HIDE_CONTENT_TIME = 15000

const initialRemainingTime = HIDE_CONTENT_TIME / 1000

function App() {
  const [writtenKonami, setWrittenKonami] = useState('')
  const [isKonamiEntered, setIsKonamiEntered] = useState(false)
  const [remainingTime, setRemainingTime] = useState(initialRemainingTime)
  const resetKonamiTimeout = useRef<NodeJS.Timeout>()
  const hideContentTimeout = useRef<NodeJS.Timeout>()
  const countdownInterval = useRef<NodeJS.Timeout>()

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setWrittenKonami('')
        clearTimeout(resetKonamiTimeout.current)
        return
      }

      clearTimeout(resetKonamiTimeout.current)
      resetKonamiTimeout.current = setTimeout(() => {
        setWrittenKonami('')
      }, KONAMI_AUTORESET_TIME)

      setWrittenKonami((prev) => (e.key.length > 1 ? prev : prev + e.key))
    }

    window.addEventListener('keydown', handleKeyPress)

    return () => {
      window.removeEventListener('keydown', handleKeyPress)
      clearTimeout(resetKonamiTimeout.current)
      clearTimeout(hideContentTimeout.current)
      clearInterval(countdownInterval.current)
    }
  }, [])

  useEffect(() => {
    if (writtenKonami === KONAMI_SECRET_CODE) {
      setWrittenKonami('')
      setIsKonamiEntered(true)
      setRemainingTime(initialRemainingTime)

      clearTimeout(hideContentTimeout.current)
      hideContentTimeout.current = setTimeout(() => {
        setIsKonamiEntered(false)
        clearInterval(countdownInterval.current)
      }, HIDE_CONTENT_TIME)

      clearInterval(countdownInterval.current)
      countdownInterval.current = setInterval(() => {
        setRemainingTime((prev) => prev - 1)
      }, 1000)
    }
  }, [writtenKonami])

  return (
    <div className="w-full h-screen bg-neutral-800 text-slate-50 flex justify-center items-center gap-10 flex-col">
      <header>
        <h1 className="text-3xl font-bold">Sweet Kittens!</h1>
      </header>
      {isKonamiEntered ? (
        <>
          <h1>Secret Content</h1>
          <p>Time remaining: {remainingTime}s</p>
          <SecretContent />
        </>
      ) : (
        <img src="http://placekitten.com/200/300" alt="Sweet cat" />
      )}
    </div>
  )
}

export default App
