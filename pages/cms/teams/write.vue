<template>
  <v-container>
    <h1>write</h1>
    <v-card>
      <v-form>
        <v-text-field v-model="name" label="name" />
        <v-file-input v-model="image" label="image" />
        <v-text-field v-model="job_title" label="job_title" />
        <v-text-field v-model="LinkedIn" label="LinkedIn" />
        <v-text-field v-model="facebook" label="facebook" />
        <v-btn @click.prevent="onWrite">Send Message</v-btn>
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
  name: 'WritePage',
  data () {
    return {
      loading: false,
      name: 'name test',
      image: [],
      job_title: 'job title test',
      LinkedIn: 'http://immanuel.live',
      facebook: 'http://immanuel.live',

      response: [],
      snackbar: false,
      snackbarText: 'hello world'
    }
  },
  mounted () {
  },
  methods: {
    onWrite () {
      this.loading = true
      const url = process.env.baseUrl + '/api/teams'
      const data = {
        name: this.name,
        // image: this.image,
        job_title: this.job_title,
        LinkedIn: this.LinkedIn,
        facebook: this.facebook
      }
      this.$axios.post(url, data).then((res) => {
        this.response = res.data
        if (this.response.status === true) {
          this.snackbar = true
          this.snackbarText = 'OK!'
          this.$router.push({
            path: '/cms/teams'
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
