import { createSlice } from '@reduxjs/toolkit'
import RestaurantModels from '../../models/RestaurantModels'

import hioki_sushi from '../../assets/images/restaurants/hioki_sushi.png'
import la_dolce_vita from '../../assets/images/restaurants/la_douce_vita_trattoria.png'

import pizza_marguerita from '../../assets/images/products/pizza_margueritta.png'
import yakiniku from '../../assets/images/products/yakiniku.jpg'

type RestaurantsState = {
  itens: RestaurantModels[]
}

const initialState: RestaurantsState = {
  itens: [
    {
      id: 1,
      title: 'Hioki Sushi',
      category: ['Destaque', 'Japonesa'],
      rating: 4.9,
      description:
        'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
      image: hioki_sushi,
      products: [
        {
          id: 1,
          description:
            'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
          title: 'Yakiniku',
          image: yakiniku
        },
        {
          id: 2,
          description:
            'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
          title: 'Yakiniku',
          image: yakiniku
        },
        {
          id: 3,
          description:
            'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
          title: 'Yakiniku',
          image: yakiniku
        }
      ]
    },
    {
      id: 2,
      title: 'La Dolce Vita Trattoria',
      category: ['Italiana'],
      rating: 4.6,
      description:
        'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
      image: la_dolce_vita,
      products: [
        {
          id: 1,
          description:
            'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
          title: 'Pizza Marguerita',
          image: pizza_marguerita
        },
        {
          id: 2,
          description:
            'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
          title: 'Pizza Marguerita',
          image: pizza_marguerita
        },
        {
          id: 3,
          description:
            'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
          title: 'Pizza Marguerita',
          image: pizza_marguerita
        },
        {
          id: 4,
          description:
            'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
          title: 'Pizza Marguerita',
          image: pizza_marguerita
        },
        {
          id: 5,
          description:
            'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
          title: 'Pizza Marguerita',
          image: pizza_marguerita
        },
        {
          id: 6,
          description:
            'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
          title: 'Pizza Marguerita',
          image: pizza_marguerita
        }
      ]
    },
    {
      id: 3,
      title: 'La Dolce Vita Trattoria',
      category: ['Italiana'],
      rating: 4.6,
      description:
        'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
      image: la_dolce_vita,
      products: [
        {
          id: 1,
          description:
            'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
          title: 'Pizza Marguerita',
          image: pizza_marguerita
        },
        {
          id: 2,
          description:
            'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
          title: 'Pizza Marguerita',
          image: pizza_marguerita
        },
        {
          id: 3,
          description:
            'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
          title: 'Pizza Marguerita',
          image: pizza_marguerita
        },
        {
          id: 4,
          description:
            'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
          title: 'Pizza Marguerita',
          image: pizza_marguerita
        },
        {
          id: 5,
          description:
            'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
          title: 'Pizza Marguerita',
          image: pizza_marguerita
        },
        {
          id: 6,
          description:
            'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
          title: 'Pizza Marguerita',
          image: pizza_marguerita
        }
      ]
    },
    {
      id: 4,
      title: 'La Dolce Vita Trattoria',
      category: ['Italiana'],
      rating: 4.6,
      description:
        'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
      image: la_dolce_vita,
      products: [
        {
          id: 1,
          description:
            'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
          title: 'Pizza Marguerita',
          image: pizza_marguerita
        },
        {
          id: 2,
          description:
            'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
          title: 'Pizza Marguerita',
          image: pizza_marguerita
        },
        {
          id: 3,
          description:
            'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
          title: 'Pizza Marguerita',
          image: pizza_marguerita
        },
        {
          id: 4,
          description:
            'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
          title: 'Pizza Marguerita',
          image: pizza_marguerita
        },
        {
          id: 5,
          description:
            'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
          title: 'Pizza Marguerita',
          image: pizza_marguerita
        },
        {
          id: 6,
          description:
            'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
          title: 'Pizza Marguerita',
          image: pizza_marguerita
        }
      ]
    },
    {
      id: 5,
      title: 'La Dolce Vita Trattoria',
      category: ['Italiana'],
      rating: 4.6,
      description:
        'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
      image: la_dolce_vita,
      products: [
        {
          id: 1,
          description:
            'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
          title: 'Pizza Marguerita',
          image: pizza_marguerita
        },
        {
          id: 2,
          description:
            'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
          title: 'Pizza Marguerita',
          image: pizza_marguerita
        },
        {
          id: 3,
          description:
            'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
          title: 'Pizza Marguerita',
          image: pizza_marguerita
        },
        {
          id: 4,
          description:
            'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
          title: 'Pizza Marguerita',
          image: pizza_marguerita
        },
        {
          id: 5,
          description:
            'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
          title: 'Pizza Marguerita',
          image: pizza_marguerita
        },
        {
          id: 6,
          description:
            'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
          title: 'Pizza Marguerita',
          image: pizza_marguerita
        }
      ]
    },
    {
      id: 6,
      title: 'La Dolce Vita Trattoria',
      category: ['Italiana'],
      rating: 4.6,
      description:
        'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
      image: la_dolce_vita,
      products: [
        {
          id: 1,
          description:
            'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
          title: 'Pizza Marguerita',
          image: pizza_marguerita
        },
        {
          id: 2,
          description:
            'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
          title: 'Pizza Marguerita',
          image: pizza_marguerita
        },
        {
          id: 3,
          description:
            'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
          title: 'Pizza Marguerita',
          image: pizza_marguerita
        },
        {
          id: 4,
          description:
            'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
          title: 'Pizza Marguerita',
          image: pizza_marguerita
        },
        {
          id: 5,
          description:
            'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
          title: 'Pizza Marguerita',
          image: pizza_marguerita
        },
        {
          id: 6,
          description:
            'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
          title: 'Pizza Marguerita',
          image: pizza_marguerita
        }
      ]
    }
  ]
}

const RestaurantsSlice = createSlice({
  name: 'restaurants',
  initialState,
  reducers: {}
})

export default RestaurantsSlice.reducer
