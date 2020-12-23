export default function ({ $axios }, inject) {

  const api = {
    getImages: (params) => $axios.get('/files', { params })
  }

  inject('api', api)
}
