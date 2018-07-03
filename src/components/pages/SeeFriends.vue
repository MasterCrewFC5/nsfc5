<template>
    <Page class="page seefriends" actionBarHidden="true" loaded="pageLoaded">
        <StackLayout style="width: 100%">
            <!--Add your page content here  horizontalAlignment="center" verticalAlignment="center" -->
            <fc5topbar></fc5topbar>
            <AbsoluteLayout style="width: 100%; margin-top: 2%" horizontalAlignment="center">
                <Image src="~/seefriends/red-rubbon.png" left="25%" width="90%"/>
                <Label text="ADD FRIEND" left="85%" width="50%"
                       style="font-size: 22px; color: white; text-align: center; margin-top: 1%"/>
            </AbsoluteLayout>
            <StackLayout orientation="horizontal"
                         style="width:90%; background-color: white; margin-bottom:2%; padding-top: 2%; padding-bottom: 2%;">
                <TextField v-model="textFieldValue" hint="Enter text..." @textChange="inputFilter"
                           style="width: 40%; margin-left: 3%; margin-right: 3%"/>
                <!--<Button text="Request" @tap="doCreateSmartBanner" class="green"/>-->
                <Button v-if="textFieldValue" text="Reset" @tap="onReset" class="blue"/>
                <!--<Searchbar hint="Enter text..." v-model="textFieldValue" @textChange="inputFilter" @clear="onReset"></Searchbar>-->
            </StackLayout>
            <ActivityIndicator :busy="isBusy" color="white" style="margin-bottom: 1%"/>
            <ListView v-if="!isBusy && textFieldValue" horizontalAlignment="center" class="list-group"
                      for="userFilter in usersFilter" @itemTap="onItemTap"
                      style="height:50%; width: 85%; margin-left:2%;">
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
                        <Button text="ADD" @tap="onAddFriend(userFilter.id)" style="margin-right: 2%"/>
                    </FlexboxLayout>
                </v-template>
            </ListView>
            <!--<ListView v-if="!isBusy && textFieldValue && usersFilter.length < 1" horizontalAlignment="center" class="list-group"-->
                      <!--style="height:50%; width: 85%; margin-left:2%;">-->
                <!--<v-template>-->
                    <FlexboxLayout v-if="!isBusy && textFieldValue && usersFilter.length < 1" flexDirection="row" class="list-group-item flexbox"
                                   style="padding-top:10%; padding-bottom:10%;margin-top:2%; margin-left:5%; background-color: white;">
                        <!--<Image :src="userFilter.imageSrc" class="thumb img-circle"-->
                               <!--style="width:10%; margin-left: 3%"/>-->
                        <StackLayout orientation="vertical" style="width:45%; margin-left: 3%">
                            <Label text="No users match" class="list-group-item-heading username"/>
                        </StackLayout>
                    </FlexboxLayout>
                <!--</v-template>-->
            <!--</ListView>-->
            <AbsoluteLayout horizontalAlignment="center" style="width: 100%; ">
                <Image src="~/seefriends/red-rubbon.png" left="25%" width="90%"/>
                <Label text="MY FRIENDS" left="85%" width="50%"
                       style="font-size: 22px; color: white; text-align: center; margin-top: 2%"/>
            </AbsoluteLayout>
            <ListView v-if="friends.length >= 1" horizontalAlignment="center" class="list-group" for="friend in friends" @itemTap="onItemTap"
                      style="height:50%; width: 85%; margin-left:2%;">
                <v-template>
                    <FlexboxLayout flexDirection="row" class="list-group-item flexbox"
                                   style="padding-top:10%; padding-bottom:10%;margin-top:5%; margin-left:5%; background-color: white;">

                        <Image :src="friend.imageSrc" class="thumb img-circle" style="width:10%; margin-left: 3%"/>
                        <StackLayout orientation="vertical" style="width:45%; margin-left: 3%">
                            <Label :text="friend.userName" class="list-group-item-heading username"/>
                            <Label v-if="friend.teamName" :text="friend.teamName" class="list-group-item-heading"
                                   style="margin-top: 2%"/>
                        </StackLayout>
                        <Button text="DUEL" @tap="onDuel(friend.userName)" style="margin-right: 2%" class="blue"/>
                        <Button text="X" style="width: 10%" @tap="onDelete(friend.userName)"/>

                    </FlexboxLayout>
                </v-template>
            </ListView>
            <!--<ListView v-if="friends.length < 1" horizontalAlignment="center" class="list-group"-->
                      <!--style="height:50%; width: 85%; margin-left:2%;">-->
                <!--<v-template>-->
                    <FlexboxLayout v-if="friends.length < 1" flexDirection="row" class="list-group-item flexbox"
                                   style="height:20%; width: 85%;padding-top:10%; padding-bottom:10%;margin-top:5%; margin-left:5%; background-color: white;">

                        <StackLayout horizontalAlignment="center" verticalAlignment="center" orientation="vertical" style="width:80%; margin-left: 3%">
                            <Label text="You don't have any friends." class="list-group-item-heading username"/>
                            <Label text="You can search and add them !" class="list-group-item-heading username"/>
                        </StackLayout>
                    </FlexboxLayout>
                <!--</v-template>-->
            <!--</ListView>-->
        </StackLayout>
    </Page>
</template>


<script>
    import 'babel-polyfill';
    import store from '../../store/index';
    import fc5topbar from './../fc5Topbar';
    import * as admob from 'nativescript-admob';
    import axios from 'axios';

    var Observable = require('tns-core-modules/data/observable').Observable;

    export default {
        store: store,
        name: 'app',
        components: {fc5topbar},
        data() {
            return {
                user: {},
                textFieldValue: '',
                usersFilter: [],
                viewMode: new Observable(),
                isBusy: false,
                friends: [],
                myTimeout: null,
            };
        },
        methods: {

            onButtonTap(args) {
                console.log('Button was pressed', args);
            },
            onSubmitFriends(args) {
                console.log('Button was pressed', args);
                admob.createBanner({
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
                        //top: 10
                        bottom: 10
                    },
                    keywords: ['foot', 'games'] // add keywords for ad targeting
                }).then(
                    function () {
                        console.log('admob createBanner done');
                    },
                    function (error) {
                        console.log('admob createBanner error: ' + error);
                    }
                );
            },
            onDuel(args) {
                console.log('Button was pressed', args);
            },
            async onAddFriend(args) {
                console.log('Button was pressed', args);
                const result = await this.addFriend(args);
            },
            onDelete(args) {
                console.log('Button was pressed', args);
            },
            onReset() {
                this.textFieldValue = '';
            },
            async inputFilter() {
                clearTimeout(this.myTimeout);
                if(this.textFieldValue.length > 0){
                    this.isBusy = true;
                    this.myTimeout = await setTimeout(async () => {
                        this.usersFilter = [];
                        const result = await this.searchFriends();
                        console.log('result', result)
                        this.isBusy = false;
                        this.usersFilter = result;
                    }, 1500);
                }
            },
            onItemTap: function (args) {
                console.log('Item with index: ' + args.index + ' tapped', args);
            },
            goBack: function (args) {
                console.log('Item with index: ' + args.index + ' tapped');
            },
            async searchFriends(){
                console.log('pd', this.$store.getters.fetchCurrentUser.token);
                console.log('test', this.friends.length)
                const result = await axios.get(
                    'http://172.25.0.1:8080/app_dev.php/api/users/search/'+this.textFieldValue,
                    {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer '+this.$store.getters.fetchCurrentUser.token
                    }
                );
                return result.data.result;
            },
            async addFriend(idUser){

                const result = await axios.post(
                    'http://172.25.0.1:8080/app_dev.php/api/friend/add',
                    {
                        'friend_id': idUser,
                    },
                    {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer '+this.$store.getters.fetchCurrentUser.token
                    }
                );
                console.log('result', result);
                return result.data.result;
            },
            async getFriends(){
                const result = await axios.post(
                    'http://172.25.0.1:8080/app_dev.php/api/users/login',
                    {
                        "email": user.email,
                        "password": user.password
                    },
                    {
                        'Content-Type': 'application/json'
                    }
                );
                return result;
            },


            doCreateBanner (size) {
                console.log('try')
                admob.createBanner({
                    // if the 'view' property is not set, the banner is overlayed on the current top most view
                    testing: true,
                    size: size,
                    iosBannerId: 'ca-app-pub-9517346003011652/3985369721',
                    androidBannerId: 'ca-app-pub-9517346003011652/7749101329',
                    // Android automatically adds the connected device as test device with testing:true, iOS does not
                    iosTestDeviceIds: ['yourTestDeviceUDIDs', 'canBeAddedHere'],
                    margins: {
                        // if both are set, top wins
                        //top: 10
                        bottom: false ? 50 : 0
                    },
                    keywords: ['foo', 'bar']
                }).then(
                    function () {
                        console.log('admob createBanner done');
                    },
                    function (error) {
                        console.log('admob createBanner error: ' + error);
                    }
                );
            },
            doCreateInterstitial () {
                admob.createInterstitial({
                    testing: true,
                    iosInterstitialId: 'ca-app-pub-9517346003011652/6938836122',
                    androidInterstitialId: 'ca-app-pub-9517346003011652/6938836122',
                    // Android automatically adds the connected device as test device with testing:true, iOS does not
                    iosTestDeviceIds: ['ce97330130c9047ce0d4430d37d713b1']
                }).then(
                    function () {
                        console.log('admob createInterstitial done');
                    },
                    function (error) {
                        console.log('admob createInterstitial error: ' + error);
                    }
                );
            },

            doCreateSmartBanner () {
                this.doCreateBanner(admob.AD_SIZE.SMART_BANNER);
            },

            doCreateSkyscraperBanner () {
                this.doCreateBanner(admob.AD_SIZE.SKYSCRAPER);
            },

            doCreateLargeBanner () {
                this.doCreateBanner(admob.AD_SIZE.LARGE_BANNER);
            },

            doCreateRegularBanner () {
                this.doCreateBanner(admob.AD_SIZE.BANNER);
            },

            doCreateRectangularBanner () {
                this.doCreateBanner(admob.AD_SIZE.MEDIUM_RECTANGLE);
            },

            doCreateLeaderboardBanner () {
                this.doCreateBanner(admob.AD_SIZE.LEADERBOARD);
            },

            doHideBanner () {
                admob.hideBanner().then(
                    function () {
                        console.log('admob hideBanner done');
                    },
                    function (error) {
                        console.log('admob hideBanner error: ' + error);
                    }
                );
            },


            mounted() {

            }

        }
    };
</script>

<style scoped>
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
