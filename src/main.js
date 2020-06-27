// import Vue from 'vue'
// import App from './App.vue'

// Vue.config.productionTip = false

// new Vue({
//   render: h => h(App),
// }).$mount('#app')

import Vue from 'vue'
import App from './App.vue'

import Ionic from "@ionic/vue"
import "@ionic/core/css/core.css"
import "@ionic/core/css/ionic.bundle.css"

import { IonicVueRouter } from "@ionic/vue";
Vue.use(IonicVueRouter);

Vue.config.productionTip = false;
Vue.use(Ionic);

const router = new IonicVueRouter({
  routes: [
    { path: "/", redirect: "/home",
    name: "home",
    component: () =>
      import(/* webpackChunkName: "home" */ "@/components/HomePage"), },
    {
      path: "/home",
      name: "home",
      component: () =>
        import(/* webpackChunkName: "home" */ "@/components/HomePage"),
    },
    {
      path: "/new-item",
      name: "new-item",
      component: () =>
        import(/* webpackChunkName: "new-item" */ "@/components/NewItemPage"),
    }
  ]
});
new Vue({
  render: h => h(App),
  router,
}).$mount('#app')