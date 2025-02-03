import { render, useEffect, useState } from 'hono/jsx/dom'

const Component = () => {
  const [message, setMessage] = useState('')

  useEffect(() => {
    ;(async () => {
      const res = await fetch('/api')
      const data = await res.json<{ message: string }>()
      setMessage(data.message)
    })()
  })
  return <h1>{message}</h1>
}

function App() {
  return <Component />
}

render(<App />, document.getElementById('root')!)
