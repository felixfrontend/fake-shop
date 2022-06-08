import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cart/reducer'
import productReducer from './product/reducer'

export const store = configureStore({
	reducer: {
		cart: cartReducer,
		product: productReducer
	}
})