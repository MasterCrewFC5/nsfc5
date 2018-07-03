<template>
    <Page loaded="pageLoaded" actionBarHidden="true">
        <AbsoluteLayout>
            <StackLayout top="0" left="0" width="100%" height="100%">
                <fc5topbar></fc5topbar>
                <ActivityIndicator :busy="isBusy" color="white"/>

                <Image src="~/player.svg" height="300"/>

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

            };
        },
        methods: {},
        mounted() {
            console.log('test', this.$store.getters.fetchCurrentUser);
            if (!this.$store.getters.fetchCurrentUser) this.$router.replace('signup');
        }
    };
</script>
<style scoped="scss">

</style>