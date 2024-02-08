import { useState } from 'react'
import { sampleData } from '../lib'
import { PostType } from '../types'
import { Post } from '.'

export const PostsWrapper = () => {
  const [posts] = useState<PostType[]>(sampleData.posts)

  return (
    <div className="bg-neutral-50 text-neutral-950 w-[75vw] p-6 rounded-lg">
      <h2 className="text-2xl font-emdium mb-5">
        Explore {posts.length} articles in this blog!
      </h2>
      <div className="overflow-auto max-h-[50vh]">
        {posts.map((post) => (
          <Post key={post.id} postData={post} />
        ))}
      </div>
    </div>
  )
}
