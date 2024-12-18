import { acceptHMRUpdate, defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const userInfo = ref({
    username: '',
    avatar: 'https://p3-pc-sign.douyinpic.com/aweme-avatar/tos-cn-avt-0015_931ad927859a8724be12d4005327d691~tplv-8yspqt5zfm-300x300.webp?lk3s=93de098e&x-expires=1734710400&x-signature=1HSpaPT6khtfvFwjobqp9SIW5ns%3D&from=2480802190&s=profile&se=false&sc=avatar&l=2024121900314893A8F8DA5C8D7D1FED4E',
    email: '1282297464@qq.com',
  })
  /**
   * Current named of the user.
   */
  const savedName = ref('')
  const previousNames = ref(new Set<string>())

  const usedNames = computed(() => Array.from(previousNames.value))
  const otherNames = computed(() => usedNames.value.filter(name => name !== savedName.value))

  /**
   * Changes the current name of the user and saves the one that was used
   * before.
   *
   * @param name - new name to set
   */
  function setNewName(name: string) {
    if (savedName.value)
      previousNames.value.add(savedName.value)

    savedName.value = name
  }

  return {
    setNewName,
    otherNames,
    savedName,
    userInfo,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
