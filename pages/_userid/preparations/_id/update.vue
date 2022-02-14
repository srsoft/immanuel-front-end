<template>
  <v-container class="pa-10">
    <h1 class="mb-10">
      수정
    </h1>
    <v-form class="mb-10">
      <!-- <v-text-field v-model="item.user_id" label="user_id" /> -->
      <v-text-field v-model="item.title" label="title" />
      <v-textarea v-model="item.context" label="context" />
      <v-text-field v-model="item.selected" label="selected" />
    </v-form>
    <v-row class="d-flex justify-center">
      <v-btn outlined small class="ma-1" @click.prevent="onUpdate">
        수정완료
      </v-btn>
      <v-btn outlined small to="." class="ma-1">
        취소
      </v-btn>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from 'vuex'

export default {
  name: 'UpdatePage',
  data () {
    return {
      item: {}
    }
  },
  computed: {
    ...mapGetters({
      row: 'preparation/getItemShow'
    }),
    ...mapState({
    })
  },
  mounted () {
    this.getPreparationShow(this.$route.params.id)
    this.item = this.row
  },
  methods: {
    onUpdate () {
      this.updatePreparation(this.item).then((res) => {
        if (res.status === true) {
          this.$router.push({
            path: '.'
          })
        }
      })
    },
    ...mapActions({
      getPreparationShow: 'preparation/getPreparationShow',
      updatePreparation: 'preparation/updatePreparation'
    }),
    ...mapMutations({
    })
  }
}
</script>

<style>

</style>
