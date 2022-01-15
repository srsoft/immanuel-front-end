<template>
  <v-container>
    <h1>ClientsPage</h1>
    <v-card>
      <v-col v-for="(row, index) in rows" :key="index">
        <v-progress-circular
          v-if="loading"
          indeterminate
          color="red"
        />
        <v-img v-else :src="`http://172.30.1.15:8003/storage/${row.image}`" max-width="300" />
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
  name: 'ClientsPage',
  data () {
    return {
      rows: [],
      loading: false,
      lastPage: 1,
      nextUrl: '',
      currentPage: 0,
      url: ''
    }
  },
  mounted () {
    this.fetchData()
  },
  methods: {
    fetchData () {
      this.loading = true
      this.url = 'http://172.30.1.15:8003/api/module/clients'
      if (this.nextUrl !== '' && this.nextUrl !== null) {
        this.url = this.nextUrl
      }
      this.$axios.$get(this.url).then((res) => {
        if (this.rows.length > 0) {
          this.rows = [...this.rows, ...res.payload.data]
        } else {
          this.rows = res.payload.data
        }
        console.log(res)
        this.nextUrl = res.payload.next_page_url
        this.lastPage = res.payload.last_page
        this.currentPage = res.payload.current_page
        this.loading = false
      })
    }
  }
}
</script>

<style>

</style>
