import { createSlice } from "@reduxjs/toolkit"

export const cartSlice = createSlice({
  name: "cart",
  initialState: { products: [], total: 0, totalqty: 0 },
  reducers: {
    addProduct: (state, action) => {
      state?.products.push({ ...action.payload, quantity: 1 })
    },
    removeProduct: (state, action) => {
      let filtered = state?.products.filter(
        (item) => item.id !== action.payload
      )

      state.products = filtered
    },
    increaseQuantity: (state, action) => {
      const itemIndex = state?.products.findIndex(
        (item) => item.id === action.payload
      )

      if (state.products[itemIndex].quantity < 5) {
        return void (state.products[itemIndex].quantity += 1)
      }
    },
    decreaseQuantity: (state, action) => {
      const itemIndex = state?.products.findIndex(
        (item) => item.id === action.payload
      )

      if (state.products[itemIndex].quantity > 1) {
        return void (state.products[itemIndex].quantity -= 1)
      }
    },

    calculateTotal: (state) => {
      state.total = state.products.reduce((acc, item) => {
        return acc + item.price * item.quantity
      }, 0)
    },
    calculateTotalQty: (state) => {
      state.totalqty = state.products.reduce((acc, item) => {
        return acc + item.quantity
      }, 0)
    },
  },
})

export const {
  addProduct,
  removeProduct,
  increaseQuantity,
  decreaseQuantity,
  calculateTotal,
  calculateTotalQty,
} = cartSlice.actions
export default cartSlice.reducer
