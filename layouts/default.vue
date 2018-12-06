<template>
  <div>
    <Mynavigation/>
    <nuxt/>
    <Myfooter/>
    <!-- Les Coockies sont à la fin du footer -->
    <!--==================footer part==============  -->
    <!-- integration du Live-chat -->
    <script type="text/javascript">
      window.$crisp = []
      window.CRISP_WEBSITE_ID = '83c07ec8-a519-499d-91fc-84e9ad318189'
      ;(function() {
        d = document
        s = d.createElement('script')
        s.src = 'https://client.crisp.chat/l.js'
        s.async = 1
        d.getElementsByTagName('head')[0].appendChild(s)
      })()
    </script>
    <!-- fin du live chat -->
    <!-- end of template -->
  </div>
</template>
<script>
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import CookieLaw from 'vue-cookie-law'
import Myfooter from '~/components/Myfooter.vue'
import Mynavigation from '~/components/Mynavigation.vue'
export default {
  components: {
    Myfooter,
    Mynavigation
  }
}
</script>

<style scoped>
body {
  box-sizing: content-box;
}
.container {
  max-width: 100%;
  padding: 0;
  margin: 0;
}
.CoockieText {
  margin-right: 2rem;
}
.Cookie--base .Cookie__button {
  background: #f1f1f1;
  color: black;
  border: solid 1px #eb456e;
  font-weight: bold;
}
.Cookie--base .Cookie__button:hover {
  background: #eb456e;
  color: white;
}
</style>
