import { IncomingMessage, ServerResponse } from 'http'
import { parse } from 'node:url'

import { allRoutes } from './routes'
import { DEFAULT_HEADER } from './util/util'

async function handler (request: IncomingMessage, response: ServerResponse): Promise<any> {
  const { url, method } = request
  const { pathname } = parse(url as string, true)
  const key = `${pathname}:${method?.toLowerCase()}`
  const chosen = allRoutes[key] || allRoutes.default

  return await Promise.resolve(chosen(request, response)).catch(handlerError(response))
}

function handlerError (response: ServerResponse) {
  return error => {
    console.log('Something bad has happened**', error.stack)
    response.writeHead(500, DEFAULT_HEADER)
    response.write(JSON.stringify({
      error: 'internet server error!!'
    }))

    return response.end()
  }
}

export default handler
