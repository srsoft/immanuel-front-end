<template>
  <v-container>
    <div>메시지 노트</div>
    <v-card>
      <v-card-title>api test</v-card-title>
      <v-card-text>
        <v-textarea v-model="text" />
      </v-card-text>
      <v-card-actions>
        <v-btn @click="test">
          test
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'NotePage',
  data () {
    return {
      text: 'www345'
    }
  },
  head: {
    title: '메시지 노트'
  },
  methods: {
    async test () {
      this.text = 'sfwefe'
      const r = await this.$axios.get('/api')
      this.text = r.data
    }
  }
}
</script>

<style>

</style>
