const allProducts: any[] = ['a', 'b', 'c']

export function useProducts() {
  const products = ref(['a'])
  return {
    products,
    allProducts,
  }
}
