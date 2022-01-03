<template>
  <v-app>
    <v-app-bar app color="green">
      <v-btn text to="/">IMMANUEL LIVE</v-btn>
      <v-btn v-if="$auth.user" text to="/admin">Admin</v-btn>
      <v-spacer />
      <div v-if="$auth.loggedIn">
        {{ $auth.user.email }}({{ $auth.user.name }})
        <v-btn text @click="$auth.logout()">Logout</v-btn>
      </div>
      <div v-else>
        <v-btn text to="/login">Login</v-btn>
        <v-btn text to="/register">Register</v-btn>
      </div>
    </v-app-bar>
    <v-main>
      <nuxt />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'LayoutDefault'
}
</script>

<style>
</style>
