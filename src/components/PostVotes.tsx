import { PostType } from '../types'

type Props = {
  postData: PostType
}

export const PostVotes = ({ postData }: Props) => {
  return (
    <p>
      Votes: <span className="text-green-500">+ {postData.votes.positive}</span>{' '}
      <span className="text-red-500">- {postData.votes.negative}</span>
    </p>
  )
}
