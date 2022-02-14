<template>
  <v-container class="pa-10">
    <h1>예배준비 write</h1>
    <v-form class="mb-10">
      <!-- <v-text-field v-model="form.user_id" label="user id" /> -->
      <v-text-field v-model="form.title" label="title" />
      <v-textarea v-model="form.context" label="context" />
      <v-row>{{ form.image.name }}</v-row>
      <v-row>
        <v-file-input
          v-model="form.image"
          show-size
          prepend-icon="mdi-camera"
        />
      </v-row>
    </v-form>
    <v-row class="justify-center">
      <v-btn outlined small class="ma-1" @click.prevent="onWrite">
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
import { mapActions } from 'vuex'

export default {
  name: 'WritePage',
  data () {
    return {
      loading: false,

      form: {
        user_id: this.$auth.user.id,
        title: 'title',
        context: 'context',
        image: []
      },

      response: [],
      snackbar: false,
      snackbarText: 'hello world'
    }
  },
  mounted () {
  },
  methods: {
    onWrite () {
      this.createPreparation(this.form).then((res) => {
        if (res.status === true) {
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
    },
    ...mapActions({
      createPreparation: 'preparation/createPreparation'
    })
  }
}
</script>

<style>

</style>
