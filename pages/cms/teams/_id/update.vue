<template>
  <v-container>
    <h1>update {{ $route.params.id }} </h1>
    <v-card>
      <v-form>
        <v-text-field v-model="name" label="name" />
        <v-file-input v-model="image" label="image" />
        <v-text-field v-model="job_title" label="job_title" />
        <v-text-field v-model="LinkedIn" label="LinkedIn" />
        <v-text-field v-model="facebook" label="facebook" />
        <v-btn @click.prevent="onUpdate">Send Message</v-btn>
        <v-btn to="/cms/teams">List</v-btn>
      </v-form>
    </v-card>
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
      name: '',
      image: [],
      job_title: '',
      LinkedIn: '',
      facebook: '',

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
      const url = process.env.BASE_URL + '/api/teams/' + this.$route.params.id
      this.$axios.$get(url).then((res) => {
        this.row = res.payload
        this.name = this.row.name
        this.job_title = this.row.job_title
        this.LinkedIn = this.row.LinkedIn
        this.facebook = this.row.facebook
        this.loading = false
      })
    },
    async onUpdate () {
      this.loading = true
      const url = process.env.baseUrl + '/api/teams/' + this.$route.params.id + '?_method=PUT'
      const data = {
        name: this.name,
        // image: this.image,
        job_title: this.job_title,
        LinkedIn: this.LinkedIn,
        facebook: this.facebook
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
