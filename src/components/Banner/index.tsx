import RestaurantModel from '../../models/RestaurantModels'
import Container from '../../styles/container'
import {
  RestaurantCategory,
  RestaurantProfile,
  RestaurantTitle
} from './styles'

type Props = {
  restaurant: RestaurantModel
}

const Banner = ({ restaurant }: Props) => {
  return (
    <RestaurantProfile
      style={{ backgroundImage: `url('${restaurant.image}')` }}
    >
      <Container>
        <RestaurantCategory>Italian</RestaurantCategory>
        <RestaurantTitle>La Dolce Vita Trattoria</RestaurantTitle>
      </Container>
    </RestaurantProfile>
  )
}

export default Banner
