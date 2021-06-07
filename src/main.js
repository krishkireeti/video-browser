import Vue from 'vue';
import App from './App';
import VueAnalytics from 'vue-analytics';

Vue.use(VueAnalytics, {
  id: 'UA-93238037-2'
});

new Vue({
  render: h => h(App)
}).$mount('#app');
