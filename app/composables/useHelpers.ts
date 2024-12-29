export function useHelpers() {
  const isShowingMobileMenu = useState<boolean>('isShowingMobileMenu', () => false)
  const productsPerPage: number = 24
  function toggleMobileMenu(state: boolean | undefined = undefined): void {
    isShowingMobileMenu.value = state ?? !isShowingMobileMenu.value
  }

  /**
   * Strips HTML tags from a string.
   * @param {string} str - The string to strip.
   * @returns {string} The stripped string.
   */
  const stripHtml = (str: string | null | undefined = ''): string => {
    return str === null ? '' : str.replace(/(<([^>]+)>)/g, '')
  }
  return {
    stripHtml,
    isShowingMobileMenu,
    toggleMobileMenu,
    productsPerPage,
  }
}
