type Props = {
  items: string[]
  handleItemClick: (item: string) => void
}

export const DropdownList = ({ items, handleItemClick }: Props) => {
  return (
    <ul className="absolute top-full mt-1 bg-neutral-900 border-2 rounded-lg w-full max-h-40 overflow-auto p-1 border-neutral-400">
      {items.map((item, index) => (
        <li
          key={index}
          onClick={() => handleItemClick(item)}
          className="py-2 px-3 capitalize rounded-lg cursor-pointer hover:bg-neutral-800"
        >
          {item}
        </li>
      ))}
    </ul>
  )
}
