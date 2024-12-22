export function useAuth() {
  const viewer = useState<User.Info | null>('viewer', () => null)
  const isPending = useState<boolean>('isPending', () => false)

  const avatar = computed(() => viewer.value?.avatar ?? null)

  function logoutUser() {
    console.log('logoutUser.....')
  }
  return {
    viewer,
    avatar,
    isPending,
    logoutUser,
  }
}
