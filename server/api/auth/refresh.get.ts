import { getRefreshTokenByToken } from '~/server/db/refreshToken'
import { getUserById } from '~/server/db/users'

export default defineEventHandler(async (event) => {
  const cookies = parseCookies(event)

  const refreshToken = cookies.refresh_token

  if (!refreshToken) {
    return sendError(event, createError({
      statusCode: 401,
      statusMessage: 'Refresh token is invalid.',
    }))
  }

  const tokenData = await getRefreshTokenByToken(refreshToken)

  if (!tokenData) {
    return sendError(event, createError({
      statusCode: 401,
      statusMessage: 'Refresh token is invalid.',
    }))
  }

  const token = decodeRefreshToken(refreshToken)

  try {
    if (typeof token !== 'string' && token !== null) {
      const user = await getUserById(token.userId)
      if (user) {
        const { accessToken } = generateTokens(user)
        return {
          access_token: accessToken,
        }
      }
    }
  }
  catch (error) {
    return sendError(event, createError({
      statusCode: 500,
      statusMessage: 'Something went wrong.',
    }))
  }
})
