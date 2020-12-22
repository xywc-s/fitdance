import request from '@/utils/request';

export const getFiles = (params?: any) => request.get('/files', {params})

export const getUploadToken = () => request.get('/files/token')

export const uploadFile = (params: any) => request.post('/files', params)

// export const uploadFiles = (params: any) => request.post('/files/bluk', params)

// export const updateFile = (params: any) => request.put('/files', params)

export const delFile = (params: any) => request.delete('/files', {params})
