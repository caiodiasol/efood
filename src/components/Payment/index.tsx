import { useFormik } from 'formik'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { useDispatch } from 'react-redux'
import { close, clear } from '../../store/reducers/cart'
import * as Yup from 'yup'
import InputMask from 'react-input-mask'
import { usePurchaseMutation } from '../../services/api'

import { Form, CVV } from './styles'
import { useEffect } from 'react'

type Props = {
  onPrev: () => void
}

const Payment = ({ onPrev }: Props) => {
  const { delivery } = useSelector((state: RootReducer) => state.checkout)
  const { itens } = useSelector((state: RootReducer) => state.cart)
  const [purchase, { data, isSuccess, isLoading }] = usePurchaseMutation()

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const form = useFormik({
    initialValues: {
      cardName: '',
      cardNum: '',
      cvv: '',
      expiresMonth: '',
      expiresYear: ''
    },
    validationSchema: Yup.object({
      cardName: Yup.string()
        .min(5, 'O cartão precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      cardNum: Yup.string()
        .min(16, 'O numero precisa ter pelo menos 16 caracteres')
        .required('O campo é obrigatório'),
      cvv: Yup.string()
        .min(3, 'O cvv precisa ter pelo menos 3 caracteres')
        .required('O campo é obrigatório'),
      expiresMonth: Yup.string()
        .min(2, 'O mês precisa ter pelo menos 2 caracteres')
        .required('O campo é obrigatório'),
      expiresYear: Yup.string()
        .min(2, 'O ano precisa ter pelo menos 2 caracteres')
        .required('O campo é obrigatório')
    }),
    onSubmit: (values) => {
      purchase({
        products: itens.map((item) => ({
          id: item.id,
          price: item.preco
        })),
        delivery,
        payment: {
          card: {
            name: values.cardName,
            number: values.cardNum,
            code: Number(values.cvv),
            expires: {
              month: Number(values.expiresMonth),
              year: Number(values.expiresYear)
            }
          }
        }
      })
    }
  })

  const checkoutInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isInvalid && isTouched

    return hasError
  }

  useEffect(() => {
    if (isSuccess) {
      dispatch(clear())
    }
  }, [isSuccess, dispatch])

  return (
    <Form>
      {isSuccess && data ? (
        <>
          <h4>Pedido realizado - {data.orderId}</h4>
          <p>
            Estamos felizes em informar que seu pedido já está em processo de
            preparação e, em breve, será entregue no endereço fornecido.
          </p>
          <p>
            Gostaríamos de ressaltar que nossos entregadores não estão
            autorizados a realizar cobranças extras.
          </p>
          <p>
            Lembre-se da importância de higienizar as mãos após o recebimento do
            pedido, garantindo assim sua segurança e bem-estar durante a
            refeição.
          </p>
          <p>
            Esperamos que desfrute de uma deliciosa e agradável experiência
            gastronômica. Bom apetite!
          </p>
          <button className="btn" onClick={closeCart}>
            Concluir
          </button>
        </>
      ) : (
        <>
          <button className="close" onClick={closeCart} />
          <form onSubmit={form.handleSubmit}>
            <h4>Pagamento - Valor a pagar R$190,90</h4>
            <label htmlFor="cardName">Nome do Cartão</label>
            <input
              id="cardName"
              type="text"
              name="cardName"
              value={form.values.cardName}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className={checkoutInputHasError('cardName') ? 'error' : ''}
            />

            <div>
              <div>
                <label htmlFor="cardNum">Número do Cartão</label>
                <InputMask
                  mask="9999 9999 9999 9999"
                  placeholder="0000 0000 0000"
                  id="cardNum"
                  type="text"
                  name="cardNum"
                  value={form.values.cardNum}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkoutInputHasError('cardNum') ? 'error' : ''}
                />
              </div>
              <CVV>
                <label htmlFor="cvv">CVV</label>
                <InputMask
                  mask="999"
                  placeholder="000"
                  id="cvv"
                  type="text"
                  name="cvv"
                  value={form.values.cvv}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkoutInputHasError('cvv') ? 'error' : ''}
                />
              </CVV>
            </div>
            <div>
              <div>
                <label htmlFor="expiresMonth">Mês de vencimento</label>
                <InputMask
                  mask="99"
                  placeholder="00"
                  id="expiresMonth"
                  type="text"
                  name="expiresMonth"
                  value={form.values.expiresMonth}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={
                    checkoutInputHasError('expiresMonth') ? 'error' : ''
                  }
                />
              </div>
              <div>
                <label htmlFor="expiresYear">Ano de vencimento</label>
                <InputMask
                  mask="99"
                  placeholder="00"
                  id="expiresYear"
                  type="text"
                  name="expiresYear"
                  value={form.values.expiresYear}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={
                    checkoutInputHasError('expiresYear') ? 'error' : ''
                  }
                />
              </div>
            </div>

            <button className="btn" type="submit" disabled={isLoading}>
              {isLoading ? 'Finalizando compra...' : 'Finalizar pagamento'}
            </button>
            <button className="btn" type="button" onClick={onPrev}>
              Voltar para a edição de endereço
            </button>
          </form>
        </>
      )}
    </Form>
  )
}

export default Payment
