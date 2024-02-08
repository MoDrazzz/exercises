import { PostType, UpdatePostFunctionType } from '../types'

type Props = {
  postData: PostType
  updatePost: UpdatePostFunctionType
}

export const PostVotes = ({ postData, updatePost }: Props) => {
  const handleVote = (type: keyof PostType['votes']) => {
    updatePost({
      ...postData,
      votes: {
        ...postData.votes,
        [type]: postData.votes[type] + 1,
      },
    })
  }

  return (
    <p>
      Votes:{' '}
      <span
        className="cursor-pointer text-green-500"
        onClick={() => handleVote('positive')}
      >
        + {postData.votes.positive}
      </span>
      {' | '}
      <span
        className="cursor-pointer text-red-500"
        onClick={() => handleVote('negative')}
      >
        - {postData.votes.negative}
      </span>
    </p>
  )
}
