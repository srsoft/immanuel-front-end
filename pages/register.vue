<template>
  <v-container>
    <h1>Register</h1>
    <UserAuthForm buttonText="Register" :submitForm="registerUser" hasName="true" />
  </v-container>
</template>

<script>
import UserAuthForm from '@/components/UserAuthForm.vue'
export default {
  name: 'RegisterPage',
  components: {
    UserAuthForm
  },
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
