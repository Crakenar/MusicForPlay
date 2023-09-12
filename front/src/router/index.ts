import { createRouter, createWebHistory } from 'vue-router'
import LoginView from "../Views/LoginView.vue";
import SiteView from "../Views/SiteView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'site',
            component: SiteView
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('../Views/LoginView.vue')
        },

        {
            path: '/dashboard',
            name: 'dashboard',
            component: () => import('../Views/DashboardView.vue')
        }
    ]
});

export default router;
