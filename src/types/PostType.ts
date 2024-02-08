export type PostType = {
  id: string
  date: number
  title: string
  content: string
  votes: {
    positive: number
    negative: number
  }
}
