<template>
  <v-container>
    <h1>로그인</h1>
    <UserAuthForm button-text="로그인" :submit-form="loginUser" />
  </v-container>
</template>

<script>
import UserAuthForm from '@/components/UserAuthForm.vue'
export default {
  name: 'LoginPage',
  components: {
    UserAuthForm
  },
  layout: 'blank',
  created () {
    if (this.$auth.loggedIn) {
      this.$router.push('/')
    }
  },
  methods: {
    loginUser (loginInfo) {
      try {
        this.$auth.loginWith('laravelSanctum', {
          data: loginInfo
        })
        this.$store.dispatch('snackbar/setSnackbar', { text: `Thanks for signing in, ${this.$auth.user.name}` })
      } catch {
        this.$store.dispatch('snackbar/setSnackbar', { color: 'red', text: 'There was an issu' })
      }
    }
  }
}
</script>

<style>

</style>
