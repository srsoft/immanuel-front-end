<template>
  <v-container>
    <h1>교회등록</h1>
    <ChurchAuthForm button-text="등록" :submit-form="registerUser" has-name="true" />
  </v-container>
</template>

<script>
import ChurchAuthForm from '@/components/ChurchAuthForm.vue'
export default {
  name: 'RegisterPage',
  components: {
    ChurchAuthForm
  },
  layout: 'blank',
  methods: {
    async registerUser (registrationInfo) {
      console.log('registrationInfo:', registrationInfo)
      await this.$axios.post('/register', registrationInfo)
      this.$auth.loginWith('laravelSanctum', {
        data: registrationInfo
      })
    }
  }
}
</script>

<style>

</style>
