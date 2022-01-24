export const state = () => ({
    itemList : [],
	
})

export const getters = {
    itemList(state){
        return state.itemList
    },
}

export const mutations = {
    SET_ITEM_LIST(state,itemList){
        state.itemList = itemList
    },
    
    REMOVE_ITEM_LIST(state, itemList){
        state.itemList = itemList
    },    
}

export const actions = {
    async getNoteItemList( {commit}, parameter) {
        const {status, data} = await this.$serviceApi.noteItem.list()
        if( status === 200 ){
            commit('SET_ITEM_LIST', data)
        }
    },

    async createNoteItem({commit},parameter){
        const {status, data} = await this.$serviceApi.noteItem.create( parameter )
    },

    async updateNoteItem({commit}, parameter){
        const {status, data} = await this.$serviceApi.noteItem.update( parameter.id, parameter )
    },

    async deleteNoteItem( {commit}, id){
        const {status, data} = await this.$serviceApi.noteItem.delete( id )
        commit('REMOVE_ITEM_LIST', data)
    },
}
