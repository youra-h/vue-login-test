import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
//AJAX
import http from '@/components/js/http.js'

// import axios from 'axios'
// import VueAxios from 'vue-axios'

//Localization
import makeI18n from '@/i18n/i18n.js'
//Прогрессбар
import VueProgressBar from 'vue-progressbar'
//Управление мета тегами
import VueMeta from 'vue-meta'
//ПОдключение кук
import VueCookie from 'vue-cookie'

//Подключение Material Design Lite
import VueMaterialDL from 'material-design-lite'
import 'material-design-lite/material.min.css';
//Подключение шрифта Material Design Icons
import 'material-design-icons/iconfont/material-icons.css';
//Подключение шрифта Roboto
import '@/assets/fonts/roboto/index.css';
//Набор для css разметки
import '@/assets/mark-kit.css';
//Default css
import "@/assets/default/index.css";

// Vue.use(VueAxios, axios)
Vue.use(VueMaterialDL)
//Установка и настройка прогрессбара
Vue.use(VueProgressBar, {
    color: 'var(--color-bg-component)',
    failedColor: 'var(--color-text-error)',
    thickness: '3px'
})
Vue.use(VueMeta, {
    // optional pluginOptions
    refreshOnceOnNavigation: true
})
Vue.use(VueCookie);

//Установка локализации по умолчанию
const i18n = makeI18n( VueCookie.get('locale') || 'ru' );

// Vue.config.productionTip = true

var vue = new Vue({
    router,
    store,
    i18n,
    mounted () {
        this.$Progress.finish()
    },
    created () {

        //Запуск прогресбара
        this.$router.beforeEach((to, from, next) => {
            //  Если есть мета для route
            if (to.meta.progress !== undefined) {
                let meta = to.meta.progress
                this.$Progress.parseMeta(meta)
            }
            //Запуск прогресбара
            this.$Progress.start()
            //Следующая страница
            next()
        })

        this.$router.afterEach((to, from) => {
            //Остановка прогресбара
            this.$Progress.finish()
        })

        this.$http.interceptors.request.use(config => {
            this.$Progress.start(); // for every request start the progress
            return config;
        });

        this.$http.interceptors.response.use(response => {
            this.$Progress.finish(); // finish when a response is received
            return response;
        });

        const token = localStorage.getItem('token');
        console.log(token);
        if (token) {            
            this.$http.defaults.headers.common['Authorization'] = token
        }
    },
    render: h => h(App)
}).$mount('#app');

// console.log(vue.$http);
