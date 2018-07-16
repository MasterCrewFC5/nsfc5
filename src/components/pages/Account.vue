<template>
    <Page loaded="pageLoaded" actionBarHidden="true">
        <AbsoluteLayout>
            <StackLayout top="0" left="0" width="100%" height="100%">
                <fc5topbar></fc5topbar>
                <StackLayout class="width80" horizontalAlignment="center" verticalAlignment="center">
                    <ActivityIndicator :busy="isBusy" color="white"/>
                    <StackLayout orientation="horizontal" horizontalAlignment="center" class="marginBottom" style="margin-bottom: 5%">
                        <Image :src="club.blazon" left="25%" width="25%"/>
                    </StackLayout>

                    <StackLayout orientation="horizontal" horizontalAlignment="center" class="marginBottom" style="margin-bottom: 5%">
                        <Label :text="'Short name : '+club.shortName" class="uppercase h1 white"/>
                    </StackLayout>

                    <Label :text="'Team name :' +club.name" horizontalAlignment="center" class="h4 white marginBottom2" style="margin-bottom: 5%"/>

                    <StackLayout orientation="horizontal" class="marginBottom">
                        <StackLayout orientation="vertical" horizontalAlignment="left" class="marginBottom" style="margin-left: 5%;margin-right: 5%">
                            <Label text="Home kit" class="uppercase h1 white" style="margin-bottom: 5%"/>
                            <Image :src="kitHome" left="25%" width="25%"/>
                        </StackLayout>
                        <StackLayout orientation="vertical" horizontalAlignment="right" class="marginBottom" style="margin-left: 5%;margin-right: 5%; margin-bottom: 10%">
                            <Label text="Away kit" class="uppercase h1 white" style="margin-bottom: 5%"/>
                            <Image :src="kitAway" left="25%" width="25%"/>
                        </StackLayout>
                    </StackLayout>

                    <StackLayout orientation="vertical" horizontalAlignment="center" class="marginBottom" style="margin-bottom: 5%; margin-left: 5%">
                        <Label :text="'Stadium : '+stadium.name" class="uppercase h1 white" style="margin-bottom: 5%"/>
                        <Label :text="'Current capacity / Max : '+stadium.currentCapacity+' / '+stadium.maximumCapacity" class="uppercase h1 white"/>

                    </StackLayout>
                </StackLayout>


            </StackLayout>
        </AbsoluteLayout>
    </Page>
</template>
<script>
    import Vue from 'nativescript-vue';
    import router from './../../router/index';
    import fc5topbar from '../fc5Topbar.vue';

    export default {
        router,
        name: 'test',
        components: {fc5topbar},
        data() {
            return {
                isBusy: false,
                club: {},
                kitHome:'',
                kitAway:'',
                stadium: {}
            };
        },
        methods: {},
        mounted() {

            console.log('test', this.$store.getters.fetchCurrentUser);
            if (!this.$store.getters.fetchCurrentUser) this.$router.replace('signup');
            if (typeof this.$store.getters.fetchCurrentClub.blazon !== 'undefined') {
                this.club = this.$store.getters.fetchCurrentClub;
                console.log('club', this.club)
                this.kitHome = this.club.jerseys[0].img;
                this.kitAway = this.club.jerseys[1].img;
                this.stadium = this.club.stadium;
            }
            if (typeof this.$store.getters.fetchCurrentClub.blazon === 'undefined') {

                setTimeout(() => {
                    this.$router.push('createteam-step1');
                }, 1000);
            }

        }
    };
</script>
<style scoped="scss">

</style>