import { useEffect, useState } from 'react'
import { DropdownList, Input } from '.'

type Props = {
  items: string[]
  placeholder: string
}

export const Searchbox = ({ items, placeholder }: Props) => {
  const [isActive, setIsActive] = useState(false)
  const [query, setQuery] = useState('')
  const [filteredItems, setFilteredItems] = useState(items)

  useEffect(() => {
    const newFilteredItems = items.filter((item) =>
      item.toLowerCase().startsWith(query.toLowerCase()),
    )

    setFilteredItems(newFilteredItems)
  }, [query, items])

  return (
    <div className="relative text-neutral-100">
      <Input
        placeholder={placeholder}
        onFocus={() => setIsActive(true)}
        onBlur={() => setIsActive(false)}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {isActive && <DropdownList items={filteredItems} handleItemClick={() => {}} />}
    </div>
  )
}
