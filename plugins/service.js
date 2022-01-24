import createServiceApi from '@/service'

export default (ctx, inject) => {
  inject('serviceApi', createServiceApi(ctx.$axios))
}
