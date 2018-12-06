const state = () => ({
  count: 0,
  list: [],
  info: [],
  infos: [],
  page_nb: 0,
  page_prev: 0,
  page_next: 0,
  marker_pos: [],
  initial: [],
  logo: {}
})

const mutations = {
  initial(state, infos) {
    state.infos = infos
  },
  set(state, e) {
    state.count = e.target.value
  },
  increment(state) {
    state.count++
  },
  reset(state) {
    state.count = 0
  },
  info(state, data) {
    state.info = data
  },

  infos: (state, infos) => {
    state.infos = infos
  },
  setCurrentinfo: (state, info) => {
    state.info = info
  },
  get_imageUrl(state, data) {
    state.info.image.url = data
  },
  logo: (state, infos) => {
    state.infos.logo = infos.logo
  }
}

export { state, mutations }
