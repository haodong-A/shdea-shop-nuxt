export function useHelpers() {
  const isShowingMobileMenu = useState<boolean>('isShowingMobileMenu', () => false)

  function toggleMobileMenu(state: boolean | undefined = undefined): void {
    isShowingMobileMenu.value = state ?? !isShowingMobileMenu.value
  }
  return {
    isShowingMobileMenu,
    toggleMobileMenu,
  }
}
