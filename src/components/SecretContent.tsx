import { useEffect, useState } from 'react'
import { Issue } from '../types'

export const SecretContent = () => {
  const [issues, setIssues] = useState<Issue[]>([])

  useEffect(() => {
    const getIssues = async () => {
      const issues = await fetch(
        'https://api.github.com/repos/elixir-lang/elixir/issues',
      )
        .then((res) => res.json())
        .catch((err) => console.log(err))

      setIssues(issues)
    }

    getIssues()
  }, [])

  return (
    <ul>
      {issues.map((issue) => (
        <li className="mb-1">
          {issue.user.login}: {issue.title}
        </li>
      ))}
    </ul>
  )
}
