<template>
  <v-container class="pa-10">
    <h1>메시지 노트 {{ $route.query.page }}</h1>
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
      items: 'note/getItemList'
    }),
    ...mapState({
    })
  },
  mounted () {
    this.currentPage = this.$route.query.page ? this.$route.query.page : 1
    this.getNoteList(this.currentPage)
  },
  methods: {
    rowClick (item) {
      this.$router.push(this.$route.path + '/' + item.id)
    },
    clickPagination (page) {
      this.getNoteList(page)
      this.$router.push({ query: { page: this.currentPage } })
    },
    ...mapActions({
      getNoteList: 'note/getNoteList'
    }),
    ...mapMutations({
    })
  }
}
</script>

<style>

</style>
