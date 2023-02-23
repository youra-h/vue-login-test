import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '@/views/main/Main'

Vue.use(VueRouter)

const routes = [
    {
        path: '/info',
        name: '404',
        meta: {layout: 'guest'},
        component: () => import('../views/default/PageError.vue')
    },
    {
        path: '*',
        redirect: '/info'
    },
    {
        path: '/',
        name: 'main',
        meta: {layout: 'main'},
        component: Main
    },
    {
        path: '/about',
        name: 'about',
        meta: {layout: 'main'},
        component: () => import('../views/main/About.vue')
    },
    {
        path: '/login',
        name: 'login',
        meta: {layout: 'guest', title: 'Login'},
        component: () => import('../views/guest/Login.vue')
    },
    {
        path: '/register',
        name: 'Register',
        meta: {layout: 'guest'},
        component: () => import('../views/guest/Register.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
