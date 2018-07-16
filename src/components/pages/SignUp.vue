<template>
    <Page class="page signup" actionBarHidden="true" loaded="pageLoaded">
        <StackLayout class="overlay" horizontalAlignment="center" verticalAlignment="center">
            <StackLayout class="width80" horizontalAlignment="center" verticalAlignment="center">
                <ActivityIndicator :busy="isBusy" color="white"/>
                <StackLayout orientation="horizontal" class="marginBottom">
                    <Label text="sign" class="uppercase h1 white"/>
                    <Label text=" up" class="uppercase h1 up"/>
                </StackLayout>

                <Label text="Get ready for the next context ?" horizontalAlignment="left" class="h4 white marginBottom2"/>

                <Label v-if="$store.getters.fetchError" :text="$store.getters.fetchError" horizontalAlignment="left" class="h4 errors marginBottom2"/>

                <TextField v-model="emailAddress" hint="Email" backgroundColor="white"/>
                <TextField v-model="passwordInput" hint="Password" class="marginTop10" secure="true" backgroundColor="white"/>

                <Label text="Forgot your password ?" horizontalAlignment="right" class="h4 white"/>
                <Button text="Log in" @tap="submitSignUp" class="logginButton"/>
                <Label text="Doesn't have an account ?" @tap="redirectSignIn" class="h4 white link"/>
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
        name: 'app',
        components: {},
        data() {
            return {
                user: {},
                errors: [],
                isBusy: false,
                emailAddress: 'toto@toto.com',
                passwordInput: 'toto',
            };
        },
        methods: {
            async submitSignUp() {
                let email = this.emailAddress.trim();
                let password = this.passwordInput.trim();
                if(email && password && !this.isBusy){
                    this.isBusy = true;
                    await this.$store.dispatch('fetchUser', {email, password});
                    this.isBusy = false;
                    console.log('toto', this.$store.getters.fetchIsLoggedIn )
                    console.log('toto', !this.$store.getters.fetchError)
                    if (this.$store.getters.fetchIsLoggedIn && !this.$store.getters.fetchError){
                        console.log('yolo', this.$store.getters.fetchCurrentUser.token);
                        this.$router.replace('home');
                    }
                }
            },
            redirectSignIn(){
                this.$router.push('signin');
            }

        }
    };
</script>

<style scoped>

    .page {
        background-image: ~/signup/background-signup.jpeg;
        background-repeat: no-repeat;
        background-position: center;
        background-size: 100% 100%;
    }

    .width80 {
        width: 60%;
    }

    .h1 {
        font-style: normal;
        font-weight: bold;
        line-height: normal;
        font-size: 36px;
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
