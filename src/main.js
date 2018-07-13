import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// new Vue({
//   render: h => h(App)
// }).$mount('#app')

// var app = new Vue({
//   el: '#app',
//   data: {
//     message: 'Hello Vue!'
//   }
// })

var app = new Vue({
  el: '#app',
  render: h => h(App)
})
