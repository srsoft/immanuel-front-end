import note from './note.js'
import preparation from './preparation.js'

export default $axios => ({
  note: note($axios),
  preparation: preparation($axios)
})
