<template>
  <v-app>
    <v-app-bar app flat color="white">
      <v-btn text to="/">임마누엘 라이브1</v-btn>
      <v-spacer />
      <div>
        <v-btn v-if="$route.name !== 'login'" text to="/login">로그인</v-btn>
        <v-btn v-if="$route.name !== 'register'" text to="/register">회원가입</v-btn>
      </div>
    </v-app-bar>
    <v-main>
      <nuxt />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'LayoutBlank'
}
</script>

<style>
</style>
