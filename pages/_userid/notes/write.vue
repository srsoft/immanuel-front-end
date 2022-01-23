<template>
  <v-container class="pa-10">
    <h1>write</h1>
    <v-form class="mb-10">
      <v-text-field v-model="user_id" label="user id" />
      <v-text-field v-model="title" label="title" />
      <v-textarea v-model="context" label="context" />
    </v-form>
    <v-row class="justify-center">
      <v-btn outlined small @click.prevent="onWrite" class="ma-1">
        Send Message
      </v-btn>
      <v-btn outlined small to="." class="ma-1">
        List
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
  name: 'WritePage',
  data () {
    return {
      loading: false,
      user_id: this.$auth.user.id,
      title: 'title',
      context: 'context',

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
      const url = process.env.baseUrl + '/api/notes'
      const data = {
        name: this.name,
        user_id: this.user_id,
        title: this.title,
        context: this.context
      }
      this.$axios.post(url, data).then((res) => {
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
