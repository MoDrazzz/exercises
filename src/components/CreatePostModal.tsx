import { Dispatch, SetStateAction } from 'react'

type Props = {
  setIsVisible: Dispatch<SetStateAction<boolean>>
}

export const CreatePostModal = ({ setIsVisible }: Props) => {
  return (
    <div className="absolute grid place-items-center top-0 left-0 w-full h-screen bg-neutral-950 bg-opacity-40">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="p-5 min-w-96 flex flex-col gap-5 bg-neutral-800 rounded-lg"
      >
        <input
          placeholder="Enter post title..."
          className="px-2 py-1 rounded-md"
        />
        <textarea
          className="resize-none px-2 py-1 rounded-md"
          rows={5}
          placeholder="What's on your mind?"
        />
        <div className="flex justify-between">
          <button className="text-red-500" onClick={() => setIsVisible(false)}>
            Cancel
          </button>
          <button className="text-green-500">Create Post</button>
        </div>
      </form>
    </div>
  )
}
