import type { Tweet as PrismaRawTweet } from 'prisma/prisma-client'

type Tweet = PrismaRawTweet

type TweetReq = Pick<Tweet, 'text' | 'authorId'>

export {
  Tweet,
  TweetReq,
}
