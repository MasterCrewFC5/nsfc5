import Vue from 'nativescript-vue';
import Vuex from 'vuex';
//import myPlug from '../plugins';

import user from './modules/user';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

const store = new Vuex.Store({
    modules: {
        user
    },
    //plugins: [myPlug],
    strict: debug,
});

Vue.prototype.$store = store;

module.exports = store;