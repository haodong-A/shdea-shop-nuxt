const allProducts: any[] = ['a', 'b', 'c']

export function useProducts() {
  const products = useState<Product.simpleInfo[]>('product')

  products.value = [{
    title: 'Product212221212121211111111111111111111111111',
    description: 'Description',
    cover: 'https://cdn.myxypt.com/9fcbf94c/23/05/ccbccbfa18f2bc661f33b473117252eb09ed5efa.jpg',
    goodsId: 'SD-1000',
  }, {
    title: 'Product',
    description: 'Description',
    cover: 'https://cdn.myxypt.com/9fcbf94c/23/05/ccbccbfa18f2bc661f33b473117252eb09ed5efa.jpg',
    goodsId: 'aabb',
  }, {
    title: 'Product',
    description: 'Description',
    cover: 'https://cdn.myxypt.com/9fcbf94c/23/05/ccbccbfa18f2bc661f33b473117252eb09ed5efa.jpg',
    goodsId: 'aabb',
  }, {
    title: 'Product',
    description: 'Description',
    cover: 'https://cdn.myxypt.com/9fcbf94c/23/05/ccbccbfa18f2bc661f33b473117252eb09ed5efa.jpg',
    goodsId: 'aabb',
  }, {
    title: 'Product',
    description: 'Description',
    cover: 'https://cdn.myxypt.com/9fcbf94c/23/05/ccbccbfa18f2bc661f33b473117252eb09ed5efa.jpg',
    goodsId: 'aabb',
  }, {
    title: 'Product',
    description: 'Description',
    cover: 'https://cdn.myxypt.com/9fcbf94c/23/05/ccbccbfa18f2bc661f33b473117252eb09ed5efa.jpg',
    goodsId: 'aabb',
  }, {
    title: 'Product',
    description: 'Description',
    cover: 'https://cdn.myxypt.com/9fcbf94c/23/05/ccbccbfa18f2bc661f33b473117252eb09ed5efa.jpg',
    goodsId: 'aabb',
  }, {
    title: 'Product',
    description: 'Description',
    cover: 'https://cdn.myxypt.com/9fcbf94c/23/05/ccbccbfa18f2bc661f33b473117252eb09ed5efa.jpg',
    goodsId: 'aabb',
  }, {
    title: 'Product',
    description: 'Description',
    cover: 'https://cdn.myxypt.com/9fcbf94c/23/05/ccbccbfa18f2bc661f33b473117252eb09ed5efa.jpg',
    goodsId: 'aabb',
  }, {
    title: 'Product',
    description: 'Description',
    cover: 'https://cdn.myxypt.com/9fcbf94c/23/05/ccbccbfa18f2bc661f33b473117252eb09ed5efa.jpg',
    goodsId: 'aabb',
  }, {
    title: 'Product',
    description: 'Description',
    cover: 'https://cdn.myxypt.com/9fcbf94c/23/05/ccbccbfa18f2bc661f33b473117252eb09ed5efa.jpg',
    goodsId: 'aabb',
  }, {
    title: 'Product',
    description: 'Description',
    cover: 'https://cdn.myxypt.com/9fcbf94c/23/05/ccbccbfa18f2bc661f33b473117252eb09ed5efa.jpg',
    goodsId: 'aabb',
  }]
  return {
    products,
    allProducts,
  }
}
