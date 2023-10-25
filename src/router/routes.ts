// page
import Main from '@/page/main/index.vue';
// device
import device from '@/page/devices/device/index.vue';
import deviceDetail from '@/page/devices/device-detail/index.vue';
import login from '@/page/login/login/index.vue';


export const routes = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/main',
        name: 'Index',
        component: Main,
        children: [
            {
                path: 'device',
                name: 'device',
                meta: {
                    layout: 'main',
                    theme: 'default', // defualt, white, grey
                    isExtra: false, // 是否有額外的東西要顯示在標題列'
                    isScroll: false, // 是否要在內頁自動長有scrollbar
                    requiresAuth: true
                },
                component: device
            },
            {
                path: 'device-detail/:id',
                name: 'device-detail',
                meta: {
                    layout: 'flexiable',
                    theme: 'white', // defualt, white, grey
                    requiresAuth: true
                },
                component: deviceDetail
            }
        ]
    },
    {
        path: '/login',
        name: 'login',
        meta: {
            layout: 'full',
            theme: 'light',
            requiresAuth: false
        },
        component: login
    }
];
