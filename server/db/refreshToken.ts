import type { RequestRefreshToken } from '../types/refreshToken'

import { prisma } from '.'

function createRefreshToken(refreshToken: RequestRefreshToken) {
  return prisma.refreshToken.create({
    data: refreshToken,
  })
}

function getRefreshTokenByToken(token: string) {
  return prisma.refreshToken.findUnique({
    where: {
      token,
    },
  })
}

export {
  createRefreshToken,
  getRefreshTokenByToken,
}
