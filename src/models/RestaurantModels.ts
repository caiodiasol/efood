import ProductModel from './ProductModels'

class RestaurantModel {
  title: string
  description: string
  image: string
  category: string[]
  rating: number
  products: ProductModel[]
  id: number

  constructor(
    id: number,
    title: string,
    description: string,
    image: string,
    category: string[],
    rating: number,
    products: ProductModel[]
  ) {
    this.id = id
    this.title = title
    this.description = description
    this.image = image
    this.category = category
    this.rating = rating
    this.products = products
  }
}

export default RestaurantModel
