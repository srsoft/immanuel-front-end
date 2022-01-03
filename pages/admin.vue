<template>
  <v-container>
    <div>{{ $auth.user }}</div>
    <v-tabs>
      <v-tab to="/admin/videos">Videos</v-tab>
      <v-tab to="/admin/tags">Tags</v-tab>
    </v-tabs>
    <router-view />
  </v-container>
</template>

<script>
export default {
  name: 'AdminPage',
  middleware: ['auth-admin']
}
</script>

<style>

</style>
