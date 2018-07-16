<template>
    <Page class="page signup" actionBarHidden="true" loaded="pageLoaded">
        <StackLayout class="overlay" horizontalAlignment="center" verticalAlignment="center">
            <StackLayout class="width80" horizontalAlignment="center" verticalAlignment="center">
                <ActivityIndicator :busy="isBusy" color="white"/>
                <StackLayout orientation="horizontal" class="marginBottom" horizontalAlignment="center">
                    <Label text="Create your team" class=" h1 white"/>
                </StackLayout>
                <StackLayout orientation="horizontal" class="marginBottom" horizontalAlignment="center">
                    <Label text="Step 2 : Choose a kit" class="h2 white"/>
                </StackLayout>
                <StackLayout v-show="!$route.params.kitHome" orientation="horizontal" horizontalAlignment="center"
                             @tap="redirectStep2B"
                             style="background-color: rgba(237,237,237,0.6); border-radius: 50%; width: 300px; height: 300px">
                    <Image src="~/football-jersey/jersey4-red.png" style="width: 60%"/>
                </StackLayout>
                <StackLayout v-show="$route.params.kitHome" orientation="horizontal" horizontalAlignment="center"
                             @tap="redirectStep2B"
                             style="background-color: rgba(237,237,237,0.6); border-radius: 50%; width: 300px; height: 300px">
                    <Image :src="'~/football-jersey/'+$route.params.kitHome+'.png'" style="width: 60%"/>
                </StackLayout>
                <StackLayout orientation="horizontal" class="marginBottom" horizontalAlignment="center">
                    <Label text="Home kit" class="h2 white"/>
                </StackLayout>
                <StackLayout v-show="!$route.params.kitAway" orientation="horizontal" horizontalAlignment="center"
                             @tap="redirectStep2Bbis"
                             style="background-color: rgba(237,237,237,0.6); border-radius: 50%; width: 300px; height: 300px">
                    <Image src="~/football-jersey/jersey6-green.png" style="width: 60%"/>
                </StackLayout>
                <StackLayout v-show="$route.params.kitAway" orientation="horizontal" horizontalAlignment="center"
                             @tap="redirectStep2Bbis"
                             style="background-color: rgba(237,237,237,0.6); border-radius: 50%; width: 300px; height: 300px">
                    <Image :src="'~/football-jersey/'+$route.params.kitAway+'.png'" style="width: 60%"/>
                </StackLayout>
                <StackLayout orientation="horizontal" horizontalAlignment="center">
                    <Label text="Away kit" class="h2 white"/>
                </StackLayout>
                <Button v-show="$route.params.kitHome && $route.params.kitAway" text="Valid team" @tap="submitKit"
                        class="logginButton"/>
            </StackLayout>

        </StackLayout>
    </Page>
</template>


<script>
    import store from '../../store/index';
    import axios from 'axios';
    import config from '../../config/index';

    export default {
        store: store,
        name: 'createteam-step2',
        props: ['kitHome'],
        components: {},
        data() {
            return {
                club: {},
                jerseys: [],
                errors: [],
                isBusy: false,
            };
        },
        methods: {
            async submitKit() {
                const result = await axios.post(
                    config.apiUrl + '/api/club/create',
                    {
                        'name': this.club.name,
                        'shortName': this.club.shortName,
                        'blazon': this.club.blazon,
                        'jerseys': [
                            {
                                'img': this.club.jerseys[0].img,
                                'jerseyType': 'home'
                            },
                            {
                                'img': this.club.jerseys[1].img,
                                'jerseyType': 'away'
                            }
                        ],
                        'stadium':{
                            'name': this.club.name + ' Stadium',
                            'currentCapacity': 15000,
                            'maximumCapacity': 50000,
                            'costPerGame': 60,
                        }
                    },
                    {
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': 'Bearer ' + this.$store.getters.fetchCurrentUser.token
                        },
                    },
                );
                console.log('ok', result.data)
                if(typeof result.data.result !== 'undefined'){
                    this.$router.push('/account');
                }
                return result.data;
            },
            redirectToSelectLogo() {
                this.$router.push('selectlogo');
            },
            redirectStep2B() {
                this.$router.push('/createteam-step2b');
            },
            redirectStep2Bbis() {
                this.$router.push('/createteam-step2bbis/' + this.$route.params.kitHome);
            }

        },
        mounted() {
            console.log('test', this.$route.params.kitAway, this.$route.params.kitHome);
            if (this.$route.params.kitAway && this.$route.params.kitHome) {
                this.club = this.$store.getters.fetchCurrentClub;
                console.log('this.club ', this.club);
                this.jerseys = [];
                this.jerseys.push({

                    img: '~/football-jersey/' + this.$route.params.kitHome + '.png',
                    jerseyType: 'home'

                });
                this.jerseys.push({

                    img: '~/football-jersey/' + this.$route.params.kitAway + '.png',
                    jerseyType: 'away'

                });
                this.club.jerseys = this.jerseys;
                console.log('this?club', this.club);
            }
        }
    };
</script>

<style scoped>

    /*.page {*/
    /*background-image: ~/signup/background-signup.jpeg;*/
    /*background-repeat: no-repeat;*/
    /*background-position: center;*/
    /*background-size: 100% 100%;*/
    /*}*/

    .width80 {
        width: 60%;
    }

    .h1 {
        font-style: normal;
        font-weight: bold;
        line-height: normal;
        font-size: 30px;
    }

    .h2 {
        font-style: normal;
        line-height: normal;
        font-size: 18px;
    }

    .uppercase {
        text-transform: uppercase;
    }

    .overlay {
        width: 100%;
        height: 100%;
        background: rgba(33, 150, 83, 0.25);
    }

    .logginButton {
        background: #219653;
        color: white;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        margin-top: 20;
    }

    .up {
        color: #219653;
    }

    .marginTop10 {
        margin-top: 10;
        margin-bottom: 10;
    }

    .marginBottom {
        margin-bottom: 30;
    }

    .marginBottom2 {
        margin-bottom: 40;
    }

    .errors {
        color: #850000;
    }

    .link {
        text-decoration: underline;
    }

</style>
