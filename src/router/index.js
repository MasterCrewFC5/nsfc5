import Vue from 'nativescript-vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

//Routes
import Home from '../components/pages/Home';
import SearchPlayer from '../components/pages/SearchPlayers';
import FindGame from '../components/pages/FindGame';
import SignUp from '../components/pages/SignUp';
import SignIn from '../components/pages/SignIn';
// import SeeFriends from '../components/pages/SeeFriends';

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
        // {
        //     path: '/seefriends',
        //     component: SeeFriends,
        //     meta: {
        //         title: 'See friends',
        //     },
        // },
        {path: '*', redirect: '/home'},
    ],
});

router.replace('/signup');

module.exports = router;
