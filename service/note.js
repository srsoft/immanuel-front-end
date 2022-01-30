const item = process.env.API_URL + 'notes'

export default $axios => ({

  list (page) {
    return $axios.$get(`${item}?page=${page}`)
  },

  show (id) {
    return $axios.$get(`${item}/${id}`)
  },

  create (payload) {
    return $axios.$post(`${item}`, payload)
  },

  update (id, payload) {
    return $axios.$post(`${item}/${id}?_method=PUT`, payload)
  },

  delete (id) {
    return $axios.$delete(`${item}/${id}`)
  }

})
