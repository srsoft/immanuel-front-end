<template>
  <v-container class="pa-10">
    <h1 class="mb-10">
      예배준비 {{ getToday }}
    </h1>
    <v-card class="mb-10 pa-3">
      <h2 class="mb-5">
        탬플릿 선택
      </h2>
      <v-row>
        <v-btn outlined small class="ma-1" @click="worship('wednesday')">
          수요예배
        </v-btn>
        <v-btn outlined small class="ma-1" @click="worship('friday')">
          금요예배
        </v-btn>
        <v-btn outlined small class="ma-1" @click="worship('sunday')">
          주일예배
        </v-btn>
        <v-btn outlined small class="ma-1" @click="worship('dawn')">
          새벽기도
        </v-btn>
      </v-row>
    </v-card>
    <v-form class="mb-10">
      <v-text-field v-model="form.title" label="title" />
      <v-textarea v-model="form.context" label="context" />
      <v-row>{{ form.image.name }}</v-row>
      <v-row>
        <v-file-input
          v-model="form.image"
          show-size
          prepend-icon="mdi-camera"
        />
      </v-row>
    </v-form>
    <v-row class="justify-center">
      <v-btn outlined small class="ma-1" @click.prevent="onWrite">
        Send Message
      </v-btn>
      <v-btn outlined small to="." class="ma-1">
        List
      </v-btn>
    </v-row>
    <v-snackbar
      v-model="snackbar"
    >
      {{ snackbarText }}
    </v-snackbar>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'WritePage',
  data () {
    return {
      loading: false,

      form: {
        user_id: this.$auth.user.id,
        title: '',
        context: '',
        image: []
      },

      response: [],
      snackbar: false,
      snackbarText: 'hello world'
    }
  },
  computed: {
    getToday () {
      return this.$moment(new Date()).format('YYYY.MM.DD')
    }
  },
  mounted () {
  },
  methods: {
    onWrite () {
      this.createPreparation(this.form).then((res) => {
        if (res.status === true) {
          this.snackbar = true
          this.snackbarText = 'OK!'
          this.$router.push({
            path: '.'
          })
        } else {
          this.snackbar = true
          this.snackbarText = 'Err!'
        }
      })
    },
    worship (day) {
      if (day === 'wednesday') {
        this.form.title = '[' + this.getToday + ' 수요예배] '
        this.form.context = '예배로의 부름\n\n개회기도\n\n성시교독\n\n찬송\n\n죄의 고백\n\n용서의선언\n\n평화의 인사\n\n찬송\n\n신앙의 고백\n\n회중의 기도\n\n광고\n\n성경봉독\n\n설교 전 기도\n\n설교\n\n찬송\n\n헌금과 감사기도\n\n주기도문\n\n축도와 파송'
      } else if (day === 'friday') {
        this.form.title = '[' + this.getToday + ' 금요예배] '
        this.form.context = ''
      } else if (day === 'sunday') {
        this.form.title = '[' + this.getToday + ' 주일예배] '
        this.form.context = ''
      } else if (day === 'dawn') {
        this.form.title = '[' + this.getToday + ' 새벽기도] '
        this.form.context = ''
      }
    },
    ...mapActions({
      createPreparation: 'preparation/createPreparation'
    })
  }
}
</script>

<style>

</style>
