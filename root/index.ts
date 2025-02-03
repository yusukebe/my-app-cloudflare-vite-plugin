import { Hono } from 'hono'

const app = new Hono()

app.get('/api', (c) => {
  return c.json({
    message: 'Hello! from API'
  })
})

export default app
