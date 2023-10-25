import { useRoute, useRouter } from 'vue-router';
import { computed, isShallow, onMounted, reactive, ref, watch, watchEffect } from 'vue';
// import { useGlobalStore } from '@/store/index';

//圖檔
// import imgMenuDevice from '@/assets/images/sidemenu-device.svg';

export default {
    name: 'Main',
    directives: {},
    components: {},
    props: {},
    setup() {
        const router = useRouter();
        const route = useRoute();
        // const store = useGlobalStore();
        // const user = store.userRole;

        console.log('route', route);

        onMounted(() => {});

        watchEffect(() => {});

        watch(
            () => route.name,
            () => {}
        );

        // retrun
        return {
            route
        };
    }
};
