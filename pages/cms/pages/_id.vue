<template>
  <v-container>
    <h1>PagesDetailPage {{ $route.params.id }}</h1>
    <v-card>
      <v-col>
        <v-progress-circular
          v-if="loading"
          indeterminate
          color="red"
        />
        <v-col v-else>
          <v-img :src="$images(row.image, 'org')" />
          <p>{{ row.title }}</p>
          <p>{{ row.excerpt }}</p>
          <p>{{ row.body }}</p>
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
  name: 'PagesDetailPage',
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
      const url = process.env.MODULE_URL + 'pages/' + this.$route.params.id
      this.$axios.$get(url).then((res) => {
        this.row = res.payload
        this.loading = false
      })
    }
  }
}
</script>

<style>

</style>
