import Vue from 'nativescript-vue';
import axios from'axios'
import config from '../../config/index';

const state = { // data
    friends: [],
    errorFriends: ''
};

const mutations = { // on ne modifie le state qu'ici
    /**
     * @param payload : []
     */
    fetchFriendsSuccess: ( state, payload ) => {
        Vue.set(state, 'friends', payload);
    },
    fetchFriendsFailed: (state) => {
        Vue.set(state, 'errorFriends', 'Sorry, an error has occured');
    },
    cleanErrors: (state) => {
        Vue.set(state, 'errorFriends', '');
    },
};

const getters = { // permet de recup les data
    fetchCurrentFriends: state => state.friends,
    fetchFriendError: state => state.errorFriends
};

const actions = { // on appel les mutations. si besoin on peut faire les appels ajax ici
    async fetchFriends({commit}, token) {
        try{
            commit('cleanErrors');
            const result = await axios.get(
                config.apiUrl+'/api/friend/list',
                {
                    headers:{
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + token
                    }
                }
            );
            if(typeof result.data.result !== "undefined"){
                commit('fetchFriendsSuccess', result.data.result );
            }else{
                commit('fetchFriendsFailed');
            }
        }catch (e){
            console.log('error catch', e)
            commit('fetchFriendsFailed');
        }
    },
};

export default {
    state,
    mutations,
    getters,
    actions,
};
