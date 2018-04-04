
import axios from'axios'
import jwtDecode from 'jwt-decode'

const state = { // data
    isLoggedIn:  false, //!!localStorage.getItem(“token”)
    user:{}
};

const mutations = { // on ne modifie le state qu'ici
    SET_USER: ( state, token )=>{
        let user = jwtDecode(token)
        if(token) state.isLoggedIn = true
        state.user = user
    },
};

const getters = { // permet de recup les data
    events: state => state.events
}

const actions = { // on appel les mutations. si besoin on peut faire les appels ajax ici
    async connexion( store, username, password ){
        const res = await axios.post('http:fc5api/connexion',{
            responseType: 'Json',
            username: username,
            password: password
        })
        if(res) store.commit('SET_USER', res.data.token)
    }
};

export default {
    state,
    mutations,
    getters,
    actions,
};
