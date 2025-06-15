import ProductModel from '../../models/ProductModels'

import ProductItem from '../../containers/ProductItem'
import Container from '../../styles/container'
import { ProductList, RestaurantSection } from './styles'

type Props = {
  product: ProductModel[]
}

const RestaurantPage = ({ product }: Props) => {
  return (
    <RestaurantSection>
      <Container>
        <ProductList>
          {product.map((p) => (
            <li key={p.id}>
              <ProductItem
                title={p.title}
                description={p.description}
                image={p.image}
              />
            </li>
          ))}
        </ProductList>
      </Container>
    </RestaurantSection>
  )
}

export default RestaurantPage
