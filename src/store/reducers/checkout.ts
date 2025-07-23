import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type Delivery = {
  reciver: string
  address: {
    description: string
    city: string
    zipCode: string
    number: number
    complements: string
  }
}

type CheckoutState = {
  delivery: Delivery
}

const initialState: CheckoutState = {
  delivery: {
    reciver: '',
    address: {
      description: '',
      city: '',
      zipCode: '',
      number: 0,
      complements: ''
    }
  }
}

const checkoutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    setDelivery: (state, action: PayloadAction<Delivery>) => {
      state.delivery = action.payload
    }
  }
})

export const { setDelivery } = checkoutSlice.actions
export default checkoutSlice.reducer
