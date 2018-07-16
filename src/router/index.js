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
import CreateTeamStep1 from '../components/pages/CreateTeam-Step1';
import CreateTeamStep2 from '../components/pages/CreateTeam-Step2';
import CreateTeamStep2B from '../components/pages/CreateTeam-Step2B';
import CreateTeamStep2Bbis from '../components/pages/CreateTeam-Step2Bbis';
import CreateTeamStep2C from '../components/pages/CreateTeam-Step2C';
import CreateTeamStep2Cbis from '../components/pages/CreateTeam-Step2Cbis';
import SelectLogo from '../components/pages/SelectLogo';
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
            path: '/createteam-step1',
            component: CreateTeamStep1,
            meta: {
                title: 'Create team - step 1',
            },
        },
        {
            path: '/createteam-step1/:logoSelect',
            component: CreateTeamStep1,
            meta: {
                title: 'Create team - step 1',
            },
            props: true,
        },
        {
            path: '/createteam-step2',
            component: CreateTeamStep2,
            meta: {
                title: 'Create team - step 2',
            },
        },
        {
            path: '/createteam-step2/:kitHome',
            component: CreateTeamStep2,
            meta: {
                title: 'Create team - step 2',
            },
            props: true
        },
        {
            path: '/createteam-step2/:kitHome/:kitAway',
            component: CreateTeamStep2,
            meta: {
                title: 'Create team - step 2',
            },
            props: true
        },
        {
            path: '/createteam-step2b',
            component: CreateTeamStep2B,
            meta: {
                title: 'Create team - step 2 B',
            },
        },
        {
            path: '/createteam-step2bbis/:kitHome',
            component: CreateTeamStep2Bbis,
            meta: {
                title: 'Create team - step 2 B bis',
            },
            props: true
        },
        {
            path: '/createteam-step2cbis',
            component: CreateTeamStep2Cbis,
            meta: {
                title: 'Create team - step 2 C bis',
            },
        },
        {
            path: '/createteam-step2c/:jersey',
            component: CreateTeamStep2C,
            meta: {
                title: 'Create team - step 2 C',
            },
            props: true
        },
        {
            path: '/createteam-step2cbis/:jersey',
            component: CreateTeamStep2Cbis,
            meta: {
                title: 'Create team - step 2 C bis',
            },
            props: true
        },
        {
            path: '/createteam-step2cbis/:jersey/:kitHome',
            component: CreateTeamStep2Cbis,
            meta: {
                title: 'Create team - step 2 C bis',
            },
            props: true
        },
        {
            path: '/selectlogo',
            component: SelectLogo,
            meta: {
                title: 'Select logo',
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
