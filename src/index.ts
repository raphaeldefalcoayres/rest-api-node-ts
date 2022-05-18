import http from 'node:http'

import handler from './handler'

const PORT = process.env.PORT ?? 3333

const server = http.createServer(handler)

server.listen(PORT, () => console.log(`server is running at  ${PORT}`))

export {
  server
}
