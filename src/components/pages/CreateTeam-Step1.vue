<template>
    <Page class="page signup" actionBarHidden="true" loaded="pageLoaded">
        <StackLayout class="overlay" horizontalAlignment="center" verticalAlignment="center">
            <StackLayout class="width80" horizontalAlignment="center" verticalAlignment="center">
                <ActivityIndicator :busy="isBusy" color="white"/>
                <StackLayout orientation="horizontal" class="marginBottom" horizontalAlignment="center">
                    <Label text="Create your team" class=" h1 white"/>
                </StackLayout>
                <StackLayout orientation="horizontal" class="marginBottom" horizontalAlignment="center">
                    <Label text="Step 1 : Choose a teamname" class="h2 white"/>
                </StackLayout>
                <StackLayout v-if="!$route.params.logoSelect" orientation="horizontal" class="marginBottom" horizontalAlignment="center">
                    <FlexboxLayout @tap="redirectToSelectLogo" style="background-color: rgba(237,237,237,0.6); border-radius: 50%; width: 250px; height: 250px" class="circle">
                        <Image src="~/createteam/dslr-camera.png" style="width: 40%;margin-left:30%"/>
                    </FlexboxLayout>
                </StackLayout>
                <StackLayout v-show="$route.params.logoSelect" orientation="horizontal" class="marginBottom"
                             horizontalAlignment="center" style="margin-bottom:3%; width: 250px; height: 250px">
                    <StackLayout class="scroll-pane">
                        <Image :src="'~/football-shields/'+$route.params.logoSelect" class="thumb img-circle"
                               style="width:200px; height: 200px; margin-left: 3%"/>
                    </StackLayout>
                </StackLayout>
                <Label v-if="$store.getters.fetchError" :text="$store.getters.fetchError" horizontalAlignment="left" class="h4 errors marginBottom2"/>

                <TextField v-model="teamname" hint="Team name" backgroundColor="white"/>
                <TextField v-model="teamnameShort" @textChange="shortnameUpper()" maxLength="3" hint="Short team name ( 3 uppercase letters )" class="marginTop10" backgroundColor="white"/>

                <Button v-show="$route.params.logoSelect" text="Confirm" @tap="submitTeamname()" class="logginButton"/>
            </StackLayout>

        </StackLayout>
    </Page>
</template>


<script>
    import 'babel-polyfill';
    import store from '../../store/index';
    import axios from 'axios';
    import config from '../../config/index';

    export default {
        store: store,
        name: 'createteam-step1',
        props: ['logoSelect'],
        components: {},
        data() {
            return {
                club: {},
                errors: [],
                isBusy: false,
                teamname: '',
                teamnameShort: '',
                blazon: '',
                myTimeout: null,
            };
        },
        methods: {
             submitTeamname() {
                 this.club.name = this.teamname;
                 this.club.shortName = this.teamnameShort;
                 this.club.blazon = this.blazon;
                 this.$store.dispatch('setClubName', this.club);
                this.$router.push('/createteam-step2');
            },
            redirectToSelectLogo(){
                this.$router.push('selectlogo');
            },
            shortnameUpper(){
                clearTimeout(this.myTimeout);
                if(this.teamnameShort.length > 0){

                    this.myTimeout = setTimeout(() => {
                        this.teamnameShort = this.teamnameShort.toUpperCase();
                    }, 1000);
                }
            },
            redirectTo(){
                this.$router.push('/createteam-step2')
            }

        },
        mounted(){
            if(this.$route.params.logoSelect) this.blazon = '~/football-shields/'+this.$route.params.logoSelect;
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
        height:100%;
        background: rgba(33, 150, 83, 0.25);
    }
    .logginButton{
        background: #219653;
        color: white;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        margin-top: 20;
    }
    .up{
        color: #219653;
    }
    .marginTop10{
        margin-top: 10;
        margin-bottom: 10;
    }
    .marginBottom{
        margin-bottom: 30;
    }
    .marginBottom2{
        margin-bottom: 40;
    }
    .errors{
        color: #850000;
    }
    .link{
        text-decoration: underline;
    }

</style>
