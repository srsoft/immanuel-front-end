<template>
  <v-container class="pa-10">
    <h1 class="mb-10">
      {{ row.title }}
    </h1>
    <v-row class="mb-10" v-html="row.context" />
    <v-row><v-img v-if="row.image" :src="getImage" max-width="500" /></v-row>
    <v-row class="mb-10">
      {{ $moment(row.created_at).format('YYYY.MM.DD') }}
    </v-row>
    <v-row class="mb-10">
      {{ row.selected }}
    </v-row>
    <v-row class="d-flex justify-center">
      <v-btn outlined small to="." class="ma-1">
        목록
      </v-btn>
      <v-btn outlined small :to="$route.path + '/update'" class="ma-1">
        수정
      </v-btn>
      <v-btn outlined small class="ma-1" @click="onDestroy">
        삭제
      </v-btn>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from 'vuex'

export default {
  name: 'PreparationsDetailPage',
  computed: {
    ...mapGetters({
      row: 'preparation/getItemShow'
    }),
    ...mapState({
    }),
    getImage () {
      return process.env.STORAGE_URL + this.row.image
    }
  },
  mounted () {
    this.getPreparationShow(this.$route.params.id)
  },
  methods: {
    onDestroy () {
      this.deletePreparation(this.$route.params.id).then((res) => {
        if (res.status === 204) {
          this.$router.push({
            path: '/' + this.$route.params.userid + '/preparations'
          })
        }
      })
    },
    ...mapActions({
      getPreparationShow: 'preparation/getPreparationShow',
      deletePreparation: 'preparation/deletePreparation'
    }),
    ...mapMutations({
    })
  }
}
</script>

<style>

</style>
