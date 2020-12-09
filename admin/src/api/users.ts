import request from '@/utils/request';

export const login = (params: any) => request.post('/users/login', params)

export const logout = () => request.post('/users/logout')

export const getUserInfo = (params?: any) => request.post('/users/info', params)

export const getUsers = (params?: any) => request.get('/users', {params})

export const saveUser = (params: any) => request.post('/users', params)

export const updateUser = (params: any) => request.put('/users', params)

export const delUser = (params: any) => request.delete('/users', {params})


