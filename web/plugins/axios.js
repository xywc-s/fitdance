export default function ({ $axios, redirect }) {
  $axios.onResponse((response) => {
    const res = response.data
    if (res.code === 20000) {
      return res
    }
  })
}
