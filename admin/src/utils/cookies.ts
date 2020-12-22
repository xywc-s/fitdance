import Cookies from 'js-cookie'

// App
const sidebarStatusKey = 'sidebar_status'
export const getSidebarStatus = () => Cookies.get(sidebarStatusKey)
export const setSidebarStatus = (sidebarStatus: string) => Cookies.set(sidebarStatusKey, sidebarStatus)

// User
const tokenKey = 'access_token'
export const getToken = () => Cookies.get(tokenKey)
export const setToken = (token: string) => Cookies.set(tokenKey, token)
export const removeToken = () => Cookies.remove(tokenKey)

const files = 'current_files'
export const getFilesCookie = ()=> Cookies.get(files) ? JSON.parse(Cookies.get(files) as string) as any[] : undefined
export const setFilesCookie = (data: string) => Cookies.set(files, data)
export const removeFilesCookie = () => Cookies.remove(files)

const dirOptions = 'dir_options'
export const getDirOptions = ()=> Cookies.get(dirOptions) ? JSON.parse(Cookies.get(dirOptions) as string) as any : undefined
export const setDirOptions = (data: string) => Cookies.set(dirOptions, data)
export const removeDirOptions = () => Cookies.remove(dirOptions)
