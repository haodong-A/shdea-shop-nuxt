export function useFiltering() {
  const route = useRoute()
  const router = useRouter()
  const filterQuery = useState<string>('filter', () => '')

  filterQuery.value = route.query.filter as string
}
