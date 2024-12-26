const allProducts: any[] = ['a', 'b', 'c']

export function useProducts() {
  const products = useState<Product.simpleInfo[]>('product', () => [])

  const isPending = ref(false)

  async function updateProductList() {
    await nextTick()
    isPending.value = true
    products.value = await useFetchPost('/app/goods/info/list').finally(() => {
      isPending.value = false
    })
  }

  return {
    products,
    allProducts,
    updateProductList,
    isPending,
  }
}
