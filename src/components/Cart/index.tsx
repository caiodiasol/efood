import { useDispatch, useSelector } from 'react-redux'
import { close, remove } from '../../store/reducers/cart'
import {
  CartContainer,
  Close,
  Item,
  Overlay,
  Prices,
  Send,
  Trash
} from './styles'
import { RootReducer } from '../../store'

const Cart = () => {
  const { isOpen, itens } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const priceFormat = (prices: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(prices)
  }

  const getTotalPrice = () => {
    return itens.reduce((t, a) => {
      return t + a.preco
    }, 0)
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <aside>
        <Close onClick={closeCart} />
        <ul>
          {itens.map((c) => (
            <li key={c.id}>
              <Item src={c.foto} alt={c.nome} />
              <div>
                <h3>{c.nome}</h3>
                <span>{priceFormat(c.preco)}</span>
              </div>
              <Trash onClick={() => removeItem(c.id)} />
            </li>
          ))}
        </ul>
        <Prices>
          <span>Valor Total</span>
          <span>{priceFormat(getTotalPrice())}</span>
        </Prices>
        <Send>Continar com a entrega</Send>
      </aside>
    </CartContainer>
  )
}

export default Cart
