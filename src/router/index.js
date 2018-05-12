import Vue from 'nativescript-vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

//Routes
import Home from '../components/pages/Home';
import SearchPlayer from '../components/pages/SearchPlayers';
import FindGame from '../components/pages/FindGame';

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
        {path: '*', redirect: '/home'},
    ],
});

router.replace('/home');

module.exports = router;
