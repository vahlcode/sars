import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from "./components/Pages/Home";
import Senators from "./components/Pages/Senators";

Vue.use(VueRouter)

Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home, meta: {
      title: "#ENDSARSNOW - A movement by Nigerians to end police brutality in Nigeria."
    }},
    { path: '/senators', component: Senators, meta: {
      title: "Contact Your Senators - #ENDSARSNOW"
    }}
  ]
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
