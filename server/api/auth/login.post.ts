import bcrypt from 'bcrypt'

import type { User } from '../../types/user'

import { getUserByUsername } from '../../db/users'
import { createRefreshToken } from '../../db/refreshToken'
import { userTransformer } from '../../transformers/user'
import { generateTokens, sendRefreshToken } from '../../utils/jwt'

export default defineEventHandler(async (event) => {
  const body: User = await readBody(event)

  const { username, password } = body

  if (!username || !password) {
    return sendError(event, createError({
      statusCode: 400,
      statusMessage: 'Invalid params.',
    }))
  }

  const user = await getUserByUsername(username)

  if (!user) {
    return sendError(event, createError({
      statusCode: 400,
      statusMessage: 'Username or password is invalid.',
    }))
  }

  const doesPasswordMatch = await bcrypt.compare(password, user.password)
  if (!doesPasswordMatch) {
    return sendError(event, createError({
      statusCode: 400,
      statusMessage: 'Username or password is invalid.',
    }))
  }

  const { accessToken, refreshToken } = generateTokens(user)

  await createRefreshToken({
    token: refreshToken,
    userId: user.id,
  })

  sendRefreshToken(event, refreshToken)

  return {
    access_token: accessToken,
    user: userTransformer(user),
  }
})
