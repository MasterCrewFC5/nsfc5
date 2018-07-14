import Vue from 'nativescript-vue';
import axios from'axios'
import config from '../../config/index';

const state = { // data
    isLoggedIn: false, //!!localStorage.getItem(“token”)
    user: {},
    error: ''
};

const mutations = { // on ne modifie le state qu'ici
    /**
     * @param payload : { email, token }
     */
    fetchUserSuccess: ( state, payload ) => {
        if(payload.email && payload.token) {
            Vue.set(state, 'isLoggedIn', true);
            Vue.set(state, 'user', {email: payload.email, token: payload.token});
        }
    },
    fetchUserFailed: (state) => {
        Vue.set(state, 'error', 'Sorry, your mail or password was wrong.');
    },
    cleanErrors: (state) => {
        Vue.set(state, 'error', '');
    },
};

const getters = { // permet de recup les data
    fetchCurrentUser: state => state.user,
    fetchIsLoggedIn: state => state.isLoggedIn,
    fetchError: state => state.error
};

const actions = { // on appel les mutations. si besoin on peut faire les appels ajax ici
    async fetchUser({commit}, user) {
        try{
            commit('cleanErrors');
            const result = await axios.post(
               config.apiUrl+'/api/users/login',
                {
                    "email": user.email,
                    "password": user.password
                },
                {
                    'Content-Type': 'application/json'
                }
            );
            if(typeof result.data.result.token !== "undefined"){
                commit('fetchUserSuccess', {email: user.email, token: result.data.result.token});
            }else{
                commit('fetchUserFailed');
            }
        }catch (e){
            commit('fetchUserFailed');
        }
    },
};

export default {
    state,
    mutations,
    getters,
    actions,
};
