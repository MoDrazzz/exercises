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
        <p>
          Votes:{' '}
          <span className="text-green-500">+ {postData.votes.positive}</span>{' '}
          <span className="text-red-500">- {postData.votes.negative}</span>
        </p>
      </footer>
    </article>
  )
}
