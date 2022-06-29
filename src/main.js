import Vue from 'vue'
import App from './App.vue'
import router from './router'

import { NavBar, Tabbar, TabbarItem, Cell, CellGroup, Tag, List, PullRefresh } from 'vant';

Vue.use(NavBar);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Tag);
Vue.use(List);
Vue.use(PullRefresh);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
