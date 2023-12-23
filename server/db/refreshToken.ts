import type { RequestRefreshToken } from '../types/refreshToken'

import { prisma } from '.'

function createRefreshToken(refreshToken: RequestRefreshToken) {
  return prisma.refreshToken.create({
    data: refreshToken,
  })
}

export {
  createRefreshToken,
}
