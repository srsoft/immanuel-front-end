<template>
  <v-container class="pa-10">
    <h1 class="mb-10">{{ row.title }}</h1>
    <v-row class="mb-10">{{ row.context }}</v-row>
    <v-row class="mb-10">{{ $moment(row.created_at).format('YYYY.MM.DD') }}</v-row>
    <v-row class="d-flex justify-center">
      <v-btn outlined small to="." class="ma-1">
        목록
      </v-btn>
      <v-btn outlined small :to="$route.path + '/update'" class="ma-1">
        수정
      </v-btn>
      <v-btn outlined small @click="onDestroy" class="ma-1">
        삭제
      </v-btn>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'NotesDetailPage',
  data () {
    return {
      row: {}
    }
  },
  mounted () {
    this.fetchData()
  },
  methods: {
    fetchData () {
      const url = process.env.BASE_URL + '/api/notes/' + this.$route.params.id
      this.$axios.$get(url).then((res) => {
        this.row = res.payload
      })
    },
    async onDestroy () {
      const url = process.env.BASE_URL + '/api/notes/' + this.$route.params.id
      await this.$axios.$delete(url).then((res) => {
        if (res.status === 204) {
          this.$router.push({
            path: './'
          })
        }
      })
    }
  }
}
</script>

<style>

</style>
