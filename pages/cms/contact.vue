<template>
  <v-container>
    <h1>Contact</h1>
    <v-card>
      <v-form>
        <v-text-field v-model="name" label="name" />
        <v-text-field v-model="email" type="email" label="email" />
        <v-text-field v-model="mobile" label="mobile" />
        <v-text-field v-model="message" label="message" />
        <v-btn @click.prevent="contact">
          Send Message
        </v-btn>
      </v-form>
    </v-card>
    <v-snackbar
      v-model="snackbar"
    >
      {{ snackbarText }}
    </v-snackbar>
  </v-container>
</template>
      </v-snackbar>
  </v-container>
</template>

<script>
export default {
  name: 'ContactPage',
  data () {
    return {
      loading: false,
      name: '',
      email: '',
      mobile: '',
      message: '',
      response: [],
      snackbar: false,
      snackbarText: 'hello world'
    }
  },
  mounted () {
  },
  methods: {
    contact () {
      this.loading = true
      const url = process.env.baseUrl + '/api/contacts'
      const data = {
        name: this.name,
        email: this.email,
        mobile: this.mobile,
        message: this.message
      }
      this.$axios.post(url, data).then((res) => {
        this.response = res.data
        if (this.response.status === true) {
          this.snackbar = true
          this.snackbarText = 'OK!'
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
