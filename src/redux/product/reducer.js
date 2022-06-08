import { createSlice } from '@reduxjs/toolkit'

const productSlice = createSlice({
	name: 'product',
	initialState: {
		productItems: [],
		productsLoadingStatus: 'idle',
	},
	reducers: {
		productsFetching: (state) => {
			state.productsLoadingStatus = 'loading'
		},
		productsFetched: (state, action) => {
			state.productsLoadingStatus = 'idle';
			state.productItems = action.payload
		}
	}
})

export const { productsFetching, productsFetched } = productSlice.actions

export default productSlice.reducer