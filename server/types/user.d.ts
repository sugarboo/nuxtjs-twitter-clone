import type { User as PrismaRawUser } from 'prisma/prisma-client'

type User = PrismaRawUser

type RegisterInputUser = User & { repeatPassword: string }

type RegisterRequestUser = Pick<PrismaRawUser, 'username' | 'email' | 'password' | 'name' | 'profileImage'>

type LoginInputUser = Pick<PrismaRawUser, 'username' | 'password'>

export {
  User,
  RegisterInputUser,
  RegisterRequestUser,
  LoginInputUser,
}
