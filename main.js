// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* jshint esversion: 6 */
import Vue from 'vue' // jshint ignore:line
import App from './App'// jshint ignore:line
import router from './router'// jshint ignore:line

Vue.config.productionTip = false// jshint ignore:line

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})// jshint ignore:line
