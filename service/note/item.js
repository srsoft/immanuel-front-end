const item = '/api/notes'

/**
 * item apis
 */
export default ( $axios ) => ({

    /**
     * item list
     */
    list () {
         return $axios.$get(`${item}`)
    },

    /**
     * item read
     * @param {*} id 
     * @returns 
     */
    get ( id ) {
        return $axios.$get(`${item}/${id}`)
    },

    /**
     * item create
     * @param {*} payload 
     * @returns 
     */
    create ( payload ) {
        return $axios.$post(`${item}`, payload)
    },

    /**
     * 
     * @param {*} id 
     * @param {*} payload 
     * @returns 
     */
    update ( id , payload ) {
        return $axios.$put(`${item}/${id}`, payload)
    },
    
    /**
     * @param {Object} id
     */
    delete ( id ) {
        return $axios.$delete(`${item}/${id}`)
    }    

})