import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close, nextStep, prevStep } from '../../store/reducers/cart'

import Cart from '../../components/Cart'
import { Overlay, CartContainer } from './styles'
import Checkout from '../../components/Checkout'
import Payment from '../../components/Payment'

const Modal = () => {
  const { isOpen, currentStep } = useSelector(
    (state: RootReducer) => state.cart
  )

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const handleNextStep = () => {
    dispatch(nextStep())
  }

  const handlePrevStep = () => {
    dispatch(prevStep())
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      {currentStep === 'cart' && <Cart onNext={handleNextStep} />}
      {currentStep === 'checkout' && (
        <Checkout onNext={handleNextStep} onPrev={handlePrevStep} />
      )}
      {currentStep === 'payment' && <Payment onPrev={handlePrevStep} />}
    </CartContainer>
  )
}

export default Modal
