import { useGetRestaurantsQuery } from '../../services/api'

import Container from '../../styles/container'
import RestaurantItem from '../../containers/RestaurantItem'
import { RestList, RestSection } from './styles'
import { Loading } from '../../styles/loading'

const Restaurants = () => {
  const { data: restaurants, isLoading } = useGetRestaurantsQuery()

  if (isLoading) return <Loading>Carregando...</Loading>

  return (
    <RestSection>
      <Container>
        <RestList>
          {restaurants?.map((r) => (
            <RestaurantItem
              key={r.id}
              title={r.titulo}
              category={r.tipo}
              description={r.descricao}
              image={r.capa}
              rating={r.avaliacao}
              id={r.id}
              destacado={r.destacado}
            />
          ))}
        </RestList>
      </Container>
    </RestSection>
  )
}

export default Restaurants
