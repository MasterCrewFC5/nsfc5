<template>
    <Page class="page signup" actionBarHidden="true" loaded="pageLoaded">
        <StackLayout class="overlay" horizontalAlignment="center" verticalAlignment="center">
            <StackLayout class="width80" horizontalAlignment="center" verticalAlignment="center">
                <ActivityIndicator :busy="isBusy" color="white"/>
                <StackLayout orientation="horizontal" class="marginBottom" horizontalAlignment="center">
                    <Label text="Create your team" class=" h1 white"/>
                </StackLayout>
                <StackLayout orientation="horizontal" class="marginBottom" horizontalAlignment="center">
                    <Label text="Step 2 c : Select the color" class="h2 white"/>
                </StackLayout>
                <StackLayout orientation="horizontal" horizontalAlignment="center">
                    <StackLayout orientation="horizontal" horizontalAlignment="center" @tap="selectKit($route.params.jersey+'-red')" :class="kitSelect === $route.params.jersey+'-red' ? 'selected' : 'noselected'"
                                 style="border-radius: 50%; width: 180px; height: 180px">
                        <Image :src="'~/football-jersey/'+$route.params.jersey+'-red.png'" style="width: 60%"/>
                    </StackLayout>
                    <StackLayout orientation="horizontal" horizontalAlignment="center" @tap="selectKit($route.params.jersey+'-green')" :class="kitSelect === $route.params.jersey+'-green' ? 'selected' : 'noselected'"
                                 style="border-radius: 50%; width: 180px; height: 180px">
                        <Image :src="'~/football-jersey/'+$route.params.jersey+'-green.png'" style="width: 60%"/>
                    </StackLayout>
                    <StackLayout orientation="horizontal" horizontalAlignment="center" @tap="selectKit($route.params.jersey+'-yellow')" :class="kitSelect === $route.params.jersey+'-yellow' ? 'selected' : 'noselected'"
                                 style="border-radius: 50%; width: 180px; height: 180px">
                        <Image :src="'~/football-jersey/'+$route.params.jersey+'-yellow.png'" style="width: 60%"/>
                    </StackLayout>
                </StackLayout>
                <StackLayout orientation="horizontal" horizontalAlignment="center">
                    <StackLayout orientation="horizontal" horizontalAlignment="center" @tap="selectKit($route.params.jersey+'-black')" :class="kitSelect === $route.params.jersey+'-black' ? 'selected' : 'noselected'"
                                 style="border-radius: 50%; width: 180px; height: 180px">
                        <Image :src="'~/football-jersey/'+$route.params.jersey+'-black.png'" style="width: 60%"/>
                    </StackLayout>
                    <StackLayout orientation="horizontal" horizontalAlignment="center" @tap="selectKit($route.params.jersey+'-pink')" :class="kitSelect === $route.params.jersey+'-pink' ? 'selected' : 'noselected'"
                                 style="border-radius: 50%; width: 180px; height: 180px">
                        <Image :src="'~/football-jersey/'+$route.params.jersey+'-pink.png'" style="width: 60%"/>
                    </StackLayout>
                    <StackLayout orientation="horizontal" horizontalAlignment="center" @tap="selectKit($route.params.jersey+'-blue')" :class="kitSelect === $route.params.jersey+'-blue' ? 'selected' : 'noselected'"
                                 style="border-radius: 50%; width: 180px; height: 180px">
                        <Image :src="'~/football-jersey/'+$route.params.jersey+'-blue.png'" style="width: 60%"/>
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
        name: 'createteam-step2c',
        props: ['jersey'],
        components: {},
        data() {
            return {
                user: {},
                errors: [],
                isBusy: false,
                jerseySelect : 1,
                kitSelect: ''
            };
        },
        methods: {
            submitKit() {
                console.log('toto', 'createteam-step2/'+this.kitSelect)
                this.$router.push('/createteam-step2/'+this.kitSelect);
            },
            redirectToSelectLogo() {
                this.$router.push('selectlogo');
            },
            selectKit(args){
                this.kitSelect = args;
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
    .selected{
        background-color: #cec1b3;
    }
    .noselected{
        background-color: #e5e5e5;
    }
</style>
