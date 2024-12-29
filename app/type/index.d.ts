/**
 * Tip: sku = specModel
 *
 */
namespace User {
  interface Info {
    username: string
    email: string
    avatar: string
    ip: string
    firstname: string
    lastname: string
    phone: string
  }
  interface Wishlist {
    title: string
    mainImage: string
    sku: string
  }
}

namespace Product {
  // 商品缩略信息
  interface SimpleInfo {
    goodsId: string
    title: string
    description: string
    cover: string
  }

  interface Info {
    goodsId: string
    title: string
    description: string
    cover: string
    spec: Spec[]
    param: string
  }

  interface Spec {
    specName: string
    specModel: string
    specType: string
    moqPrices: string
    haveSample: number
    samplePrice: number
    detailPage: string
    order: number
    infoId: number
    mainImage: string
    otherImages: string
  }

  interface Category {
    label: string
    value: string
    children?: Category[]
  }

}
