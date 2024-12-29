export function useWishlist() {
  const wishlist = useState<User.Wishlist[]>('wishlist', () => [])
  const loading = ref<boolean>(false)
  function toggleWishlist(value: any, add: boolean) {
    if (add) {
      // TODO 待加接口
      loading.value = true
      wishlist.value.push(value)
    }
    else {
      wishlist.value = wishlist.value.filter(x => x.sku !== value.sku)
    }
  }
  return {
    loading,
    wishlist,
    toggleWishlist,
  }
}
