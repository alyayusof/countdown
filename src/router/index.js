import { createWebHistory, createRouter } from "vue-router";

import Home from '@/pages/Home.vue';

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL
    ),
    routes : [
        {
            path: '/',
            component: Home,
            meta: { title: 'Countdown'}
        },
    ],
    scrollBehaviour(to, from, savedPosotion) {
        return { top: 0 } 
    }
});

router.afterEach((to) => {
    document.title = to.meta.title || 'Default Title';
});

export default router;