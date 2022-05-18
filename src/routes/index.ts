import { IncomingMessage, ServerResponse } from 'http'

import { DEFAULT_HEADER } from '../util/util'
import { healthRoutes } from './health'

const allRoutes = {
  ...healthRoutes(),

  // 404 routes
  default: (request: IncomingMessage, response: ServerResponse) => {
    response.writeHead(404, DEFAULT_HEADER)
    response.write('uuuuups, not found!')
    response.end()
  }
}

export {
  allRoutes
}
