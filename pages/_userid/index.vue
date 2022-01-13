<template>
  <v-container>
    <!-- <v-content v-if="$auth.loggedIn">
      <v-btn v-if="$auth.user.userid === $route.params.userid">
        방송하기
      </v-btn>
    </v-content> -->
    <v-content>
      <vue-webrtc ref="webrtc" width="100%" :room-id="roomId" />
      <!-- <v-text-field v-model="roomId" placeholder="Enter room ID" /> -->
      <v-btn @click="toggleRoom">
        {{ hasJoined ? '나가기' : '예배입장' }}
      </v-btn>
      <!-- <v-btn v-if="hasJoined" @click="screenShare">
        Screen Share
      </v-btn> -->
    </v-content>
    <v-content>
      <h2>예배시작</h2>
      <div>2022.01.13 20:00</div>
    </v-content>
    <v-content>
      <h2>예배선언</h2>
      <div>곧 예배를 시작하겠습니다.</div>
    </v-content>
    <v-content>
      <h2>묵도</h2>
      <div>임시 글자</div>
    </v-content>
    <v-content>
      <h2>기원</h2>
      <div>임시 글자</div>
    </v-content>
    <v-content>
      <h2>찬송</h2>
      <div>1장 1절</div>
    </v-content>
    <v-content>
      <h2>교독문</h2>
      <div>64번(시편 148편)</div>
    </v-content>
    <v-content>
      <h2>신앙고백</h2>
      <h3>사도신경</h3>
      <div>
        전능하사 천지를 만드신 하나님 아버지를
        내가 믿사오며,
        그 외아들
        우리 주 예수 그리스도를 믿사오니,
        이는 성령으로 잉태하사
        동정녀 마리아에게 나시고,
        본디오 빌라도에게 고난을 받으사,
        십자가에 못박혀 죽으시고,
        장사한지 사흘만에 죽은자 가운데서 다시 살아나시며,
        하늘에 오르사,
        전능하신 하나님 우편에 앉아 계시다가,
        저리로서 산 자와 죽은 자를 심판하러 오시리라.
        성령을 믿사오며,
        거룩한 공회와,
        성도가 서로 교통하는 것과,
        죄를 사하여 주시는 것과,
        몸이 다시 사는 것과, 영원히 사는 것을 믿사옵나이다.
        아멘.
      </div>
    </v-content>
    <v-content>
      <h2>찬송 524장</h2>
      <div>
        1.Come to the Savior, make no delay; Here in His Word He has shown us the way;

        구주께 나오시오, 지체하지 말고. 여기 그분의 말씀 안에서 그분은 길을 보여 주셨다오.

        Here in our midst He’s standing today, Tenderly saying, Come!

        오늘 여기 우리 가운데 그분이 서 계신다오. 오라고 부드럽게 말씀하면서!

        Joyful, joyful will the meeting be, When from sin our hearts are pure and free;

        우리의 심령이 죄악으로부터 순결하고 해방될 때, 우리 모임이 즐겁고 기쁠 것이라오.

        And we shall gather, Savior, with Thee, In our eternal home.

        그리고 구원주이신, 그분과 함께 영원한 본향에서 모일 것이라오.
      </div>
    </v-content>
    <v-content>
      <h2>기도</h2>
      <div>아브라함아 아브라함아</div>
    </v-content>
    <v-content>
      <h2>성경봉독</h2>
      <div>아브라함아 아브라함아</div>
    </v-content>
    <v-content>
      <h2>성경봉독</h2>
      <div>아브라함아 아브라함아</div>
    </v-content>
    <v-content>
      <h2>성경봉독</h2>
      <div>아브라함아 아브라함아</div>
    </v-content>
    <v-content>
      <h2>성경봉독</h2>
      <div>아브라함아 아브라함아</div>
    </v-content>
    <v-tabs>
      <v-tab :to="`/${$route.params.userid}/videos`">예배진행</v-tab>
      <v-tab :to="`/${$route.params.userid}/tags`">지난예배</v-tab>
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
      hasJoined: false
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
