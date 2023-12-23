import type { User } from '../types/user'

function userTransformer(user: User) {
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    username: user.username,
    profileImage: user.profileImage,
  }
}

export {
  userTransformer,
}
