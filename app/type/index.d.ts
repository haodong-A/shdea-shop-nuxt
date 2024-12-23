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
}

namespace Product {
  // 商品缩略信息
  interface simpleInfo {
    goodsId: string
    title: string
    description: string
    cover: string
  }

  interface Info {
    goodsId: string
    title: string
    description: string
    mainImage: string
    otherImages: string
    haveSample: number
  }
}
