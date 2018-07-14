<template>
    <Page class="page seefriends" actionBarHidden="true" loaded="pageLoaded">
        <StackLayout style="width: 100%">
            <!--Add your page content here  horizontalAlignment="center" verticalAlignment="center" -->
            <fc5topbar></fc5topbar>
            <AbsoluteLayout style="width: 100%; margin-top: 10%" horizontalAlignment="center">
                <Image src="~/seefriends/red-rubbon.png" left="25%" width="90%"/>
                <Label text="ADD FRIEND" left="100%" width="50%"
                       style="font-size: 22px; color: white; text-align: center; margin-top: 2%"/>
            </AbsoluteLayout>
            <StackLayout orientation="horizontal"
                         style="width:90%; background-color: white; padding-top: 2%; padding-bottom: 2%; margin-bottom:2%">
                <TextField v-model="textFieldValue" hint="Enter text..." @textChange="inputFilter"
                           style="width: 40%; margin-left: 3%; margin-right: 3%"/>

                <Button v-if="textFieldValue" text="Reset" @tap="onReset" class="blue"/>
                <!--<Searchbar hint="Enter text..." v-model="textFieldValue" @textChange="inputFilter" @clear="onReset"></Searchbar>-->
            </StackLayout>
            <ActivityIndicator v-show="isBusy" :busy="isBusy" color="white" />
            <ListView v-show="!isBusy && textFieldValue && usersFilter.length > 0" horizontalAlignment="center" class="list-group"
                      for="userFilter in usersFilter" @itemTap="onItemTap"
                      style="height:50%; width: 85%; margin-left:2%">
                <v-template>
                    <FlexboxLayout flexDirection="row" class="list-group-item flexbox"
                                   style="padding-top:10%; padding-bottom:10%;margin-top:2%; margin-left:5%; background-color: white;">
                        <Image :src="userFilter.imageSrc" class="thumb img-circle"
                               style="width:10%; margin-left: 3%"/>
                        <StackLayout orientation="vertical" style="width:45%; margin-left: 3%">
                            <Label :text="userFilter.username" class="list-group-item-heading username"/>
                            <Label v-if="userFilter.teamName" :text="userFilter.teamName"
                                   class="list-group-item-heading" style="margin-top: 2%"/>
                        </StackLayout>
                        <Button v-show="!isFriend(userFilter.id) && userFilter.add" text="ADD" @tap="onAddFriend(userFilter.id)" style="margin-right: 2%" class="blue"/>
                        <Button v-show="!isFriend(userFilter.id) && !userFilter.add" text="SENDED" style="margin-right: 2%" class="green"/>
                        <Button v-show="isFriend(userFilter.id)" text="Already friend" style="margin-right: 2%" class="green"/>
                    </FlexboxLayout>
                </v-template>
            </ListView>

            <FlexboxLayout v-show="!isBusy && textFieldValue.length > 0 && usersFilter.length < 1" flexDirection="row"
                           class="list-group-item flexbox"
                           style="padding-top:10%; padding-bottom:10%;margin-top:2%; margin-left:5%; margin-right:5%; margin-bottom:5%; background-color: white;">
                <StackLayout orientation="vertical" style="width:45%; margin-left: 3%">
                    <Label text="No users match" class="list-group-item-heading username"/>
                </StackLayout>
            </FlexboxLayout>
            <AbsoluteLayout horizontalAlignment="center" style="width: 100%; ">
                <Image src="~/seefriends/red-rubbon.png" left="25%" width="90%"/>
                <Label text="MY FRIENDS" left="100%" width="50%"
                       style="font-size: 22px; color: white; text-align: center; margin-top: 3%"/>
            </AbsoluteLayout>
            <ListView v-show="friends.length > 0" horizontalAlignment="center" class="list-group" for="friend in friends"
                      @itemTap="onItemTap"
                      style="height:50%; width: 85%; margin-left:2%;">
                <v-template>
                    <FlexboxLayout flexDirection="row" class="list-group-item flexbox"
                                   style="padding-top:10%; padding-bottom:10%;margin-top:5%; margin-left:5%; background-color: white;">

                        <Image :src="friend.imageSrc" class="thumb img-circle" style="width:10%; margin-left: 3%"/>
                        <StackLayout orientation="vertical" style="width:45%; margin-left: 3%">
                            <Label :text="friend.username" class="list-group-item-heading username"/>
                            <Label v-show="friend.teamName" :text="friend.teamName" class="list-group-item-heading"
                                   style="margin-top: 2%"/>
                        </StackLayout>
                        <Button text="DUEL" @tap="onDuel(friend.id)" style="margin-right: 2%" class="blue"/>
                        <Button text="X" style="width: 10%" @tap="onDelete(friend.id)"/>

                    </FlexboxLayout>
                </v-template>
            </ListView>

            <FlexboxLayout v-show="friends.length < 1" flexDirection="row" class="list-group-item flexbox"
                           style="height:20%; width: 85%;padding-top:10%; padding-bottom:10%;margin-top:5%; margin-left:5%; background-color: white;">
                <StackLayout horizontalAlignment="center" verticalAlignment="center" orientation="vertical"
                             style="width:80%; margin-left: 2%">
                    <Label text="You don't have any friends." style="margin-left: 2%" class="list-group-item-heading username"/>
                    <Label text="You can search and add them !" style="margin-left: 2%" class="list-group-item-heading username"/>
                </StackLayout>
            </FlexboxLayout>
        </StackLayout>
    </Page>
</template>


<script>
    import 'babel-polyfill';
    import store from '../../store/index';
    import fc5topbar from './../fc5Topbar';
    import * as admob from 'nativescript-admob';
    import axios from 'axios';
    import config from '../../config/index';


    export default {
        store: store,
        name: 'app',
        components: {fc5topbar},
        data() {
            return {
                user: {},
                textFieldValue: '',
                usersFilter: [],
                isBusy: false,
                friends: [],
                myTimeout: null,
                ad: null,
            };
        },
        methods: {

            onDuel(args) {
                console.log('Button was pressed', args);
            },
            async onAddFriend(args) {
                const result = await this.addFriend(args);
            },
            async onDelete(args) {
                console.log('Button was pressed', args);
                const result = await axios.delete(
                    config.apiUrl + '/api/friend/' + args,
                    {
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': 'Bearer ' + this.$store.getters.fetchCurrentUser.token
                        }
                    }
                );
                return result.data.result;
            },
            onReset() {
                this.textFieldValue = '';
            },
            async inputFilter() {
                clearTimeout(this.myTimeout);
                if (this.textFieldValue.length > 0) {
                    this.isBusy = true;
                    this.myTimeout = await setTimeout(async () => {
                        this.usersFilter = [];
                        const result = await this.searchFriends();
                        this.isBusy = false;
                        result.forEach(item => {
                            item.add = true;
                        })
                        this.usersFilter = result;
                    }, 1500);
                }
            },
            onItemTap: function (args) {
                console.log('Item with index: ' + args.index + ' tapped', args);
            },
            async searchFriends() {
                const result = await axios.get(
                    config.apiUrl + '/api/users/search/' + this.textFieldValue,
                    {
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': 'Bearer ' + this.$store.getters.fetchCurrentUser.token
                        }
                    }
                );
                return result.data.result;
            },
            async addFriend(idUser) {
                const result = await axios.post(
                    config.apiUrl + '/api/friend/add',
                    {
                        'friend_id': idUser,
                    },
                    {
                        headers:{
                            'Content-Type': 'application/json',
                            'Authorization': 'Bearer ' + this.$store.getters.fetchCurrentUser.token
                        },
                    },
                );

                this.usersFilter.forEach(item => {
                    if(item.id === idUser) item.add = false;
                    console.log('result test',!item.add);
                    console.log('result test', !this.isFriend(idUser) && !item.add);
                });
                //return result.data.result;
            },
            async getFriends() {
                const result = await axios.post(
                    config.apiUrl + '/api/users/login',
                    {
                        'email': user.email,
                        'password': user.password
                    },
                    {
                        'Content-Type': 'application/json'
                    }
                );
                return result;
            },
            isFriend(userID){
                let isFriend = false;
                this.friends.forEach(item => {
                    if (item.id === userID) isFriend = true;
                });
                return isFriend;
            }
        },
        async mounted() {
            setTimeout(function(){
                const ad = admob.createBanner({
                    // if this 'view' property is not set, the banner is overlayed on the current top most view
                    // view: ..,
                    testing: true, // set to false to get real banners
                    size: admob.AD_SIZE.SMART_BANNER, // anything in admob.AD_SIZE, like admob.AD_SIZE.SMART_BANNER
                    iosBannerId: 'ca-app-pub-8473532928573449/3794633374', // add your own
                    androidBannerId: 'ca-app-pub-8473532928573449/7564882643', // add your own
                    // Android automatically adds the connected device as test device with testing:true, iOS does not
                    iosTestDeviceIds: ['753EBB3AED84580059EBB18A5219B8DD'],
                    margins: {
                        // if both are set, top wins
                        top: 60
                        //bottom: 10
                    },
                    keywords: ['foot', 'games'] // add keywords for ad targeting
                }).then(
                    () => {
                        console.log('admob createBanner done');
                        return "cool"
                    },
                    function (error) {
                        console.log('admob createBanner error: ' + error);
                        return error;
                    }
                );
            }, 1000);
            await this.$store.dispatch('fetchFriends', this.$store.getters.fetchCurrentUser.token);
            this.friends = this.$store.getters.fetchCurrentFriends;
        }
    };
</script>

<style scoped>
    .page{
        font-family: Roboto;
    }

    .home-panel {
        vertical-align: center;
        font-size: 20;
        margin: 15;
    }

    .description-label {
        margin-bottom: 15;
    }

    .flexbox {
        flex-wrap: wrap;
    }

    .username {
        font-size: 18px;
        font-weight: bold;
    }

    .green {
        background: #27AE60;
        color: white;
    }

    .blue {
        background: #2F80ED;
        color: white;
    }
</style>
