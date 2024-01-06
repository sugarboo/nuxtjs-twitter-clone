import type { Tweet } from '../types/tweet'

export function tweetTransformer(tweet: Tweet) {
  return {
    id: tweet.id,
    text: tweet.text,
  }
}
