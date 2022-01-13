<template>
  <v-container>
    <!-- <v-content v-if="$auth.loggedIn">
      <v-btn v-if="$auth.user.userid === $route.params.userid">
        방송하기
      </v-btn>
    </v-content> -->
    <v-list>
      <vue-webrtc ref="webrtc" width="100%" :room-id="roomId" />
      <!-- <v-text-field v-model="roomId" placeholder="Enter room ID" /> -->
      <v-btn @click="toggleRoom">
        {{ hasJoined ? '나가기' : '예배입장' }}
      </v-btn>
      <!-- <v-btn v-if="hasJoined" @click="screenShare">
        Screen Share
      </v-btn> -->
      <v-divider />

      <div v-for="(ctx, index) in sequence" :key="index" class="mt-8">
        <v-list-item-title><h2 class="text-h6">{{ ctx.title }}</h2></v-list-item-title>
        <v-list-item-content>{{ ctx.content }}</v-list-item-content>
        <v-divider class="mb-6" />
      </div>
    </v-list>
    <v-tabs>
      <v-tab :to="`/${$route.params.userid}/videos`">
        예배진행
      </v-tab>
      <v-tab :to="`/${$route.params.userid}/tags`">
        지난예배
      </v-tab>
    </v-tabs>
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
      roomId: params.userid,
      hasJoined: false,
      sequence: [
        { title: '예배시작', content: '2022. 01. 31 20:00' },
        { title: '예배선언', content: '예배하는자가 영과 진리로 예배할지니라' },
        { title: '찬송', content: '찬송가 352장 - 십자가 군병들아' },
        { title: '교독문', content: '시편 23편 - 여호와는 나의 목자시니 내가 부족함이 없으리로다 그가 나를 푸른 초장에 누이시며 쉴만한 물 가으로 인도하시는도다 내 영혼을 소생시키시고 자기 이름을 위하여 의의 길로 인도하시는도다 내가 사망의 음침한 골짜기로 다닐지라도 해를 두려워하지 않을 것은    주께서 나와 함께 하심이라 주의 지팡이와 막대기가 나를 안위하시나이다 주께서 내 원수의 목전에서 내게 상을 베푸시고 기름으로 내 머리에 바르셨으니 내 잔이 넘치나이다 나의 평생에 선하심과 인자하심이 정녕 나를 따르리니 내가 여호와의 집에 영원히 거하리로다. 아멘.' },
        { title: '신앙고백', content: '전능하사 천지를 만드신 하나님 아버지를 내가 믿사오며,그 외아들 우리 주 예수 그리스도를 믿사오니,이는 성령으로 잉태하사 동정녀 마리아에게 나시고,본디오 빌라도에게 고난을 받으사,십자가에 못박혀 죽으시고,장사한지 사흘만에 죽은자 가운데서 다시 살아나시며,하늘에 오르사,전능하신 하나님 우편에 앉아 계시다가,저리로서 산 자와 죽은 자를 심판하러 오시리라. 성령을 믿사오며,거룩한 공회와,성도가 서로 교통하는 것과,죄를 사하여 주시는 것과,몸이 다시 사는 것과,영원히 사는 것을 믿사옵나이다. 아멘.' },
        { title: '찬송', content: '찬송가 352장 - 십자가 군병들아' },
        { title: '성경봉독', content: '성경봉독' },
        { title: '설교', content: '설교' },
        { title: '포럼', content: '포럼' }
      ]
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

<style lang="scss">
// .video-list {
//   .video-item:nth-child(1) {
//     width: 100%;
//     text-align: center;
//     video {
//       height: 300px;
//     }
//   }
// }
</style>
