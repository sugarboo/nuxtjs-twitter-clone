import type { User } from 'prisma/prisma-client'
import type { EventHandlerRequest, H3Event } from 'h3'

import jwt from 'jsonwebtoken'

const runtimeConfig = useRuntimeConfig()

function generateAccessToken(user: User) {
  return jwt.sign(
    { userId: user.id },
    runtimeConfig.jwtAccessSecret,
    { expiresIn: '10m' },
  )
}

function generateRefreshToken(user: User) {
  return jwt.sign(
    { userId: user.id },
    runtimeConfig.jwtRefreshSecret,
    { expiresIn: '4h' },
  )
}

function generateTokens(user: User) {
  const accessToken = generateAccessToken(user)
  const refreshToken = generateRefreshToken(user)

  return {
    accessToken,
    refreshToken,
  }
}

function sendRefreshToken(
  event: H3Event<EventHandlerRequest>,
  token: string,
) {
  setCookie(event, 'refresh_token', token, {
    httpOnly: true,
    sameSite: true,
  })
}

export {
  generateAccessToken,
  generateRefreshToken,
  sendRefreshToken,
  generateTokens,
}
