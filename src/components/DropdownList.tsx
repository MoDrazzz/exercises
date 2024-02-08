import { DropdownItem } from '../types'

type Props = {
  selectedItem: DropdownItem
  handleSelectItem: (selectedItem: DropdownItem) => void
  items: DropdownItem[]
}

export const DropdownList = ({
  selectedItem,
  handleSelectItem,
  items,
}: Props) => {
  return (
    <ul className="absolute top-full mt-1 bg-neutral-900 border-2 rounded-lg w-full max-h-40 overflow-auto p-1 border-neutral-400">
      {items.map((item) => (
        <li
          key={item.id}
          onMouseDown={() => handleSelectItem(item)}
          className="py-2 px-3 rounded-lg cursor-pointer hover:bg-neutral-800"
          style={{
            backgroundColor:
              selectedItem.id === item.id ? 'darkgreen' : undefined,
          }}
        >
          {item.value}
        </li>
      ))}
      {items.length === 0 && (
        <p className="py-2 px-3 text-center">No items found.</p>
      )}
    </ul>
  )
}
