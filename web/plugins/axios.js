export default function ({ $axios, redirect }) {
  $axios.onResponse((response) => {
    const res = response.data
    if (res.code === 20000) {
      return res.data
    }
  })
  $axios.onError(err => {
    redirect('/index')
    Promise.reject(error)
  })

  $axios.onResponseError((error) => {
    Promise.reject(error)
  })
}
