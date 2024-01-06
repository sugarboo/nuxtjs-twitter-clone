import type { TweetReq } from '../types/tweet'

import { prisma } from './index'

export function createTweet(tweetData: TweetReq) {
  return prisma.tweet.create({
    data: tweetData,
  })
}
