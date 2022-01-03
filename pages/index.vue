<template>
  <div class="home">
    <h1>immanuel.live</h1>
    <div>good news</div>
    <div class="visual-image"><v-img src="https://cdn.faithgateway.com/uploads/2013/12/immanuel-god-with-us.jpg" /></div>

    <div class="d-flex flex-wrap">
      <!-- <div v-for="video in videos" :key="video.name">
        <VideoListVideo :video="video" />
      </div> -->
    </div>
  </div>
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
