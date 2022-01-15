<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list>
        <v-list-item-title class="d-flex justify-center">
          <v-btn text to="/">
            immanuel.live
          </v-btn>
        </v-list-item-title>
        <v-list-item class="d-flex justify-center mt-6">
          <v-list-item-avatar>
            <v-img src="https://randomuser.me/api/portraits/women/85.jpg" class="d-flex justify-center" />
          </v-list-item-avatar>
        </v-list-item>

        <v-list-item link>
          <v-list-item-content v-if="$auth.loggedIn">
            <v-list-item-title class="text-h6 d-flex justify-center">
              {{ $auth.user.userid }}
            </v-list-item-title>
            <v-list-item-subtitle class="d-flex justify-center">
              {{ $auth.user.email }}
            </v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-content v-else>
            <v-btn block to="/login">
              Login
            </v-btn>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider />

      <v-list nav dense>
        <v-list-item v-for="(item, index) in listItemMenu1" :key="index" :to="$auth.loggedIn ? '/' + $auth.user.userid + item.to : ''">
          <v-list-item-icon><v-icon>{{ item.icon }}</v-icon></v-list-item-icon>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>

      <v-divider />

      <v-list nav dense>
        <v-list-item v-for="(item, index) in listItemMenu2" :key="index" :to="$auth.loggedIn ? '/' + $auth.user.userid + item.to : ''">
          <v-list-item-icon><v-icon>{{ item.icon }}</v-icon></v-list-item-icon>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>

      <v-divider />

      <v-list nav dense>
        <v-list-item v-for="(item, index) in listItemMenu3" :key="index" :to="'/services' + item.to">
          <v-list-item-icon><v-icon>{{ item.icon }}</v-icon></v-list-item-icon>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>

      <template #append>
        <div class="pa-2">
          <v-btn v-if="$auth.loggedIn" block @click="$auth.logout()">
            Logout
          </v-btn>
          <v-btn v-else block to="/login">
            Login
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>

    <v-app-bar elevation="0" color="gray" app>
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <v-toolbar-title>24예배하는교회</v-toolbar-title>
      <v-spacer />
      <div v-if="$auth.loggedIn">
        <v-btn
          :to="`/${$auth.user.userid}`"
          class="mx-2"
          fab
          dark
          small
          color="grey"
        >
          <v-icon dark>
            mdi-account
          </v-icon>
        </v-btn>
      </div>
      <div v-else>
        <v-btn to="/login">
          로그인
        </v-btn>
        <v-btn to="/register">
          회원가입
        </v-btn>
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
  // asyncData ({ params }) {
  data () {
    return {
      drawer: null,
      listItemMenu1: [
        { icon: 'mdi-note', title: '메시지 노트', to: '/note' },
        { icon: 'mdi-account-multiple', title: '70인 첼린지', to: '/challenge' },
        { icon: 'mdi-star', title: '말씀 즐겨찾기', to: '/favorites' }
      ],
      listItemMenu2: [
        { icon: 'mdi-application-cog-outline', title: '예배준비', to: '/preparation' }
      ],
      listItemMenu3: [
        { icon: 'mdi-application-cog-outline', title: 'Services', to: '/' },
        { icon: 'mdi-application-cog-outline', title: 'Teams', to: '/teams' },
        { icon: 'mdi-application-cog-outline', title: 'Our Works', to: '/ourworks' },
        { icon: 'mdi-application-cog-outline', title: 'Clients', to: '/clients' },
        { icon: 'mdi-application-cog-outline', title: 'Pages', to: '/pages' }
      ]
    }
  },
  methods: {
  }
}
</script>

<style lang="scss">
.v-application--is-ltr .v-list-item__avatar:first-child {
  margin-right: 0px;
}
</style>
