export function useHelpers() {
  const isShowingMobileMenu = useState<boolean>('isShowingMobileMenu', () => false)
  const productsPerPage: number = 24
  function toggleMobileMenu(state: boolean | undefined = undefined): void {
    isShowingMobileMenu.value = state ?? !isShowingMobileMenu.value
  }
  return {
    isShowingMobileMenu,
    toggleMobileMenu,
    productsPerPage,
  }
}
