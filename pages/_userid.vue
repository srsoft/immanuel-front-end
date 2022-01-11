<template>
  <v-container>
    <v-content v-if="$auth.loggedIn">
      <v-btn v-if="$auth.user.userid === $route.params.userid">방송하기</v-btn>
    </v-content>
    <v-tabs>
      <v-tab :to="`/${$route.params.userid}/videos`">Videos</v-tab>
      <v-tab :to="`/${$route.params.userid}/tags`">Tags</v-tab>
    </v-tabs>
    <router-view />
  </v-container>
</template>

<script>
export default {
  name: 'AdminPage'
  // middleware: ['auth-admin']
}
</script>

<style>

</style>
