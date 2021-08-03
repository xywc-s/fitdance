export default function ({ $axios }, inject) {

  const api = {
    getImages: (params) => $axios.get('/files', { params }),
    getCategories: () => $axios.get('/categories'),
    getCategory: (id) => $axios.get(`/categories/${id}`),
    getProduct: (id) => $axios.get(`/products/${id}`),
    getProducts: (params) => $axios.get(`/products`, { params }),
  }

  inject('api', api)
}
