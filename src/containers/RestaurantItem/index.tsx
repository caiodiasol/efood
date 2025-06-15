import RestaurantModel from '../../models/RestaurantModels'

import {
  Categories,
  Category,
  MoreLink,
  Rating,
  Space,
  Star,
  DescriptionRes,
  ContainerRes,
  Card,
  Image
} from './styles'

type Props = RestaurantModel

const RestaurantItem = ({
  id,
  title,
  category,
  description,
  image,
  rating
}: Props) => (
  <Card>
    <Categories>
      {category.map((c) => (
        <Category key={c}>{c}</Category>
      ))}
    </Categories>
    <Image src={image} alt={title} />
    <ContainerRes>
      <Space>
        <h3>{title}</h3>
        <Rating>
          <h3>{rating}</h3>
          <Star className="bi bi-star-fill"></Star>
        </Rating>
      </Space>
      <DescriptionRes>{description}</DescriptionRes>
      <MoreLink to={`/perfil/${id}`}>Saiba Mais</MoreLink>
    </ContainerRes>
  </Card>
)

export default RestaurantItem
