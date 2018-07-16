<template>
    <Page class="page signup" actionBarHidden="true" loaded="pageLoaded">
        <StackLayout class="overlay" horizontalAlignment="center" verticalAlignment="center">
            <StackLayout class="width80" horizontalAlignment="center" verticalAlignment="center">
                <ActivityIndicator :busy="isBusy" color="white"/>
                <StackLayout orientation="horizontal" class="marginBottom" horizontalAlignment="center">
                    <Label text="Create your team" class=" h1 white"/>
                </StackLayout>
                <StackLayout orientation="horizontal" class="marginBottom" horizontalAlignment="center">
                    <Label text="Step 2 b : Select the style" class="h2 white"/>
                </StackLayout>
                <StackLayout orientation="horizontal" horizontalAlignment="center">
                    <StackLayout v-show="jerseySelect === '1'" orientation="horizontal" horizontalAlignment="center" @tap="selectJersey('1')"
                                 style="background-color: rgba(237,237,237,0.6); border-radius: 50%; width: 180px; height: 180px">
                        <Image src="~/football-jersey/jersey1-red.png" style="width: 60%"/>
                    </StackLayout>
                    <StackLayout v-show="jerseySelect !== '1'" orientation="horizontal" horizontalAlignment="center" @tap="selectJersey('1')"
                                 style="background-color: rgba(237,237,237,0.6); border-radius: 50%; width: 180px; height: 180px">
                        <Image src="~/football-jersey/jersey1-black.png" style="width: 60%"/>
                    </StackLayout>
                    <StackLayout orientation="horizontal" horizontalAlignment="center" @tap="selectJersey('2')"
                                 style="background-color: rgba(237,237,237,0.6); border-radius: 50%; width: 180px; height: 180px">
                        <Image :src="jerseys[1]" style="width: 60%"/>
                    </StackLayout>
                    <StackLayout orientation="horizontal" horizontalAlignment="center" @tap="selectJersey('3')"
                                 style="background-color: rgba(237,237,237,0.6); border-radius: 50%; width: 180px; height: 180px">
                        <Image :src="jerseys[2]" style="width: 60%"/>
                    </StackLayout>@tap="redirectStep2B"
                    <StackLayout orientation="horizontal" horizontalAlignment="center" @tap="selectJersey('4')"
                                 style="background-color: rgba(237,237,237,0.6); border-radius: 50%; width: 180px; height: 180px">
                        <Image :src="jerseys[3]" style="width: 60%"/>
                    </StackLayout>
                </StackLayout>
                <StackLayout orientation="horizontal" horizontalAlignment="center">
                    <StackLayout orientation="horizontal" horizontalAlignment="center" @tap="selectJersey('5')"
                                 style="background-color: rgba(237,237,237,0.6); border-radius: 50%; width: 180px; height: 180px">
                        <Image :src="jerseys[4]" style="width: 60%"/>
                    </StackLayout>
                    <StackLayout orientation="horizontal" horizontalAlignment="center" @tap="selectJersey('6')"
                                 style="background-color: rgba(237,237,237,0.6); border-radius: 50%; width: 180px; height: 180px">
                        <Image :src="jerseys[5]" style="width: 60%"/>
                    </StackLayout>
                    <StackLayout orientation="horizontal" horizontalAlignment="center" @tap="selectJersey('7')"
                                 style="background-color: rgba(237,237,237,0.6); border-radius: 50%; width: 180px; height: 180px">
                        <Image :src="jerseys[6]" style="width: 60%"/>
                    </StackLayout>
                    <StackLayout orientation="horizontal" horizontalAlignment="center" @tap="selectJersey('8')"
                                 style="background-color: rgba(237,237,237,0.6); border-radius: 50%; width: 180px; height: 180px">
                        <Image :src="jerseys[7]" style="width: 60%"/>
                    </StackLayout>
                </StackLayout>
                <Button text="Next step" @tap="submitKit" class="logginButton"/>
            </StackLayout>

        </StackLayout>
    </Page>
</template>


<script>
    import 'babel-polyfill';
    import store from '../../store/index';
    import axios from 'axios';

    export default {
        store: store,
        name: 'createteam-step2bbis',
        props: ['kitHome'],
        components: {},
        data() {
            return {
                user: {},
                errors: [],
                isBusy: false,
                jerseySelect: '',
                jerseys: [
                    '~/football-jersey/jersey1-black.png',
                    '~/football-jersey/jersey2-black.png',
                    '~/football-jersey/jersey3-black.png',
                    '~/football-jersey/jersey4-black.png',
                    '~/football-jersey/jersey5-black.png',
                    '~/football-jersey/jersey6-black.png',
                    '~/football-jersey/jersey7-black.png',
                    '~/football-jersey/jersey8-black.png',
                ]
            };
        },
        methods: {
            submitKit() {
                console.log('ptin', 'createteam-step2cbis/jersey'+this.jerseySelect+'/'+this.$route.params.kitHome)
                this.$router.push('/createteam-step2cbis/jersey'+this.jerseySelect+'/'+this.$route.params.kitHome);

            },
            redirectToSelectLogo() {
                this.$router.push('selectlogo');
            },
            selectJersey(args){
                this.jerseySelect = args;
                this.jerseys.forEach((item, index) => {
                    this.jerseys[index] = '~/football-jersey/jersey'+(index+1)+'-black.png'
                });
                this.jerseys[args-1] = '~/football-jersey/jersey'+args+'-red.png';
            }

        },
        mounted() {

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
        width: 80%;
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
    .active{
        border: 2px solid white;
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
