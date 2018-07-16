import Vue from 'nativescript-vue';
import Vuex from 'vuex';
import myPlug from '../plugins';

import user from './modules/user';
import friend from './modules/friend';
import club from './modules/club';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

const store = new Vuex.Store({
    modules: {
        user,
        friend,
        club
    },
    plugins: [myPlug],
    strict: debug,
});

Vue.prototype.$store = store;

module.exports = store;