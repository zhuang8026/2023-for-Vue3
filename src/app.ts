import { computed, onBeforeMount, onMounted, watch, watchEffect } from 'vue';
import { useRoute } from 'vue-router';
import { apiSetting } from './api/api';

export default {
    components: {},
    props: {},
    setup() {
        onBeforeMount(async () => {
            console.log('app onBeforeMount');
            apiSetting();
        });

        onMounted(() => {
            console.log('app onMounted');
        });

        return {};
    }
};
