import Vue from 'vue';
import vuetify from '@/plugins/vuetify';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
// eslint-disable-next-line import/no-duplicates
import axios from 'axios';
// eslint-disable-next-line import/no-duplicates
import { AxiosInstance } from 'axios';

import { Component } from 'vue-property-decorator';
import Vuelidate from 'vuelidate';

Vue.config.productionTip = false;

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: process.env.VUE_APP_BASE_API_URL,
  headers: { 'X-Requested-With': `XMLHttpRequest` },
});

Vue.use(require(`vue-moment`) as any);

new Vue({
  router,
  store,
  // @ts-ignore
  vuetify,
  render: h => h(App),
}).$mount(`#app`);

require(`dotenv`).config();
Vue.use(Vuelidate);

Component.registerHooks([`validations`]);
