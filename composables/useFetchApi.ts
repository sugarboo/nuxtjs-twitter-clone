export default (
  url = '',
  options = { headers: {} },
) => {
  const { useAuthToken } = useAuth()

  return useFetch(url, {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${useAuthToken().value}`,
    },
  })
}
