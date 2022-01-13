<template>
  <v-container v-if="!$auth.loggedIn">
    <v-content>
      <v-row class="mt-10"><h1>임마누엘 라이브</h1></v-row>
      <v-row class="mt-10"><v-btn to="/churchRegistration">교회등록</v-btn></v-row>
    </v-content>
  </v-container>
  <v-container v-else class="home">
    <h1>immanuel.live</h1>
    <div>good news</div>
    <div class="visual-image"><v-img src="https://cdn.faithgateway.com/uploads/2013/12/immanuel-god-with-us.jpg" /></div>

    <div class="d-flex flex-wrap">
      <!-- <div v-for="video in videos" :key="video.name">
        <VideoListVideo :video="video" />
      </div> -->
    </div>
  </v-container>
</template>

<script>
// import { mapState } from 'vuex'
// import VideoListVideo from '~/components/VideoListVideo'
export default {
  name: 'IndexPage',
  // components: { VideoListVideo },
  async fetch ({ store }) {
    // await store.dispatch('loadAllVideos')
  },
  computed: {
    // ...mapState(['videos'])
  }
}
</script>

<style lang="scss">
  .home {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    .visual-image {
      width: 400px;
    }
  }
</style>
