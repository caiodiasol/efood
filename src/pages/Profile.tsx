import { useGetRestaurantsQuery } from '../services/api'
import { useParams } from 'react-router-dom'

import Header from '../containers/Header'
import RestaurantPage from '../components/RestaurantPage'
import Banner from '../components/Banner'

import Modal from '../containers/Modal'
import Loader from '../containers/Loader'

const Profile = () => {
  const { id } = useParams<{ id: string }>()

  const { data: restaurants, isLoading } = useGetRestaurantsQuery()
  if (isLoading) return <Loader />

  const restaurant = restaurants?.find((r) => r.id === Number(id))

  if (!restaurant) {
    return <p>Restaurante não encontrado</p>
  }

  return (
    <>
      <Header />
      <Banner
        capa={restaurant.capa}
        tipo={restaurant.tipo}
        titulo={restaurant.titulo}
      />
      <RestaurantPage cardapio={restaurant.cardapio} />
      <Modal />
    </>
  )
}

export default Profile
