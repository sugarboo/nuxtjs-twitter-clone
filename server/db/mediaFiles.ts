import type { MediaFileReq } from '../types/mediaType'

import { prisma } from './index'

export function createMediaFiles(mediaFile: MediaFileReq) {
  return prisma.mediaFile.create({
    data: mediaFile,
  })
}
