import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

import "../src/assets/css/style.css"


import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fas,fab)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(BootstrapVue)
window.eventBus = new Vue({})
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
