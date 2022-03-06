const item = process.env.BASE_URL + 'notes'

export default $axios => ({

  list (page, userid) {
    return $axios.$get(`${item}?page=${page}&user_id=${userid}`)
  },

  show (id) {
    return $axios.$get(`${item}/${id}`)
  },

  create (v) {
    const config = { headers: { 'content-type': 'multipart/form-data' } }
    const formData = new FormData()
    formData.append('user_id', v.user_id)
    formData.append('title', v.title)
    formData.append('context', v.context)
    formData.append('image', v.image)
    return $axios.$post(`${item}`, formData, config)
  },

  update (id, payload) {
    return $axios.$post(`${item}/${id}?_method=PUT`, payload)
  },

  delete (id) {
    return $axios.$delete(`${item}/${id}`)
  }

})
