import Vue from 'nativescript-vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

//Routes
import Home from '../components/pages/Home';
import SearchPlayer from '../components/pages/SearchPlayers';
import FindGame from '../components/pages/FindGame';
import SignUp from '../components/pages/SignUp';
import SignIn from '../components/pages/SignIn';
import Account from '../components/pages/Account';
import WaitRoom from '../components/pages/WaitRoom.vue';

import SeeFriends from '../components/pages/SeeFriends';
import Store from '../components/pages/Store';
import Manage from '../components/pages/manage/Manage';

const router = new VueRouter({
    pageRouting: true,
    routes: [
        {
            path: '/home',
            component: Home,
            meta: {
                title: 'Home',
            },
        },
        {
            path: '/findgame',
            component: FindGame,
            meta: {
                title: 'FindGame',
            },
        },
        {
            path: '/search',
            component: SearchPlayer,
            meta: {
                title: 'Search',
            },
        },
        {
            path: '/store',
            component: Store,
            meta: {
                title: 'Store',
            },
        },
        {
            path: '/manage',
            component: Manage,
            meta: {
                title: 'Manage',
            },
        },
        {
            path: '/signup',
            component: SignUp,
            meta: {
                title: 'Sign up',
            },
        },
        {
            path: '/signin',
            component: SignIn,
            meta: {
                title: 'Sign in',
            },
        },
        {
            path: '/waitroom',
            component: WaitRoom,
            meta: {
                title: 'Wait room',
            },
        },
        {
            path: '/seefriends',
            component: SeeFriends,
            meta: {
                title: 'See friends',
            },
        },
        {
            path: '/account',
            component: Account,
            meta: {
                title: 'Account',
            },
        },
        {path: '*', redirect: '/home'},
    ],
});

router.replace('/signup');

module.exports = router;
