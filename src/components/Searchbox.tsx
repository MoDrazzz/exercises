import { useEffect, useState } from 'react'
import { Input } from '.'

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
      {isActive && (
        <ul className="absolute top-full mt-1 bg-neutral-900 border-2 rounded-lg w-full max-h-40 overflow-auto p-1 border-neutral-400">
          {filteredItems.map((item, index) => (
            <li
              key={index}
              className="py-2 px-3 capitalize rounded-lg cursor-pointer hover:bg-neutral-800"
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
