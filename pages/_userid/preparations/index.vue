<template>
  <v-container class="pa-10">
    <h1>예배준비</h1>
    <v-row>
      <v-spacer />
      <v-btn fab dark small color="cyan" :to="$route.path + '/write'">
        <v-icon>mdi-pencil</v-icon>
      </v-btn>
    </v-row>
    <v-simple-table>
      <thead>
        <tr>
          <th v-for="(head, index) in headers" :key="index">
            {{ head.text }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in items.data" :key="index" block @click="rowClick(row)">
          <td>
            {{ row.id }}
            <v-avatar>
              <v-img v-if="row.user.avatar" :src="$images(row.user.avatar, 'org')" />
            </v-avatar>
            {{ row.user.name }}
          </td>
          <td>{{ row.title }}</td>
          <td>{{ $moment(row.created_at).format('YYYY.MM.DD') }}</td>
        </tr>
      </tbody>
    </v-simple-table>
    <v-pagination
      v-model="currentPage"
      :length="items.last_page"
      @input="clickPagination"
    />
  </v-container>
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from 'vuex'

export default {
  name: 'NotesPage',
  data () {
    return {
      currentPage: null,
      headers: [
        { text: '유저아이디', value: 'user_id' },
        { text: '제목', value: 'title' },
        { text: '날짜', value: 'created_at' }
      ]
    }
  },
  computed: {
    ...mapGetters({
      items: 'preparation/getItemList'
    }),
    ...mapState({
    })
  },
  watch: {
    $route (to) {
      // 뒤로버튼을 눌렀을때
      if (Number(to.query.page) !== this.currentPage) {
        this.currentPage = Number(to.query.page) || 1
        this.go()
      }
    }
  },
  mounted () {
    this.currentPage = Number(this.$route.query.page) || 1
    this.go()
  },
  methods: {
    rowClick (item) {
      this.$router.push(this.$route.path + '/' + item.id)
    },
    clickPagination (page) {
      this.currentPage = page
      this.go()
      this.$router.push({ query: { page: this.currentPage } })
    },
    go () {
      this.getPreparationList({ page: this.currentPage, userid: this.$auth.user.id })
    },
    ...mapActions({
      getPreparationList: 'preparation/getPreparationList'
    }),
    ...mapMutations({
    })
  }
}
</script>

<style>

</style>
