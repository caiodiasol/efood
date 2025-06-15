import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import Container from '../../styles/container'
import RestaurantItem from '../../containers/RestaurantItem'
import { RestList, RestSection } from './styles'

const Restaurants = () => {
  const itens = useSelector((state: RootReducer) => state.restaurants.itens)

  return (
    <RestSection>
      <Container>
        <RestList>
          {itens.map((r) => (
            <RestaurantItem
              key={r.id}
              title={r.title}
              category={r.category}
              description={r.description}
              image={r.image}
              rating={r.rating}
              id={r.id}
              products={r.products}
            />
          ))}
        </RestList>
      </Container>
    </RestSection>
  )
}

export default Restaurants
