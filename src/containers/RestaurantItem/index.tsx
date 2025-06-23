import {
  Categories,
  MoreLink,
  Rating,
  Space,
  Star,
  DescriptionRes,
  ContainerRes,
  Card,
  Image
} from './styles'

type Props = {
  id: number
  title: string
  category: string
  description: string
  image: string
  rating: number
  destacado: boolean
}

const RestaurantItem = ({
  id,
  title,
  category,
  description,
  image,
  rating,
  destacado
}: Props) => {
  const getDescription = (d: string) => {
    if (d.length > 290) {
      return d.slice(0, 290) + '...'
    } else {
      return d
    }
  }

  return (
    <Card>
      <Categories>
        <li className={destacado ? '' : 'destaqueOff'}>Destaque</li>
        <li>{category}</li>
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
        <DescriptionRes>{getDescription(description)}</DescriptionRes>
        <MoreLink to={`/perfil/${id}`}>Saiba Mais</MoreLink>
      </ContainerRes>
    </Card>
  )
}

export default RestaurantItem
