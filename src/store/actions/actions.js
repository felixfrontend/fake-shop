export const productsFetching = () => ({
	type: 'PRODUCTS_FETCHING'
})

export const productsFetched = (products) => ({
	type: 'PRODUCTS_FETCHED',
	payload: products
})