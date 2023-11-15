export interface BProduct {
  id: number,
  title: string,
  price: number,
  image?: string,
  configure: BProductsConfig
}

export interface BProductsConfig{
  id: number,
  diameter: number,
  color: string,
  height: number,
  code: number
}
