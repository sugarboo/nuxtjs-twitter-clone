import URLPattern from 'url-pattern'
import { decodeAccessToken } from '../utils/jwt'
import { getUserById } from '../db/users'

export default defineEventHandler(async (event) => {
  const endpoints = [
    '/api/auth/user',
    '/api/user/tweets',
  ]

  const isHandledByThisMiddleware = endpoints.some((endpoint) => {
    const pattern = new URLPattern(endpoint)

    const { url = '' } = event.node.req
    return pattern.match(url)
  })

  if (isHandledByThisMiddleware) {
    const token = event.node.req.headers.authorization?.split(' ')[1]

    const decoded = decodeAccessToken(token as string)

    if (!decoded) {
      return sendError(event, createError({
        statusCode: 401,
        statusMessage: 'Unauthorized',
      }))
    }

    try {
      if (typeof decoded !== 'string' && decoded.userId) {
        const userId = decoded.userId
        const user = await getUserById(userId)
        event.context.auth = {
          user,
        }
      }
    }
    catch (error) {

    }
  }
})
