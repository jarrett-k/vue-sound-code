import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import {create} from '@/utils/create'
import Notice from '@/components/Notice'
import store from './store'

Vue.config.productionTip = false
// 事件总线
Vue.prototype.$bus = new Vue()
Vue.prototype.$notice = (opts) => {
  const comp = create(Notice, opts)
  comp.show()
  return comp
}

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
