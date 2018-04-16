<template>
    <GridLayout columns="auto, *, auto" rows="45" backgroundColor="#F0F0F0">

        <GridLayout row="0" col="0" rows="*,*" columns="30,auto" >
            <Image src="~/topbar/userlogo.png" stretch="aspectFit" class="userlogo" row="0" col="0" rowSpan="2" verticalAlignment="center"></Image>
            <Label :text="user.username" class="test" row="0" col="1" />
            <Label :text="user.teamname" class="teamname" row="1" col="1" />
        </GridLayout>


        <StackLayout row="0" col="1" @tap="getUser">
            <Image src="~/topbar/fc5logo.png" stretch="aspectFit" class="fc5logo" verticalAlignment="center" />
        </StackLayout>


        <GridLayout row="0" col="2" columns="auto,*" rows="*,*,*" >
            <StackLayout row="1" col="0"  @tap="$router.push('/friends')">
                <Image src="~/topbar/friends.png" stretch="aspectFit" ></Image>
            </StackLayout>
            <Label :text="user.money[0].dollars + ' $'" class="revenus" row="0" col="1" />
            <Label :text="user.money[0].revenus + ' /month'" class="revenus" row="1" col="1" />
            <Label :text="user.money[0].fc5 + ' FC5'" class="revenus" row="2" col="1" />
        </GridLayout>

    </GridLayout>
</template>

<script>
    import axios from 'axios'
    import store from './../store/index.js'

    export default{
        store: store,
        name: 'fc5topbar',
        data(){
            return {
                message: "topbar",
                user:
                    {
                        id: 1,
                        username: "Negoraaa",
                        teamname: "Olympique claqué",
                        friends: [
                            {
                                id: 1,
                                username: "Creemson",
                                teamname: "Arsemâle FC"
                            }
                        ],
                        money: [
                            {
                                id: 1,
                                dollars: 140000,
                                revenus: 32750,
                                fc5: 530
                            }
                        ],
                        img: [
                            {
                                id: 1,
                                src: "assets/userlogo.png"
                            }
                        ]
                    }
                ,
            }
        },
        methods: {
            async getUser(){
                const dataReceived = await axios.get('http://localhost:3001/user', {
                    responseType: 'json'
                });
                this.user = dataReceived
                console.dir(this.user.toString())
            },

        },
        async created(){
            try {
                const response = await axios.get('http://localhost:3001/user', {
                    responseType: 'json'
                });
                console.dir("response: " + response);

                this.user = response
                console.dir("user: " + this.user.username)

            } catch (error) {
                console.error(error)
            }


        },
        computed: {}
    }

</script>

<style lang="scss" scoped>
    .teamname{
        font-size: 11px;
    }

    .username{
        @import url('https://fonts.googleapis.com/css?family=Roboto');
        @import url('https://fonts.googleapis.com/css?family=Roboto:100');
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;

        font-size: 16px;
    }

    .revenus{
        font-size: 10px;
        text-align: right;
    }

    .fc5logo{
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.24)) ;
        height: 80%;
        margin-top: 10%;
    }

    .userlogo{
        padding: 5px;
        margin: 5px;
    }
/*
    $textgrey: #595555;
    $almostwhite: #F0F0F0;

    .topbar {
        position: absolute;
        z-index: 10;
        left: 0%;
        right: 0%;
        top: 0%;
        height: 8%;

        background: $almostwhite;
        box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.24), 0px 0px 2px rgba(0, 0, 0, 0.12);

        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-around;
        align-content: space-between;
        align-items: center;

        .leftpart {
            text-align: left;

            height: 100%;
            width: 30%;

            order: 1;

            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            align-content: space-around;
            align-items: center;
            .userlogo {
                height: 100%;
                width: auto;

                order: 1;
                display: flex;
                align-items: center;
                img{
                    height:60%;
                    width: auto;
                    padding: 0px 3px 0px 0px;
                }

            }
            .labels{
                max-height: 50px;

                order: 2;
                .username{
                    font-style: normal;
                    font-weight: bold;
                    font-size: 18px;
                    color: $textgrey;

                }
                .teamname {
                    font-style: normal;
                    font-weight: normal;
                    font-size: 10px;
                    text-align: center;
                    color: $textgrey;

                }
            }


        }

        .fc5logo{
            height: 100%;
            width: 30%;

            order: 2;

            display: flex;
            align-items: center;
            img{
                height: 80%;
                width: auto;
                filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.24)) ;
            }
        }

        .rightpart {
            font-style: normal;
            font-weight: bold;
            font-size: 10px;
            text-align: right;
            color: $textgrey;

            width: 30%;

            order: 3;

            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            align-items: center;
            .minimenu{
                order: 1;
                flex-grow: 1;
                .fa-users{
                    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.24)) ;
                    font-size: 18px;
                }
            }
            .income {
                font-style: normal;
                font-weight: bold;
                font-size: 10px;
                text-align: right;
                color: $textgrey;

                width: 30%;

                flex-grow: 2;
                order: 2;
            }
        }
    }
*/


</style>
