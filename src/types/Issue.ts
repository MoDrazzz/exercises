export type Issue = {
  id: number
  created_at: string
  title: string
  user: {
    login: string
  }
}
