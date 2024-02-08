import { PostVotes } from '.'
import { PostType, UpdatePostFunctionType } from '../types'

type Props = {
  postData: PostType
  updatePost: UpdatePostFunctionType
  handleDeletePost: (id: string) => void
}

export const Post = ({ postData, updatePost, handleDeletePost }: Props) => {
  const stringDate = new Date(postData.date).toLocaleString('en-gb', {
    dateStyle: 'long',
    timeStyle: 'short',
  })

  return (
    <article className="border-b-2 p-5 border-neutral-400 last:border-b-0">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-medium mb-2">{postData.title}</h3>
        <button onClick={() => handleDeletePost(postData.id)}>🗑️</button>
      </div>
      <p>{postData.content}</p>
      <footer className="flex mt-1 justify-between text-neutral-600">
        <p>{stringDate}</p>
        <PostVotes postData={postData} updatePost={updatePost} />
      </footer>
    </article>
  )
}
