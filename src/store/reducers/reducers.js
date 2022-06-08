const initialState = {
	productItems: [],
	productsLoadingStatus: 'idle',
	productAddItems: []
}

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'PRODUCTS_FETCHING':
			return {
				...state,
				productsLoadingStatus: 'loading'
			}
		case 'PRODUCTS_FETCHED':
			return {
				...state,
				productsLoadingStatus: 'idle',
				productItems: action.payload
			}
		case 'ADD_PRODUCT':
			return {
				...state,
			}

		default: return state
	}
}