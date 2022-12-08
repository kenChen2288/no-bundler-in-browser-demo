import http from 'node:http'
import connect from 'connect'
import sirv from 'sirv'
import compression from 'compression'

const app = connect()
const assets = sirv('public', {
  maxAge: 1000, // 1Y
  immutable: true,
  dev: true,
})
const nodeModules = sirv('node_modules', {
  maxAge: 1000, // 1Y
  immutable: true,
  dev: true,
})

app.use(compression())
app.use(assets)
app.use('/node_modules', nodeModules)

const server = http.createServer(app)

server.listen(3004, () => {
  console.log('Server running at http://localhost:3004')
})
