<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-btn text to="/"><h1>immanuel.live</h1></v-btn>
      <v-avatar
        color="orange"
        size="100"
      >
        <span class="white--text text-h5">100</span>
      </v-avatar>
    </v-navigation-drawer>
    <v-app-bar elevation="0" color="gray" app>
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <v-toolbar-title>24예배하는교회</v-toolbar-title>
      <!-- <v-btn v-if="$auth.user" text to="/admin">Admin</v-btn> -->
      <v-spacer />
      <div v-if="$auth.loggedIn">
        <v-btn text :to="`/${$auth.user.userid}`">mypage</v-btn>
        <v-btn text @click="$auth.logout()">Logout</v-btn>
      </div>
      <div v-else>
        <v-btn to="/login">로그인</v-btn>
        <v-btn to="/register">회원가입</v-btn>
      </div>
    </v-app-bar>
    <v-main>
      <nuxt />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'LayoutDefault',
  data () {
    return {
      drawer: null
    }
  }
}
</script>

<style>
</style>
