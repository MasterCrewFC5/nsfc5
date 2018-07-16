<template>
    <Page class="page signup" actionBarHidden="true" loaded="pageLoaded">
        <StackLayout class="overlay" horizontalAlignment="center" verticalAlignment="center">
            <StackLayout class="width80" horizontalAlignment="center" verticalAlignment="center">
                <ActivityIndicator :busy="isBusy" color="white"/>
                <StackLayout orientation="horizontal" class="marginBottom" horizontalAlignment="center">
                    <Label text="Choose a blazon" class=" h1 white"/>
                </StackLayout>
                <StackLayout v-if="!logoSelect" orientation="horizontal" class="marginBottom"
                             horizontalAlignment="center" style="margin-bottom:3%">
                    <FlexboxLayout @tap="redirectToSelectLogo"
                                   style="background-color: rgba(237,237,237,0.6); border-radius: 50%; width: 250px; height: 250px"
                                   class="circle">
                        <Image src="~/createteam/dslr-camera.png" style="width: 40%;margin-left:30%"/>
                    </FlexboxLayout>
                </StackLayout>
                <StackLayout v-show="logoSelect" orientation="horizontal" class="marginBottom"
                             horizontalAlignment="center" style="margin-bottom:3%; width: 250px; height: 250px">
                    <StackLayout class="scroll-pane">
                        <Image :src="logoSelect" class="thumb img-circle"
                               style="width:200px; margin-left: 3%"/>
                    </StackLayout>
                </StackLayout>

                <ScrollView orientation="horizontal">
                    <StackLayout orientation="horizontal" class="scroll-menu">
                        <StackLayout class="scroll-pane" v-for="logo in logosCollection">
                            <Image :src="logo" class="thumb img-circle" @tap="selectBlazon(logo)"
                                   style="width:200px; margin-left: 3%"/>
                        </StackLayout>
                    </StackLayout>
                </ScrollView>

                <Button text="Confirm" @tap="submitLogo" class="logginButton"/>
                <Button text="Cancel" @tap="reset" class="logginButton"/>
            </StackLayout>
        </StackLayout>
    </Page>

</template>
<script>
    import Vue from 'nativescript-vue';
    import router from './../../router/index';
    import VueSocketio from 'vue-socket.io';

    export default {
        router,
        name: 'test',
        components: {},
        data() {
            return {
                logoSelect: '',
                isBusy: false,
                logosCollection: [
                    '~/football-shields/001-villarreal.png',
                    '~/football-shields/019-schalke-04.png',
                    '~/football-shields/008-real-madrid.png',
                    '~/football-shields/023-chelsea.png',
                    '~/football-shields/028-roma.png',
                    '~/football-shields/003-sampdoria.png',
                    '~/football-shields/022-barcelona.png',
                    '~/football-shields/002-valencia.png',
                    '~/football-shields/010-paris-saint-germain.png',
                    '~/football-shields/026-bayern-leverkusen.png',
                    '~/football-shields/007-sevilla.png',
                    '~/football-shields/020-nantes.png',
                    '~/football-shields/014-manchester-united.png',
                    '~/football-shields/030-arsenal.png',
                    '~/football-shields/013-nice.png',
                    '~/football-shields/009-leipzig.png',
                    '~/football-shields/018-internazionale-milano.png',
                    '~/football-shields/012-olympique-de-marseille.png',
                    '~/football-shields/027-atletico-de-madrid.png',
                    '~/football-shields/025-borusia-dortmund.png',
                    '~/football-shields/015-manchester-city.png',
                    '~/football-shields/024-borusia-monchengladbach.png',
                    '~/football-shields/011-olympique-lyonnais.png',
                    '~/football-shields/004-tottenham-hotspur.png',
                    '~/football-shields/017-juventus.png',
                    '~/football-shields/029-monaco.png',
                    '~/football-shields/021-bayen-munchen.png',
                    '~/football-shields/016-liverpool.png',
                    '~/football-shields/006-lazio.png',
                    '~/football-shields/005-napoli.png',
                ]
            };
        },
        methods: {
            selectBlazon(args) {
                this.logoSelect = args;
            },
            reset() {
                console.log('reset')
                this.$router.push('selectlogo');
            },
            submitLogo() {
                const img = this.logoSelect.split('/')
                const img2 = img[2];
                this.$router.push('/createteam-step1/'+img2);
            }
        },
        mounted() {
        }
    };
</script>
<style scoped="scss">
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