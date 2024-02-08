import { useState } from 'react'
import { sampleData } from '../lib'
import { PostType, UpdatePostFunctionType } from '../types'
import { CreatePostModal, Post } from '.'

export const PostsWrapper = () => {
  const [posts, setPosts] = useState<PostType[]>(sampleData.posts)
  const [isCreatePostModalVisible, setIsCreatePostModalVisible] =
    useState(false)

  const updatePost: UpdatePostFunctionType = (newPost) => {
    setPosts((prev) =>
      prev.map((post) => (post.id === newPost.id ? newPost : post)),
    )
  }

  const handleDeletePost = (id: string) => {
    setPosts((prev) => prev.filter((post) => post.id !== id))
  }

  const sortPosts = (posts: PostType[]) => {
    return posts.sort((postA, postB) => (postA.date > postB.date ? -1 : 1))
  }

  return (
    <div className="bg-neutral-50 text-neutral-950 w-[75vw] p-6 rounded-lg">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-emdium mb-5">
          Explore {posts.length} articles in this blog!
        </h2>
        <button onClick={() => setIsCreatePostModalVisible(true)}>➕</button>
      </div>
      <div className="overflow-auto max-h-[50vh]">
        {sortPosts(posts).map((post) => (
          <Post
            key={post.id}
            postData={post}
            updatePost={updatePost}
            handleDeletePost={handleDeletePost}
          />
        ))}
      </div>
      {isCreatePostModalVisible && (
        <CreatePostModal
          setPosts={setPosts}
          setIsVisible={setIsCreatePostModalVisible}
        />
      )}
    </div>
  )
}
