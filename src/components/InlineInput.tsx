import {
  Dispatch,
  KeyboardEvent,
  SetStateAction,
  useRef,
  useState,
} from 'react'

type Props = {
  value: string
  setValue: Dispatch<SetStateAction<string>>
}

export const InlineInput = ({ value, setValue }: Props) => {
  const [isActive, setIsActive] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleOnBlur = () => {
    if (!inputRef.current) return

    const inputValue = inputRef.current.value.trim()

    if (inputValue.length === 0) {
      return inputRef.current.focus()
    }

    setValue(inputValue)
    setIsActive(false)
  }

  const handlePlaceholderClick = () => {
    setIsActive(true)
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (!inputRef.current) return

    if (e.key === 'Enter') {
      inputRef.current.blur()
    }
  }

  return isActive ? (
    <input
      ref={inputRef}
      autoFocus
      defaultValue={value}
      onBlur={handleOnBlur}
      onKeyDown={handleKeyDown}
      className="bg-transparent w-full outline-none border-slate-800 border-b-2"
    />
  ) : (
    <span
      className="border-b-2 border-transparent w-full block"
      onClick={handlePlaceholderClick}
    >
      {value}
    </span>
  )
}
