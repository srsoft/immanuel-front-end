<template>
  <v-container>
    <v-row>
      <v-col>
        <!-- <videoPlayer ref="videoPlayer" :options="playerOptions" /> -->
        <div ref="videoPlayer" v-video-player:videoPlayer="playerOptions" class="video-player-box" />
      </v-col>
      <v-col md="3" cols="12">
        <div class="display-1">
          {{ video.contents }}
        </div>
        <div />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// import { mapGetters, mapState } from 'vuex'
import { mapState } from 'vuex'
import 'video.js/dist/video-js.css'
// import { videoPlayer } from 'vue-video-player'
import Vue from 'vue'
if (process.browser) {
  const VueVideoPlayer = require('vue-video-player/dist/ssr')
  Vue.use(VueVideoPlayer)
}

export default {
  // components: {
  //   videoPlayer
  // },
  async fetch ({ store, params }) {
    await store.dispatch('loadOneVideo', { videoId: params.id })
  },
  computed: {
    ...mapState(['currentVideo']),
    video () {
      return this.currentVideo
    },
    playerOptions () {
      return {
        language: 'en',
        playbackRates: [0.7, 1.0, 1.5, 2.0, 2.5, 3.0],
        sources: [{
          type: 'video/mp4',
          src: this.video.videoUrl
        }],
        poster: this.video.thumbnail,
        fluid: true
      }
    }
  }
}
</script>

<style>

</style>
