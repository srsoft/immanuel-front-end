<template>
  <v-container>
    <h1>ServicesDetailPage {{ $route.params.id }}</h1>
    <v-card>
      <v-col>
        <v-progress-circular
          v-if="loading"
          indeterminate
          color="red"
        />
        <v-col v-else>
          <v-img :src="$images(row.image, 'org')" />
          <p>{{ row.name }}</p>
          <v-btn :to="row.link">
            link
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
  name: 'ServicesDetailPage',
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
      const url = process.env.MODULE_URL + 'services/' + this.$route.params.id
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
