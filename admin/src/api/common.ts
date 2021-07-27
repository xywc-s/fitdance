import request from '@/utils/request';

export const getStatics = () => request.get('/statics')
export const updateSetting = (params: any) => request.put('/setting', params)
