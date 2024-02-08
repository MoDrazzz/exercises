import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react'
import { DropdownList, Input } from '.'
import { DropdownItem } from '../types'

type Props = {
  selectedItem: DropdownItem
  setSelectedItem: Dispatch<SetStateAction<DropdownItem>>
  items: DropdownItem[]
  placeholder: string
}

export const Searchbox = ({
  selectedItem,
  setSelectedItem,
  items,
  placeholder,
}: Props) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [isActive, setIsActive] = useState(false)
  const [query, setQuery] = useState(selectedItem.value)
  const [filteredItems, setFilteredItems] = useState(items)

  const handleSelectItem = (selectedItem: DropdownItem) => {
    setSelectedItem(selectedItem)
    setQuery(selectedItem.value)
  }

  const handleClear = () => {
    if (!inputRef.current) return

    setQuery('')
    inputRef.current.focus()
  }

  useEffect(() => {
    const newFilteredItems = items.filter((item) =>
      item.value.toLowerCase().startsWith(query.toLowerCase()),
    )

    setFilteredItems(newFilteredItems)
  }, [query, items])

  return (
    <div className="relative text-neutral-100">
      <div className="relative">
        <Input
          refObj={inputRef}
          placeholder={placeholder}
          onFocus={() => setIsActive(true)}
          onBlur={() => setIsActive(false)}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          onClick={handleClear}
          className="absolute top-1/2 -translate-y-1/2 right-4"
        >
          🗑️
        </button>
      </div>
      {isActive && (
        <DropdownList
          selectedItem={selectedItem}
          handleSelectItem={handleSelectItem}
          items={filteredItems}
        />
      )}
    </div>
  )
}
