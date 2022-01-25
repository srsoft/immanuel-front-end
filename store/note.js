export const state = () => ({
  itemList: [],
  itemShow: []
})

export const getters = {
  getItemList (state) {
    return state.itemList
  },
  getItemShow (state) {
    return state.itemShow
  }
}

export const mutations = {
  SET_ITEM_LIST (state, itemList) {
    state.itemList = itemList
  },
  SET_ITEM_SHOW (state, itemShow) {
    state.itemShow = itemShow
  }
  // REMOVE_ITEM_LIST (state, itemList) {
  //   state.itemList = itemList
  // }
}

export const actions = {
  async getNoteList ({ commit }, page) {
    console.log('getNoteList:', page)
    const { status, payload } = await this.$serviceApi.note.list(page)
    if (status === true) {
      commit('SET_ITEM_LIST', payload)
    }
  },
  async getNoteShow ({ commit }, id) {
    const { status, payload } = await this.$serviceApi.note.show(id)
    if (status === true) {
      commit('SET_ITEM_SHOW', payload)
    }
  },
  async createNote ({ commit }, parameter) {
    return await this.$serviceApi.note.create(parameter)
  },
  async updateNote ({ commit }, parameter) {
    return await this.$serviceApi.note.update(parameter.id, parameter)
  },
  async deleteNote ({ commit }, id) {
    return await this.$serviceApi.note.delete(id)
    // const { status, data } = await this.$serviceApi.note.delete(id)
    // if (status === true) {
    //   commit('REMOVE_ITEM_LIST', data)
    // }
  }
}
