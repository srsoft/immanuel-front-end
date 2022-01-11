<template>
  <v-app>
    <v-app-bar app color="green">
      <v-btn text to="/">임마누엘 라이브</v-btn>
      <!-- <v-btn v-if="$auth.user" text to="/admin">Admin</v-btn> -->
      <v-spacer />
      <div v-if="$auth.loggedIn">
        <v-btn :to="`/${$auth.user.userid}`">{{ $auth.user.userid }}</v-btn>
        <v-btn text @click="$auth.logout()">Logout</v-btn>
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
