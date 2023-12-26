import { jwtDecode } from 'jwt-decode'

import type { LoginInputUser, User } from '~/server/types/user'

export default () => {
  const useAuthToken = () => useState<string>('auth_token')
  const useAuthUser = () => useState<User>('auth_user')
  const useIsAuthLoading = () => useState<boolean>('is_auth_loading', () => true)

  const setToken = (token: string) => {
    const authToken = useAuthToken()
    authToken.value = token
  }

  const setUser = (user: User) => {
    const authUser = useAuthUser()
    authUser.value = user
  }

  const setIsAuthLoading = (loading: boolean) => {
    const isAuthLoading = useIsAuthLoading()
    isAuthLoading.value = loading
  }

  const login = ({
    username,
    password,
  }: LoginInputUser) => {
    return new Promise((resolve, reject) => {
      useFetch('/api/auth/login', {
        method: 'POST',
        body: {
          username,
          password,
        },
      }).then((res) => {
        const { data } = res
        if (data && data !== null) {
          if (data.value?.access_token)
            setToken(data.value?.access_token)

          if (data.value?.user)
            setUser(data.value?.user as User)

          resolve(true)
        }
      }).catch((error) => {
        reject(error)
      })
    })
  }

  const refreshToken = () => {
    return new Promise((resolve, reject) => {
      useFetch('/api/auth/refresh').then((res) => {
        const { data } = res
        if (data && data !== null) {
          if (data.value?.access_token)
            setToken(data.value?.access_token)

          resolve(true)
        }
      }).catch((error) => {
        reject(error)
      })
    })
  }

  const getUser = () => {
    return new Promise((resolve, reject) => {
      useFetch('/api/auth/user').then((res) => {
        const { data } = res

        if (data && data !== null) {
          if (data.value?.user)
            setUser(data.value?.user as User)

          resolve(true)
        }
      }).catch((error) => {
        reject(error)
      })
    })
  }

  const reRefreshAccessToken = () => {
    const authToken = useAuthToken()

    if (authToken) {
      const jwt = jwtDecode(authToken.value)

      if (jwt.exp) {
        const newRefreshTime = jwt.exp - 60000
        setTimeout(() => {
          refreshToken()
          reRefreshAccessToken()
        }, newRefreshTime)
      }
    }
  }

  const initAuth = () => {
    return new Promise((resolve, reject) => {
      setIsAuthLoading(true)

      refreshToken().then(() => {
        getUser().then(() => {
          reRefreshAccessToken()

          resolve(true)
        }).catch((error) => {
          reject(error)
        })
      }).catch((error) => {
        reject(error)
      }).finally(() => {
        setIsAuthLoading(false)
      })
    })
  }

  return {
    login,
    useAuthUser,
    useAuthToken,
    useIsAuthLoading,
    initAuth,
  }
}
