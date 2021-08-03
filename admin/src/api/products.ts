import request from '@/utils/request';

export const getProducts = (params: any) => request.get('/products', {params})

export const getProduct = (id: number) => request.get(`/products/${id}`)

export const createProduct = (params: any) => request.post('/products', params)

export const updateProduct = (params: any) => request.put('/products', params)

export const delProduct = (id: number) => request.delete(`/products/${id}`)


export const getCategories = () => request.get('/categories')

export const createCategory = (params: any) => request.post('/categories', params)

export const updateCategory = (params: any) => request.put('/categories', params)

export const delCategory = (params: any) => request.delete('/categories', {params})
