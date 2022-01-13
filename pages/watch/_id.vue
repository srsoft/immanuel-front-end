<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <h1>immanuel.live</h1>
    </v-navigation-drawer>
    <v-app-bar elevation="0" color="white" app>
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <v-toolbar-title>24예배하는 교회</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <!--  -->
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({ drawer: null })
}
</script>
