<template>
  <v-container>
    <h1>TeamsDetailPage</h1>
    <v-card>
      <v-col>
        <v-progress-circular
          v-if="loading"
          indeterminate
          color="red"
        />
        <v-col v-else>
          <v-img v-if="row.image" :src="$images(row.image, 'org')" />
          <p>{{ row.name }}</p>
          <v-btn to=".">
            목록
          </v-btn>
          <v-btn :to="$route.path + '/update'">
            수정
          </v-btn>
          <v-btn @click="onDestroy">
            삭제
          </v-btn>
        </v-col>
      </v-col>
    </v-card>
    <template v-if="currentPage != lastPage">
      <div>
        <v-btn @click="fetchData">
          <span v-if="!loading">Click me!</span>
          <span v-else>Loading...</span>
        </v-btn>
      </div>
    </template>
  </v-container>
</template>

<script>
export default {
  name: 'TeamsDetailPage',
  data () {
    return {
      row: {},
      loading: true
    }
  },
  mounted () {
    this.fetchData()
  },
  methods: {
    fetchData () {
      this.loading = true
      const url = process.env.BASE_URL + 'teams/' + this.$route.params.id
      this.$axios.$get(url).then((res) => {
        this.row = res.payload
        this.loading = false
      })
    },
    async onDestroy () {
      const url = process.env.BASE_URL + 'teams/' + this.$route.params.id
      await this.$axios.$delete(url).then((res) => {
        if (res.status === 204) {
          this.$router.push({
            path: '/cms/teams'
          })
        }
      })
    }
  }
}
</script>

<style>

</style>
