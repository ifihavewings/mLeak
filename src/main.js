// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
import App from './App'
import router from './router'
import axios from 'axios'
import cmn from '@/utils/common'
Vue.prototype.$cmn = cmn
import service from '@/utils/service'
Vue.prototype.$post = service.doPost;
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
