import Container from '../../styles/container'
import {
  RestaurantCategory,
  RestaurantProfile,
  RestaurantTitle
} from './styles'

type Props = {
  capa: string
  titulo: string
  tipo: string
}

const Banner = ({ capa, titulo, tipo }: Props) => {
  return (
    <RestaurantProfile style={{ backgroundImage: `url('${capa}')` }}>
      <Container>
        <RestaurantCategory>{tipo}</RestaurantCategory>
        <RestaurantTitle>{titulo}</RestaurantTitle>
      </Container>
    </RestaurantProfile>
  )
}

export default Banner
