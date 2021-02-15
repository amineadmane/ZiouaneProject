import { InertiaApp } from '@inertiajs/inertia-vue'
import vuetify from '../plugins/vuetify'
import '../sass/overrides.sass'
import VueRouter from 'vue-router'
import Vue from 'vue'
import Vuex from 'vuex'

import VueToast from 'vue-toast-notification';
// Import one of available themes
import 'vue-toast-notification/dist/theme-sugar.css'

Vue.component('vue-password', {
  template: '<div class="input-group"><span class="input-group-addon"><span class="fa fa-lock"></span></span><input :type="type" class="form-control" :placeholder="placeholder" :value="password" /><span class="input-group-btn"><button type="button" class="btn btn-primary" @click="generate()"><span class="fa fa-refresh"></span></button></span></div>',
  props : {
    type: {
      type: String,
      default: 'text'
    },
    size: {
      type: String,
      default: '32'
    },
    characters: {
      type: String,
      default: 'a-z,A-Z,0-9,#'
    },
    placeholder: {
      type: String,
      default: 'Password'
    },
    auto: [String, Boolean],
    value: ''
  },
  data: function() {
    return {
      password: this.value
    }
  },
  mounted: function() {
    if(this.auto == 'true' || this.auto == 1) {
      this.generate();
    }
  },
  methods: {
    
    generate () {
      let charactersArray = this.characters.split(',');  
      let CharacterSet = '';
      let password = '';
      
      if( charactersArray.indexOf('a-z') >= 0) {
        CharacterSet += 'abcdefghijklmnopqrstuvwxyz';
      }
      if( charactersArray.indexOf('A-Z') >= 0) {
        CharacterSet += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      }
      if( charactersArray.indexOf('0-9') >= 0) {
        CharacterSet += '0123456789';
      }
      if( charactersArray.indexOf('#') >= 0) {
        CharacterSet += '![]{}()%&*$#^<>~@|';
      }
      
      for(let i=0; i < this.size; i++) {
        password += CharacterSet.charAt(Math.floor(Math.random() * CharacterSet.length));
      }
      this.password = password;
    }
    
  }
});



import '../plugins/chartist'
import en from 'vuetify/lib/locale/en'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'
import JsonExcel from "vue-json-excel";

Vue.use(VueToast);
Vue.config.productionTip = false
Vue.component("downloadExcel", JsonExcel);

const requireComponent = require.context(
  '@/components/base', true, /\.vue$/,
)

requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName)

  const componentName = upperFirst(
    camelCase(fileName.replace(/^\.\//, '').replace(/\.\w+$/, '')),
  )

  Vue.component(`Base${componentName}`, componentConfig.default || componentConfig)
})



import VueI18n from 'vue-i18n'

Vue.use(require('vue-chartist'))
Vue.use(Vuex)

Vue.prototype.$route = (...args) => route(...args).url()
Vue.use(InertiaApp)
Vue.use(VueRouter)
Vue.use(VueI18n)

const store = new Vuex.Store({
  state: {
    barColor: 'rgba(0, 0, 0, .8), rgba(0, 0, 0, .8)',
    barImage: 'https://demos.creative-tim.com/material-dashboard/assets/img/sidebar-1.jpg',
    drawer: null,
  },
  mutations: {
    SET_BAR_IMAGE (state, payload) {
      state.barImage = payload
    },
    SET_DRAWER (state, payload) {
      state.drawer = payload
    },
  },
  actions: {

  },
})

const messages = {
    en: {
      ...require('@/locales/en.json'),
      $vuetify: en,
    
    },
  }


  export  const i18n =  new VueI18n({
    locale: process.env.VUE_APP_I18N_LOCALE || 'en',
    fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en',
    messages,
  })
  

const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes: [
      {
        path: '/',
        component: () => import('@/Pages/client/dashboard/MesColis'),
        children: [
          // Dashboard
          {
            name: 'Mes Colis',
            path: '',
            component: () => import('@/Pages/client/dashboard/MesColis'),
          },
          // Pages
          /*
          {
            name: 'User Profile',
            path: 'pages/user',
            component: () => import('@/Pages/dashboard/pages/UserProfile'),
          },
          {
            name: 'Notifications',
            path: 'components/notifications',
            component: () => import('@/Pages/dashboard/component/Notifications'),
          },
          {
            name: 'Icons',
            path: 'components/icons',
            component: () => import('@/Pages/dashboard/component/Icons'),
          },
          {
            name: 'Typography',
            path: 'components/typography',
            component: () => import('@/Pages/dashboard/component/Typography'),
          },
          // Tables
          {
            name: 'Regular Tables',
            path: 'tables/regular-tables',
            component: () => import('@/Pages/dashboard/tables/RegularTables'),
          },
          // Maps
          {
            name: 'Google Maps',
            path: 'maps/google-maps',
            component: () => import('@/Pages/dashboard/maps/GoogleMaps'),
          },
          // Upgrade
          {
            name: 'Upgrade',
            path: 'upgrade',
            component: () => import('@/Pages/dashboard/Upgrade'),
          },
          */
        ],
      },
    ],
})
  
const app = document.getElementById('app')

new Vue({
    vuetify:vuetify,
    router,
    store,
    i18n,
    render: h => h(InertiaApp, {
        props: {
            initialPage: JSON.parse(app.dataset.page),
            resolveComponent: name => import(`@/Pages/${name}`).then(module => module.default),
        },
    }),
}).$mount(app)