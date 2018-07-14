<template>
    <Page class="page signin" actionBarHidden="true" loaded="pageLoaded">
        <StackLayout class="overlay" horizontalAlignment="center" verticalAlignment="center">
            <StackLayout class="width80" horizontalAlignment="center" verticalAlignment="center">
                <ActivityIndicator :busy="isBusy" color="white"/>
                <StackLayout orientation="horizontal" class="marginBottom">
                    <Label text="sign" class="uppercase h1 white"/>
                    <Label text=" in" class="uppercase h1 up"/>
                </StackLayout>

                <Label text="Get ready for the next context ?" horizontalAlignment="left"
                       class="h4 white marginBottom"/>
                <WrapLayout v-for="(error, index) in errors" orientation="vertical" class="marginTopReverse marginBottom2">
                        <Label :text="errors[index]"
                               horizontalAlignment="left" class="h4 errors"/>
                </WrapLayout>

                <TextField v-model="username" hint="Username" backgroundColor="white"/>
                <TextField v-model="emailAddress" hint="Email" class="marginTop" backgroundColor="white"/>
                <TextField v-model="passwordInput" hint="Password" class="marginTop" secure="true"
                           backgroundColor="white"/>
                <TextField v-model="confirmPasswordInput" hint="Confirm password" class="marginTop10" secure="true"
                           backgroundColor="white"/>

                <Button text="Sign in" @tap="submitSignIn()" class="signButton"/>
                <Label text="Does already have an account ?" @tap="redirectSignUp" class="h4 white link"/>
            </StackLayout>

        </StackLayout>
    </Page>
</template>


<script>
    import 'babel-polyfill';
    import http from 'http';
    import axios from 'axios';
    import toast from 'nativescript-toast';
    import config from '../../config/index';

    export default {
        name: 'SignIn',
        components: {},
        data() {
            return {
                user: {},
                errors: [],
                isBusy: false,
                username: '',
                emailAddress: '',
                passwordInput: '',
                confirmPasswordInput: '',
            };
        },
        methods: {
            async submitSignIn() {
                let username = this.username.trim();
                let email = this.emailAddress.trim();
                let password = this.passwordInput.trim();
                let confirmPassword = this.confirmPasswordInput.trim();
                if (email && password && confirmPassword && username && !this.isBusy) {
                    this.isBusy = true;
                    const result = await this.postUser({username, email, password, confirmPassword});
                    this.isBusy = false;
                    if(typeof result !== 'undefined'){
                        if(typeof result.data !== 'undefined'){
                            this.showToast();
                            this.$router.replace('signup');
                        }
                    }
//                    if (this.$store.getters.fetchIsLoggedIn && !this.$store.getters.fetchError){
//                        this.$router.replace('home');
//                    }
                }
            },
            showToast() {
                const myToast = toast.makeText('User created ! Sign up with your email & password', 'long');
                myToast.show();
            },
            async postUser(user) {
                try {
                    this.errors = [];
                    const result = await axios.post(
                        config.apiUrl+'/api/users/register',
                        {
                            'username': user.username,
                            'email': user.email,
                            'plainPassword': {
                                'first': user.password,
                                'second': user.confirmPassword,
                            }
                        },
                        {
                            'Content-Type': 'application/json'
                        }
                    ).catch(error => {
                        if (error.response) {
                            if (error.response.data.errors.children.email.errors) {
                                for (let i = 0; i < error.response.data.errors.children.email.errors.length; i++) this.errors.push(error.response.data.errors.children.email.errors[i])
                            }
                            if (error.response.data.errors.children.username.errors) {
                                for (let i = 0; i < error.response.data.errors.children.username.errors.length; i++) this.errors.push(error.response.data.errors.children.username.errors[i])
                            }
                            if (error.response.data.errors.children.plainPassword.children.first.errors) {
                                for (let i = 0; i < error.response.data.errors.children.plainPassword.children.first.errors.length; i++) this.errors.push(error.response.data.errors.children.plainPassword.children.first.errors[i])
                            }
                        }
                    });
                    return result;
                } catch (e) {
                    console.log('error', e);
                    this.errors.push(e);
                }
            },
            redirectSignUp() {
                this.$router.push('signup');
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
        height: 100%;
        background: rgba(33, 150, 83, 0.25);
    }

    .signButton {
        background: #008255;
        color: white;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        margin-top: 20;
    }

    .up {
        color: #008255;
    }

    .marginTop {
        margin-top: 10;
    }

    .marginTop10 {
        margin-top: 10;
        margin-bottom: 10;
    }

    .marginBottom {
        margin-bottom: 30;
    }

    .marginBottom2 {
        margin-bottom: 20;
    }
    .marginTopReverse{
        margin-top: -10;
    }

    .errors {
        color: #ff0000;
    }
    .link{
        text-decoration: underline;
    }
</style>
