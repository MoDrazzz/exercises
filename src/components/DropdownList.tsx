import { DropdownItem } from '../types'

type Props = {
  items: DropdownItem[]
  handleItemClick: (item: DropdownItem) => void
}

export const DropdownList = ({ items, handleItemClick }: Props) => {
  return (
    <ul className="absolute top-full mt-1 bg-neutral-900 border-2 rounded-lg w-full max-h-40 overflow-auto p-1 border-neutral-400">
      {items.map((item) => (
        <li
          key={item.id}
          onMouseDown={() => handleItemClick(item)}
          className="py-2 px-3 capitalize rounded-lg cursor-pointer hover:bg-neutral-800"
        >
          {item.value}
        </li>
      ))}
    </ul>
  )
}
