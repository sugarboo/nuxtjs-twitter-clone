import type { User as PrismaRawUser } from 'prisma/prisma-client'

type User = PrismaRawUser

type RegisterInputUser = User & { repeatPassword: string }

type RegisterRequestUser = Pick<PrismaRawUser, 'username' | 'email' | 'password' | 'name' | 'profileImage'>

export {
  User,
  RegisterInputUser,
  RegisterRequestUser,
}
