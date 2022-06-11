import { createSlice } from '@reduxjs/toolkit'

const productSlice = createSlice({
	name: 'product',
	initialState: {
		productItems: [],
		productsLoadingStatus: 'idle',
		currentProduct: null,
	},
	reducers: {
		productsFetching: (state) => {
			state.productsLoadingStatus = 'loading'
		},
		productsFetched: (state, action) => {
			state.productsLoadingStatus = 'idle';
			state.productItems = action.payload
		},
		setCurrentProduct: (state, action) => {
			state.currentProduct = action.payload
		}
	}
})

export const { productsFetching, productsFetched, setCurrentProduct } = productSlice.actions

export default productSlice.reducer