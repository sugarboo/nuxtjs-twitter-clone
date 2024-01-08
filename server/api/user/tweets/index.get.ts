import { getTweets } from '~/server/db/tweet'
import { tweetTransformer } from '~/server/transformers/tweet'

export default defineEventHandler(async () => {
  const tweets = await getTweets()

  return {
    tweets: tweets.map(tweetTransformer),
  }
})
