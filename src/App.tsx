import { PostsWrapper } from './components'

function App() {
  return (
    <div className="grid place-items-center w-full text-lg h-screen text-neutral-50 bg-neutral-800">
      <div>
        <h1 className="text-4xl font-bold mb-2">Microblog</h1>
        <PostsWrapper />
      </div>
    </div>
  )
}

export default App
