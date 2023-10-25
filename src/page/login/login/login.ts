import { useGlobalStore } from '@/store';
import { ref, reactive, watch, computed } from 'vue';
// vue
import { useRouter } from 'vue-router';

// api
import { apiLogin } from '@/api/api';

export default {
    name: 'login',
    components: {},
    props: {},
    setup() {
        let router = useRouter();
        let store = useGlobalStore();

        let state = reactive({
            account: '',
            password: '',
            error: {
                accountEmail: ''
            }
        });

        const count = ref(0);

        // 當count有變化時，會自動執行，並且重新計算
        const squaredCount = computed(() => {
            return count.value * count.value;
        });

        let loginButton = async () => {
            console.log('login');
            let payload = {
				userEmail: 'willaim',
				password: '123'
			}
            try {
                let result = await apiLogin(payload);
                let token = result.token;
                // const expiredDate = result.expire_at;
                // const isFirstLogin = result.isFirstLogin;
                store.apiReq.defaults.headers.common['Authorization'] = `Token ${token}`;
                
                console.log('login result', result);

                // if (isFirstLogin) {
                //     router.push({ name: FUN_NAME.PWD_SETTING });
                //     return;
                // } else {
                //     router.push({ name: FUN_NAME.DASHBOARD });
                // }
            } catch (err) {
                console.log('API Error apiLogin');
            }
        };

        watch(
            () => [state.account, state.password],
            () => {
                console.log(state.account != '' && state.password != '');
            }
        );
        return {
            loginButton
        };
    }
};
