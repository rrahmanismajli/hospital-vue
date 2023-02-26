import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './firebase';


Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(BootstrapVue);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
