import { useState } from 'react'
import { PostType, UpdatePostFunctionType } from '../types'

type Props = {
  postData: PostType
  updatePost: UpdatePostFunctionType
}

export const PostVotes = ({ postData, updatePost }: Props) => {
  const [hasVoted, setHasVoted] = useState(false)

  const handleVote = (type: keyof PostType['votes']) => {
    if (hasVoted) return alert("You've voted on that post already.")

    updatePost({
      ...postData,
      votes: {
        ...postData.votes,
        [type]: postData.votes[type] + 1,
      },
    })
    setHasVoted(true)
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
