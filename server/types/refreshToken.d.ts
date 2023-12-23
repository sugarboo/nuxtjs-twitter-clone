import type { RefreshToken as PrismaRawRefreshToken } from 'prisma/prisma-client'

type RefreshToken = PrismaRawRefreshToken

type RequestRefreshToken = Pick<RefreshToken, 'token' | 'userId'>

export {
  RefreshToken,
  RequestRefreshToken,
}
