import bcrypt from 'bcrypt'

import type { RegisterRequestUser } from '../types/user'

import { prisma } from '.'

function createUser(userData: RegisterRequestUser) {
  const finalUserData = {
    ...userData,
    password: bcrypt.hashSync(userData.password, 10),
  }

  return prisma.user.create({
    data: finalUserData,
  })
}

function getUserByUsername(username: string) {
  return prisma.user.findUnique({
    where: {
      username,
    },
  })
}

function getUserById(id: number) {
  return prisma.user.findUnique({
    where: {
      id,
    },
  })
}

export {
  createUser,
  getUserByUsername,
  getUserById,
}
