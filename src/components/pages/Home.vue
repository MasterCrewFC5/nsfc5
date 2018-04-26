<template>
    <Page class="page home" actionBarHidden="true" >

        <StackLayout >
            <fc5topbar></fc5topbar>

            <GridLayout columns="*,*" rows="*,*,*" class="menu" >

                <GridLayout col="0" row="0" colSpan="2" horizontalAlignment="center" verticalAlignment="center">
                    <Image src="~/homepage/manage.png" stretch="none"  class="menu-icon" @tap="makeRequest"/>
                </GridLayout>

                <GridLayout col="0" row="1" horizontalAlignment="left" >
                    <Image src="~/homepage/store.png" stretch="none"  class="menu-icon" @tap="$router.replace('/store')"/>
                </GridLayout>

                <GridLayout col="1" row="1" horizontalAlignment="right" >
                    <Image src="~/homepage/searchplayer.png" stretch="none"  class="menu-icon" @tap="$router.push('/search')"/>
                </GridLayout>

                <GridLayout col="0" row="2" colSpan="2" horizontalAlignment="center" >
                    <Image src="~/homepage/findgame.png" stretch="none"  class="menu-icon" @tap="$router.replace('/findgame')"/>
                </GridLayout>

            </GridLayout>
        </StackLayout>


    </Page>
</template>


<script>
    import 'babel-polyfill'
    import axios from 'axios'
    import store from '../../store/index'
    import fc5topbar from '../fc5Topbar.vue'
    import http from 'http'

    export default {
        store: store,
        name: 'app',
        components: {fc5topbar},
        data(){
            return {
                user: {}
            }
        },
        methods:{
            async getUser(){
                const dataReceived = await axios.get('http://localhost:3001/user', {
                    responseType: 'json'
                });
                this.user = dataReceived.data[0]
            },
            async makeRequest() {
                const res = await http.request({
                    url: 'http://localhost:3001/user',
                    method: 'GET'
                })
                this.user = res
            }

        }
    }
</script>

<style scoped>

    .page{
        background-image: ~/homepage/HomeBackground.png;
        background-repeat: no-repeat;
        background-position: center;
        background-size: 100% 100%;
    }


    .menu-icon{
        height:auto;
        width:auto;
    }
    .menu-label{
        color:white;
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        text-align: center;
        letter-spacing: -0.1em;
        font-size: 17px;
    }

    .pub{
        position: absolute;
        top: 8%;
        left: 0%;
        display: block;
        height: 8%;
        width: 100%;
        background: grey;
    }

</style>
