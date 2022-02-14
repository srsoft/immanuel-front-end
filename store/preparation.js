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
  async getPreparationList ({ commit }, v) {
    // console.log('getPreparationList:', v.page, v.userid)
    const { status, payload } = await this.$serviceApi.preparation.list(v.page, v.userid)
    if (status === true) {
      commit('SET_ITEM_LIST', payload)
    }
  },
  async getPreparationShow ({ commit }, id) {
    const { status, payload } = await this.$serviceApi.preparation.show(id)
    if (status === true) {
      commit('SET_ITEM_SHOW', payload)
    }
  },
  async createPreparation ({ commit }, parameter) {
    return await this.$serviceApi.preparation.create(parameter)
  },
  async updatePreparation ({ commit }, parameter) {
    return await this.$serviceApi.preparation.update(parameter.id, parameter)
  },
  async deletePreparation ({ commit }, id) {
    return await this.$serviceApi.preparation.delete(id)
    // const { status, data } = await this.$serviceApi.preparation.delete(id)
    // if (status === true) {
    //   commit('REMOVE_ITEM_LIST', data)
    // }
  }
}
