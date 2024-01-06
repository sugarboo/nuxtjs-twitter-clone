import type { MediaFile as PrismaRawMediaFile } from 'prisma/prisma-client'

type MediaFile = PrismaRawMediaFile

type MediaFileReq = Pick<PrismaRawMediaFile, 'url' | 'providerPublicId' | 'userId' | 'tweetId'>

export {
  MediaFile,
  MediaFileReq,
}
