// import 'babel-polyfill' // for ie 11 and safari 8
import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App.vue'

Vue.config.productionTip = false

import 'vuetify/dist/vuetify.min.css'
Vue.use(Vuetify)

new Vue({
  render: h => h(App)
}).$mount('#app')

// var app = new Vue({
//   el: '#app',
//   data: {
//     message: 'Hello Vue!'
//   }
// })

// var app = new Vue({
//   el: '#app',
//   render: h => h(App)
// })
