<template>
  <Page class="page">
    <ActionBar class="action-bar" title="Home"/>

    <StackLayout >
        <fc5topbar></fc5topbar>
        <Button class="btn btn-primary" @tap="$router.push('/store')">Store</Button>
        <Button class="btn btn-primary" @tap="$router.push('/search')">Search</Button>
        <Button class="btn btn-primary" @tap="$router.push('/manage')">Manage</Button>
        <Button class="btn btn-primary" @tap="$router.push('/findgame')">Find game</Button>
        <Button class="btn btn-primary" @tap="getUser">axios</Button>
        <Button class="btn btn-primary" @tap="makeRequest">http</Button>
        <Label :text="user" />
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
                console.dir(dataReceived.data);
                this.user = dataReceived.data[0]
            },
            async makeRequest() {
                const res = await http.request({
                    url: 'http://localhost:3001/user',
                    method: 'GET'
                })
                console.dir(res)
                console.dir(await http.request({
                    url: 'http://localhost:3001/user',
                    method: 'GET'
                }))
                this.user = res
            }

        }
    }
</script>

<style lang="scss">
    .page{
        background-color: red;
    }

    html, body{
        height: 100%;
    }
    body{
        background: url("../../assets/homepage/HomeBackground.png")  no-repeat center center fixed;
        background-size: cover;
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

    .home{
        height: 100%;

        .content{
            margin-top: -15%;
            height:100%;

            /* display: flex;
             align-items: center;
             justify-content: center;*/

            /*border: 1px solid black;*/
            label{
                font-family: Roboto;
                font-style: normal;
                font-weight: bold;
                font-size: 16px;
                color:white;
                letter-spacing: -0.06em;
            }
            .manage{
                top: 16%;
                left: 50%;
                transform: translateX(-50%);
                position: absolute;
            }
            .store{
                top: 50%;
                left: 0;
                transform: translateY(-50%);
                position: absolute;
            }
            .searchplayer{
                position: absolute;
                right: 0;
                top: 50%;
                transform: translateY(-50%);
            }
            .findgame{
                position: absolute;
                bottom: 15%;
                left: 50%;
                transform: translateX(-50%);
            }
        }
    }


</style>
