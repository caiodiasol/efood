import { useDispatch, useSelector } from 'react-redux'
import { close, remove } from '../../store/reducers/cart'
import { CartAside, CartList, Item, Prices, Trash } from './styles'
import { RootReducer } from '../../store'

type Props = {
  onNext: () => void
}

const Cart = ({ onNext }: Props) => {
  const { itens } = useSelector((state: RootReducer) => state.cart)

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
      if (a.preco) {
        return t + a.preco
      }
      return 0
    }, 0)
  }

  const handleNext = () => {
    if (itens.length > 0) {
      onNext()
    }
  }

  return (
    <CartAside>
      <button className="close" onClick={closeCart} />
      {itens.length > 0 ? (
        <>
          <CartList>
            {itens.map((c) => (
              <li key={c.id}>
                <Item src={c.foto} alt={c.nome} />
                <div>
                  <h4>{c.nome}</h4>
                  <span>{priceFormat(c.preco)}</span>
                </div>
                <Trash onClick={() => removeItem(c.id)} />
              </li>
            ))}
          </CartList>
          <Prices>
            <span>Valor Total</span>
            <span>{priceFormat(getTotalPrice())}</span>
          </Prices>
          <button
            className="btn"
            onClick={handleNext}
            disabled={itens.length === 0}
          >
            Continar com a entrega
          </button>
        </>
      ) : (
        <p className="empty-text">
          O carrinho está vazio, adicione pelo menos um produto para continuar
          com a compra
        </p>
      )}
    </CartAside>
  )
}

export default Cart
