import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react'
import { PostType } from '../types'
import { v4 as uuidv4 } from 'uuid'

type Props = {
  setPosts: Dispatch<SetStateAction<PostType[]>>
  setIsVisible: Dispatch<SetStateAction<boolean>>
}

export const CreatePostModal = ({ setPosts, setIsVisible }: Props) => {
  const [formValues, setFormValues] = useState({
    title: '',
    content: '',
  })

  const handleCreatePost = () => {
    const title = formValues.title.trim()
    const content = formValues.content.trim()

    if (title.length === 0 || content.length === 0) {
      return alert('Fill all the fields.')
    }

    const newPost: PostType = {
      id: uuidv4(),
      date: Date.now(),
      title,
      content,
      votes: {
        positive: 0,
        negative: 0,
      },
    }

    setPosts((prev) => [...prev, newPost])
    setIsVisible(false)
  }

  const handleFieldChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div className="absolute grid place-items-center top-0 left-0 w-full h-screen bg-neutral-950 bg-opacity-40">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="p-5 min-w-96 flex flex-col gap-5 bg-neutral-800 rounded-lg"
      >
        <input
          name="title"
          placeholder="Enter post title..."
          className="px-2 py-1 rounded-md"
          value={formValues.title}
          onChange={handleFieldChange}
        />
        <textarea
          name="content"
          className="resize-none px-2 py-1 rounded-md"
          rows={5}
          placeholder="What's on your mind?"
          value={formValues.content}
          onChange={handleFieldChange}
        />
        <div className="flex justify-between">
          <button className="text-red-500" onClick={() => setIsVisible(false)}>
            Cancel
          </button>
          <button className="text-green-500" onClick={handleCreatePost}>
            Create Post
          </button>
        </div>
      </form>
    </div>
  )
}
