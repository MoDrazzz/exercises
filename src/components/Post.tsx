import { PostVotes } from '.'
import { PostType } from '../types'

type Props = {
  postData: PostType
}

export const Post = ({ postData }: Props) => {
  const stringDate = new Date(postData.date).toLocaleString('en-gb', {
    dateStyle: 'long',
    timeStyle: 'short',
  })

  return (
    <article className="border-b-2 p-5 border-neutral-400 last:border-b-0">
      <h3 className="text-xl font-medium mb-2">{postData.title}</h3>
      <p>{postData.content}</p>
      <footer className="flex mt-1 justify-between text-neutral-600">
        <p>{stringDate}</p>
        <PostVotes postData={postData} />
      </footer>
    </article>
  )
}
