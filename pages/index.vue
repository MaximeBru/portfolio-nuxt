<template>
  <div class="content">
    <!-- ================================begin slider=================================== -->
    <!-- last section main -->
    <script type="text/javascript" src="/js/slider.js"></script>
    <script type="text/javascript" src="/js/customjs.js"></script>
    <!-- end of page -->
  </div>
</template>

<script>
import Vue from 'vue'
import { mapState, mapMutations } from 'vuex'
import axios from 'axios'
import VueMoment from 'vue-moment'
import * as moment from 'moment'

export default {
  head: {
    /*     return {
      script: [{ src: '/js/slider.js' }]
    } */
  },
  async fetch({ store, params }) {
    return (
      axios
        .get('https://www.digital-dev.fr/infos')
        /*  console.log('logo', res) */
        /*     this.$store.commit('initial', res.data) */
        .then(res => {
          store.commit('infos', res.data)
        })
    )
  },

  computed: {
    ...mapState({
      infos: state => state.infos,
      list: state => state.list,
      imageUrl: state => state.infos.image.Url,
      info: state => state.info,
      initial: state => state.infos,
      logo: state => state.infos.logo
    })
  },
  methods: {
    ...mapMutations([
      'infos',
      'set',
      'increment',
      'reset',
      'info',
      'initial',
      'logo'
    ])
  },
  components: {}
}
</script>
