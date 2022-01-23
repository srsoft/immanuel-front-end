<template>
  <v-container class="pa-10">
    <h1 class="mb-10">
      수정
    </h1>
    <v-form class="mb-10">
      <v-text-field v-model="user_id" label="user_id" />
      <v-text-field v-model="title" label="title" />
      <v-textarea v-model="context" label="context" />
    </v-form>
    <v-row class="d-flex justify-center">
      <v-btn outlined small class="ma-1" @click.prevent="onUpdate">
        수정완료
      </v-btn>
      <v-btn outlined small to="." class="ma-1">
        취소
      </v-btn>
    </v-row>
    <v-snackbar
      v-model="snackbar"
    >
      {{ snackbarText }}
    </v-snackbar>
  </v-container>
</template>

<script>
export default {
  name: 'UpdatePage',
  data () {
    return {
      loading: false,

      row: {},
      user_id: '',
      title: '',
      context: '',

      response: [],
      snackbar: false,
      snackbarText: 'hello world'
    }
  },
  mounted () {
    this.fetchData()
  },
  methods: {
    fetchData () {
      this.loading = true
      const url = process.env.BASE_URL + '/api/notes/' + this.$route.params.id
      this.$axios.$get(url).then((res) => {
        this.row = res.payload
        this.user_id = this.row.user_id
        this.title = this.row.title
        this.context = this.row.context
        this.loading = false
      })
    },
    async onUpdate () {
      this.loading = true
      const url = process.env.baseUrl + '/api/notes/' + this.$route.params.id + '?_method=PUT'
      const data = {
        user_id: this.user_id,
        title: this.title,
        context: this.context
      }
      await this.$axios.post(url, data).then((res) => {
        this.response = res.data
        if (this.response.status === true) {
          this.snackbar = true
          this.snackbarText = 'OK!'
          this.$router.push({
            path: '.'
          })
        } else {
          this.snackbar = true
          this.snackbarText = 'Err!'
        }
      })
    }
  }
}
</script>

<style>

</style>
