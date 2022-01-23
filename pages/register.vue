<template>
  <v-container>
    <h1>회원가입</h1>
    <UserAuthForm button-text="가입" :submit-form="registerUser" has-name="true" />
  </v-container>
</template>

<script>
import UserAuthForm from '@/components/UserAuthForm.vue'
export default {
  name: 'RegisterPage',
  components: {
    UserAuthForm
  },
  layout: 'blank',
  methods: {
    registerUser (registrationInfo) {
      console.log('registrationInfo:', registrationInfo)
      const url = process.env.baseUrl + '/api/register'
      this.$axios.post(url, registrationInfo).then((res) => {
        console.log('res:::', res.status)
        if (res.status === 201) {
          this.$auth.loginWith('laravelSanctum', {
            data: registrationInfo
          })
        } else {
          alert(res.data.message)
          console.log('res:', res.data.field)
        }
      })
    }
  }
}
</script>

<style>

</style>
