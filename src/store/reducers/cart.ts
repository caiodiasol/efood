import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type Product = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

type CartState = {
  itens: Product[]
  isOpen: boolean
  currentStep: string
}

const initialState: CartState = {
  itens: [],
  isOpen: false,
  currentStep: 'cart'
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Product>) => {
      const product = state.itens.find((i) => i.id === action.payload.id)
      if (!product) {
        state.itens.push(action.payload)
      } else {
        alert('O produto já está no carrinho!')
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((i) => i.id !== action.payload)
    },
    open: (state) => {
      state.isOpen = true
      state.currentStep = 'cart'
    },
    clear: (state) => {
      state.itens = []
    },
    close: (state) => {
      state.isOpen = false
    },
    nextStep: (state) => {
      if (state.currentStep === 'cart') state.currentStep = 'checkout'
      else if (state.currentStep === 'checkout') state.currentStep = 'payment'
    },
    prevStep: (state) => {
      if (state.currentStep === 'checkout') state.currentStep = 'cart'
      else if (state.currentStep === 'payment') state.currentStep = 'checkout'
    }
  }
})

export const { add, open, close, remove, nextStep, prevStep, clear } =
  cartSlice.actions
export default cartSlice.reducer
