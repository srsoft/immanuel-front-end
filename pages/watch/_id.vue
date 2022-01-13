<template>
  <v-container>
    <!-- <v-content v-if="$auth.loggedIn">
      <v-btn v-if="$auth.user.userid === $route.params.userid">
        방송하기
      </v-btn>
    </v-content> -->
    <main class="v-main v-content" style="padding: 64px 0px 0px;" data-booted="true">
      <div class="v-main__wrap v-content__wrap">
        srsoft
        <div data-v-49ef9b35="" class="video-list" width="100%">
          <div data-v-49ef9b35="" :video="video" class="video-item">
            <video
              id="ZJGwpSjKYQJO2vjBHQJ3WJlsfbhpXkRRXdLl"
              data-v-49ef9b35=""
              controls="controls"
              autoplay="autoplay"
              playsinline=""
              height="160"
            />
          </div>
        </div> <button type="button" class="v-btn v-btn--is-elevated v-btn--has-bg theme--light v-size--default">
          <span class="v-btn__content">
            나가기
          </span>
        </button>
      </div>
    </main>
    <v-content>
      {{ roomId }}
      <vue-webrtc ref="webrtc" width="100%" :room-id="roomId" />
      <!-- <v-text-field v-model="roomId" placeholder="Enter room ID" /> -->
      <v-btn @click="toggleRoom">
        {{ hasJoined ? '나가기' : '입장하기' }}
      </v-btn>
      <!-- <v-btn v-if="hasJoined" @click="screenShare">
        Screen Share
      </v-btn> -->
    </v-content>
    <!-- <v-tabs>
      <v-tab :to="`/${$route.params.userid}/videos`">Videos</v-tab>
      <v-tab :to="`/${$route.params.userid}/tags`">Tags</v-tab>
    </v-tabs> -->
    <router-view />
  </v-container>
</template>

<script>
import Vue from 'vue'
import WebRTC from 'vue-webrtc'
Vue.use(WebRTC)
export default {
  name: 'AdminPage',
  // middleware: ['auth-admin']
  // data () {
  //   return {
  //     roomId: this.$route.params.userid,
  //     hasJoined: false
  //   }
  // },
  asyncData ({ params }) {
    return {
      roomId: params.id,
      hasJoined: false,
      video: {
        id: 'ZJGwpSjKYQJO2vjBHQJ3WJlsfbhpXkRRXdLl',
        isLocal: true,
        muted: true,
        stream: MediaStream
      }
    }
  },
  // mounted () {
  //   this.$refs.webrtc.join()
  //   this.hasJoined = true
  // },
  beforeDestroy () {
    this.$refs.webrtc.leave()
    this.hasJoined = false
  },
  methods: {
    toggleRoom () {
      if (this.hasJoined) {
        this.$refs.webrtc.leave()
        this.hasJoined = false
      } else {
        this.$refs.webrtc.join()
        this.hasJoined = true
      }
    },
    screenShare () {
      this.$refs.webrtc.shareScreen()
    }
  }
}
</script>

<style>

</style>
