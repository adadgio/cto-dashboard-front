import { createRouter, createWebHistory, RouteRecordRaw, RouteLocation } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import store from '../store/index'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

router.beforeEach((to: RouteLocation, from: RouteLocation, next) => { // to: any, from: any, next
    const { isAuthenticated } = store.getters

    if (!isAuthenticated && to.name !== 'Login') {
        next({ name: 'Login' })
    } else {
        next()
    }
})

export default router
