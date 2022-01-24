import noteItem from './note/item'

export default ( $axios ) => ({
    noteItem : noteItem ( $axios )
})