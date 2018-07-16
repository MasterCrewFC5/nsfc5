import Vue from 'nativescript-vue';
import axios from 'axios';
import config from '../../config/index';

const state = { // data
    club: {},
    errorClub: ''
};

const mutations = { // on ne modifie le state qu'ici
    /**
     * @param payload : { name: '', shortName: '', blazon:'' }
     */
    setClubNameSuccess: (state, payload) => {
        Vue.set(state, 'club', payload);
    },
    /**
     * @param payload :
     */
    fetchClubSuccess: (state, payload) => {
        console.log('payload', payload)
        Vue.set(state, 'club', payload);
    },
    /**
     * @param payload : club with :
     * "jerseys": [
     * {
     *  "img": "jersey image",
     *  "jerseyType" : "home"
     * },
     * {
     *  "img": "jersey image",
     *  "jerseyType" : "away"
     * }
     * ],
     */
    setClubSuccess: (state, payload) => {
        Vue.set(state, 'club', payload);
    },
    fetchClubFailed: (state) => {
        Vue.set(state, 'errorClub', 'Sorry, an error has occured');
    },
    cleanErrors: (state) => {
        Vue.set(state, 'errorClub', '');
    },
};

const getters = { // permet de recup les data
    fetchCurrentClub: state => state.club,
    fetchClubError: state => state.errorClub
};

const actions = { // on appel les mutations. si besoin on peut faire les appels ajax ici
    setClubName({commit}, club) {
        commit('cleanErrors');
        if (club.name && club.shortName && club.blazon) commit('setClubNameSuccess', club);
    },
    setClub({commit}, club) {
        commit('cleanErrors');
        if (club.jerseys[0].img && club.jerseys[1].img){
            commit('setClubSuccess', club);
        }
    },
    async getClub({commit}, token){

            commit('cleanErrors');
            const result = await axios.get(
                config.apiUrl+'/api/club',
                {
                    headers:{
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + token
                    }
                }
            );

            if(typeof result.data.result !== "undefined"){
                commit('fetchClubSuccess', result.data.result );
            }

    }
};

export default {
    state,
    mutations,
    getters,
    actions,
};
