<template>
    <Page>
        <AbsoluteLayout>
            <StackLayout @touch="onTouch" top="0" left="0" width="100%" height="100%">
                <ActivityIndicator :busy="isBusy" color="white"/>
            </StackLayout>
        </AbsoluteLayout>
    </Page>
</template>
<script>
    import Vue from 'nativescript-vue';
    import router from './../../router/index';
    import VueSocketio from 'vue-socket.io';

    Vue.use(VueSocketio, 'http://213.32.70.55:3000');
    //Vue.use(VueSocketio, 'http://192.168.1.14:3000');
    //Vue.use(VueSocketio, 'http://192.168.180.12:3000');

    export default {
        router,
        name: "test",
        components: {},
        points: [],
        sockets:{
            connect: function(){
                console.log('socket connected')
            },
            roomFind: function(data){
                console.log('this method was fired by the socket server. eg: io.emit("customEmit", data)', data)
            },
            roomFull: function (data) {
                console.log('room full event', data);
                this.isBusy = false;
            }
        },
        data(){
            return{
                currentPoints: 0,
                isBusy: true,
            }
        },
        methods:{
            onTouch(e) {
                console.log('test')
                //this.$socket.emit('messages', JSON.stringify({'message':'body message'}))
            },
            clickButton: function(val){
                // $socket is socket.io-client instance
                this.$socket.emit('emit_method', val);
            }
        },
        mounted() {
            this.$socket.emit('searchRoom')
        }
    }
</script>
<style scoped="scss">

</style>