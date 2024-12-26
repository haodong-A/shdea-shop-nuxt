const allProducts: any[] = ['a', 'b', 'c']

export function useProducts() {
  const products = useState<Product.simpleInfo[]>('product')

  useFetchPost('/app/goods/info/list').then((res) => {
    console.log(res)
    products.value = res.data.value?.data
  })

  return {
    products,
    allProducts,
  }
}
