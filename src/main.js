import Vue from 'vue'
import App from './App.vue'
import { firestorePlugin } from 'vuefire'; 
import VueCompositionAPI from '@vue/composition-api'

Vue.use(VueCompositionAPI); 
Vue.use(firestorePlugin);  

import router from './router'; 

new Vue({
  el: '#app',
  router, 
  render: h => h(App)
})
