export function useSearching() {
  const route = useRoute()
  const isShowingSearch = useState<boolean>('isShowingSearch', () => false)
  const toggleSearch = (): void => {
    isShowingSearch.value = !isShowingSearch.value
  }

  return { route, isShowingSearch, toggleSearch }
}
