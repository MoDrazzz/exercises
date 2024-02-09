import { useEffect, useState } from 'react'
import { Issue } from '../types'

export const SecretContent = () => {
  const [issues, setIssues] = useState<Issue[]>([])

  useEffect(() => {
    const getIssues = async () => {
      const issues = await fetch(
        'https://api.github.com/repos/elixir-lang/elixir/issues?sort=created&direction=desc&per_page=5',
      )
        .then((res) => res.json())
        .catch((err) => console.log(err))

      setIssues(issues)
    }

    getIssues()
  }, [])

  if (!issues.length) return <p>Fetching...</p>
  return (
    <ul>
      {issues.map((issue) => (
        <li className="mb-1" key={issue.id}>
          <p>
            <b>{issue.user.login}:</b> {issue.title}
          </p>
        </li>
      ))}
    </ul>
  )
}
