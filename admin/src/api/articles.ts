import request from '@/utils/request'

export const getArticals = (params: any) => request.get('/articals', {params})

export const createArtical = (params: any) => request.post('/articals', params)

export const updateArtical = (params: any) => request.put('/articals', params)

export const delArtical = (params: any) => request.delete('/articals', {params})

