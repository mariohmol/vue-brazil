// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import VueBrazil from '../../dist/vue-brazil.min.js'
// import VueBrazil from '../../src'
import VueBrazil from 'vue-brazil'

Vue.config.productionTip = false
Vue.use(VueBrazil)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
