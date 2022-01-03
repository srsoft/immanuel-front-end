// import { getData } from "~/utils/store-utils"

export const state = () => ({
  videos: [],
  currentVideo: {}
})

export const mutations = {
  SET_VIDEOS (state, videos) {
    state.videos = videos
  },
  SET_CURRENT_VIDEO (state, video) {
    state.currentVideo = video
  }
}

export const actions = {
  async loadAllVideos ({ commit }) {
    const { data: videos } = await getData('/letters', this.$axios)
    commit('SET_VIDEOS', videos)
  },
  async loadOneVideo ({ commit }, { videoId }) {
    const response = await this.$axios.get(`/letters/${videoId}`)
    const videos = response.data.data.body
    commit('SET_CURRENT_VIDEO', videos)
  }
}

const getData = async function (url, axios) {
  const response = await axios.get(url)
  return {
    data: response.data.data
  }
}
