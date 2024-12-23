export function useAuth() {
  const viewer = useState<User.Info | null>('viewer', () => null)
  const isPending = useState<boolean>('isPending', () => false)

  const avatar = computed(() => viewer.value?.avatar ?? null)

  function logoutUser() {
    console.log('logoutUser.....')
  }

  function register(info: { username: string, password: string, email: string, code: string }) {
    console.log(info)
  }

  function login(info: { account: string, password: string }) {
    console.log(info)
  }

  function resetPw(email: string){
    console.log(email)
  }
  return {
    viewer,
    avatar,
    isPending,
    login,
    logoutUser,
    register,
  }
}
