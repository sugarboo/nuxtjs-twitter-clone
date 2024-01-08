import type { TweetReq } from '../types/tweet'

import { prisma } from './index'

function createTweet(tweetData: TweetReq) {
  return prisma.tweet.create({
    data: tweetData,
  })
}

function getTweets() {
  return prisma.tweet.findMany({
    include: {
      author: true,
      mediaFiles: true,
      replyTo: true,
      replies: true,
    },
  })
}

export {
  createTweet,
  getTweets,
}
