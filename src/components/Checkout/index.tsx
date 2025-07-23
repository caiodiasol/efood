import { useDispatch } from 'react-redux'
import { close } from '../../store/reducers/cart'
import { setDelivery } from '../../store/reducers/checkout'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import InputMask from 'react-input-mask'

import { Form } from './styles'

type Props = {
  onNext: () => void
  onPrev: () => void
}

const Checkout = ({ onNext, onPrev }: Props) => {
  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const form = useFormik({
    initialValues: {
      reciver: '',
      address: '',
      city: '',
      cep: '',
      num: '',
      complements: ''
    },
    validationSchema: Yup.object({
      reciver: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      address: Yup.string()
        .min(5, 'O endereço precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      city: Yup.string()
        .min(3, 'A cidade precisa ter pelo menos 3 caracteres')
        .required('O campo é obrigatório'),
      cep: Yup.string()
        .min(8, 'O cep precisa ter pelo menos 8 caracteres')
        .required('O campo é obrigatório'),
      num: Yup.number()
        .min(1, 'O numero precisa ter pelo menos 1 caracter')
        .required('O campo é obrigatório')
    }),
    onSubmit: (values) => {
      dispatch(
        setDelivery({
          reciver: values.reciver,
          address: {
            description: values.address,
            city: values.city,
            zipCode: values.cep,
            number: Number(values.num),
            complements: values.complements
          }
        })
      )
      onNext()
    }
  })

  const checkoutInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  return (
    <Form>
      <button className="close" onClick={closeCart} />
      <form onSubmit={form.handleSubmit}>
        <h4>Entrega</h4>
        <label htmlFor="reciver">Quem irá receber</label>
        <input
          id="reciver"
          type="text"
          name="reciver"
          value={form.values.reciver}
          onChange={form.handleChange}
          onBlur={form.handleBlur}
          className={checkoutInputHasError('reciver') ? 'error' : ''}
        />

        <label htmlFor="address">Endereço</label>
        <input
          id="address"
          type="text"
          name="address"
          value={form.values.address}
          onChange={form.handleChange}
          onBlur={form.handleBlur}
          className={checkoutInputHasError('address') ? 'error' : ''}
        />

        <label htmlFor="city">Cidade</label>
        <input
          id="city"
          type="text"
          name="city"
          value={form.values.city}
          onChange={form.handleChange}
          onBlur={form.handleBlur}
          className={checkoutInputHasError('city') ? 'error' : ''}
        />

        <div>
          <div>
            <label htmlFor="cep">CEP</label>
            <InputMask
              mask="9999-9999"
              placeholder="0000-0000"
              id="cep"
              type="text"
              name="cep"
              value={form.values.cep}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className={checkoutInputHasError('cep') ? 'error' : ''}
            />
          </div>
          <div>
            <label htmlFor="num">Número</label>
            <input
              id="num"
              type="number"
              name="num"
              value={form.values.num}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className={checkoutInputHasError('num') ? 'error' : ''}
            />
          </div>
        </div>

        <label htmlFor="complements">Complemento (opcional)</label>
        <input
          id="complements"
          type="text"
          name="complements"
          value={form.values.complements}
          onChange={form.handleChange}
          onBlur={form.handleBlur}
        />

        <button className="btn" type="submit">
          Continuar com o pagamento
        </button>
        <button className="btn" type="button" onClick={onPrev}>
          Voltar para o carrinho
        </button>
      </form>
    </Form>
  )
}

export default Checkout
