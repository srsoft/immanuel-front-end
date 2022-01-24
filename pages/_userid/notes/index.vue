<template>
  <v-container class="pa-10">
    <h1>메시지 노트</h1>
    <v-row>
      <v-spacer />
      <v-btn fab dark small color="cyan" :to="$route.path + '/write'"><v-icon>mdi-pencil</v-icon></v-btn>
    </v-row>

    <v-progress-circular
      v-if="loading"
      indeterminate
      color="red"
    />
    <v-simple-table v-else>
      <thead>
        <tr>
          <th v-for="(head, index) in headers" :key="index">{{ head.text }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in rows" :key="index" block @click="rowClick(row)">
          <td>
            {{ row.id }}. [{{ row.user_id }}]
            <v-avatar>
              <v-img v-if="row.image" :src="$images(row.image, 'small')" />
            </v-avatar>
          </td>
          <td>{{ row.title }}</td>
          <td>{{ $moment(row.created_at).format('YYYY.MM.DD') }}</td>
        </tr>
      </tbody>
    </v-simple-table>

    <v-row v-if="currentPage != lastPage" class="d-flex justify-center mt-6">
      <v-btn block outlined color="indigo" @click="fetchData">더보기</v-btn>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from 'vuex'

export default {
  name: 'NotesPage',
  data () {
    return {
      loading: false,
      lastPage: 1,
      nextUrl: '',
      currentPage: 0,
      total: 0,

      headers: [
        { text: '유저아이디', value: 'user_id' },
        { text: '제목', value: 'title' },
        { text: '날짜', value: 'created_at' }
      ]
    }
  },
  computed: {
    ...mapGetters({
      rows: 'note/getItemList'
    }),
    ...mapState({
    })
  },
  mounted () {
    this.getNoteList()
  },
  methods: {
    // fetchData () {
    //   this.loading = true
    //   let url = process.env.BASE_URL + '/api/notes'
    //   if (this.nextUrl !== '' && this.nextUrl !== null) {
    //     url = this.nextUrl
    //   }
    //   this.$axios.$get(url).then((res) => {
    //     if (this.rows.length > 0) {
    //       this.rows = [...this.rows, ...res.payload.data]
    //     } else {
    //       this.rows = res.payload.data
    //     }
    //     this.nextUrl = res.payload.next_page_url
    //     this.lastPage = res.payload.last_page
    //     this.currentPage = res.payload.current_page
    //     this.total = res.payload.total
    //     this.loading = false
    //   })
    // },
    rowClick (item) {
      this.$router.push(this.$route.path + '/' + item.id)
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
