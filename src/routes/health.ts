import { IncomingMessage, ServerResponse } from 'http'

const healthRoutes = () => ({
  '/health:get': async (request: IncomingMessage, response: ServerResponse) => {
    response.write(JSON.stringify({
      success: true
    }))

    return response.end()
  }
})

export {
  healthRoutes
}
