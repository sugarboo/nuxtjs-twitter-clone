import type { MediaFile } from '../types/mediaType'

export function mediaFilesTransformer(mediaFile: MediaFile) {
  return {
    id: mediaFile.id,
    url: mediaFile.url,
  }
}
