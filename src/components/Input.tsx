import { ChangeEvent, RefObject } from 'react'

type Props = {
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  refObj?: RefObject<HTMLInputElement>
  placeholder?: string
  onFocus?: () => void
  onBlur?: () => void
}

export const Input = ({
  placeholder,
  onFocus,
  refObj,
  onBlur,
  value,
  onChange,
}: Props) => {
  return (
    <input
      ref={refObj}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      onFocus={onFocus}
      onBlur={onBlur}
      className="w-96 py-2 px-3 rounded-lg outline-none border-neutral-500 focus:border-neutral-400 transition-colors bg-neutral-900 border-2"
    />
  )
}
