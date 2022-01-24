const item = '/api/notes'

export default $axios => ({

  list () {
    return $axios.$get(`${item}`)
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
