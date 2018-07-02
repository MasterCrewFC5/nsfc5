<template>
    <Page class="page" actionBarHidden="true">

        <StackLayout>
            <fc5topbar></fc5topbar>

            <WrapLayout horizontalAlignment="center">
                <TextField width="50%" v-model="form.searchValue" hint="Search..." class="search-input"/>

                <Image  @tap="searchPlayers"  stretch="none" src="~/searchplayer/searchButton.png" class="search-button" />
                <Image  @tap="setFilterActive"  stretch="none" src="~/searchplayer/filterActive.png" class="search-button" v-if="filterIsActive === true" />
                <Image  @tap="setFilterActive"  stretch="none" src="~/searchplayer/filter.png" class="search-button"  v-else/>
            </WrapLayout>

            <!--<GridLayout colums="*,*,auto" rows="auto" >-->
                <!--<TextField col="0" row="0" v-model="searchValue" hint="Search..." />-->
                <!--<Image col="1" row="0" @tap="searchPlayers"  stretch="none" src="~/searchplayer/searchButton.png"/>-->
                <!--<Image col="2" row="0" @tap="setFilterActive"  stretch="none" src="~/searchplayer/filterActive.png" if="filterIsActive"/>-->
                <!--<Image col="2" row="0"  @tap="setFilterActive"  stretch="none" src="~/searchplayer/filter.png"/>-->
            <!--</GridLayout>-->


                <GridLayout columns="*,*,*,*" rows="auto,auto,auto,auto,auto,auto" class="filters" v-if="filterIsActive">
                    <Label text="Position" col="0" row="0"/>
                    <ListPicker col="1" row="0" :items="listOfItems" v-model="form.position" height="50"/>

                    <Label text="Age" col="0" row="1"/>
                    <TextField col="1" row="1" hint="Min" v-model="form.ageMin"/>
                    <TextField col="2" row="1" hint="Max" v-model="form.ageMax"/>/

                    <Label text="ATQ" col="0" row="2"/>
                    <TextField col="1" row="2" hint="Min" v-model="form.atqMin"/>
                    <TextField col="2" row="2" hint="Max" v-model="form.atqMax"/>

                    <Label text="DEF" col="0" row="3"/>
                    <TextField col="1" row="3" hint="Min" v-model="form.defMin"/>
                    <TextField col="2" row="3" hint="Max" v-model="form.defMax"/>

                    <Label text="SPE" col="0" row="4"/>
                    <TextField col="1" row="4" hint="Min" v-model="form.speMin"/>
                    <TextField col="2" row="4" hint="Max" v-model="form.speMax"/>

                    <Label text="GK" col="0" row="5"/>
                    <TextField col="1" row="5" hint="Min" v-model="form.gkMin"/>
                    <TextField col="2" row="5" hint="Max" v-model="form.gkMax"/>

                </GridLayout>



            <ListView for="player in players"
                      class="results"
                      separatorColor="#219653"
                      @itemTap="onItemTap"
                      @loaded="onLoaded"
                      @loadMoreItems="onLoadMoreItems"
            >
                <v-template>
                    <!-- Shows the list item label in the default color and stye. -->
                    <GridLayout columns="*,*,*"  class="card">

                        <WrapLayout orientation="vertical" col="0" >
                            <Label  class="name bold" :text="player.commonName || player.firstName +' '+ player.lastName" />
                            <Label  :text="player.club.name" />
                            <Label  :text="player.age" />
                            <Label  :text="player.height" />
                            <Label  :text="player.weight" />
                        </WrapLayout>

                        <WrapLayout orientation="vertical" col="1">
                            <WrapLayout>
                                <Label class="bold" text="ATQ "/>
                                <Label class="bold" text="DEF "/>
                                <Label class="bold" text="SPE "/>
                                <Label class="bold" text="GK"/>
                            </WrapLayout>

                            <WrapLayout>
                                <Label class="bold red" text="90 "/>
                                <Label class="bold green" text="90 "/>
                                <Label class="bold blue" text="90 "/>
                                <Label class="bold yellow" :text="player.gkdiving"/>
                            </WrapLayout>
                        </WrapLayout>

                        <WrapLayout col="2">
                            <Label  class="" :text="player.rating + '  '"/>
                            <fc5playerposition :position="player.position"></fc5playerposition>
                        </WrapLayout>
                        <!--<GridLayout col="2"  colums="auto,auto" rows="*" veticalAlignement="top">-->
                            <!--<Label col="0" row="1" class="" :text="player.rating"/>-->
                            <!--<Label col="1" row="1" class="" :text="player.position"/>-->
                        <!--</GridLayout>-->

                    </GridLayout>
                </v-template>
            </ListView>

            <AbsoluteLayout height="80%" width="100%" backgroundColor="#219653" top="10" left="10" class="modal" >
                <fc5modalplayer v-if="showModal" @close="showModal = false" :player="playerShownInModal">
                </fc5modalplayer>
            </AbsoluteLayout>


        </StackLayout>


    </Page>
</template>

<script>
    import axios from 'axios'
    import store from '../../store/index'
    import http from 'http'

    import fc5modalplayer from './../fc5ModalPlayer'
    import fc5playerposition from './../fc5PlayerPosition'
    //import fc5svggraph from './../fc5SvgGraph'
    import fc5topbar from './../fc5Topbar.vue'


    export default {
        store: store,
        components: {fc5topbar, fc5modalplayer, fc5playerposition},
        data() {
            return {
                listOfItems:['G','LF','LW','RW','ST','CAM','CB','CM'],
                selected: '',
                form: {
                    searchValue: "",
                    position: "",
                    ageMin: null,
                    ageMax: null,
                    atqMin: null,
                    defMin: null,
                    defMax: null,
                    speMin: null,
                    speMax: null,
                    gkMin: null,
                    gkMax: null
                },
                players: [
                    {
                        "commonName": "",
                        "firstName": "Eden",
                        "lastName": "Hazard",
                        "nation": {
                            "imageUrls": {
                                "small": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/flags/html5/24x14/7.png",
                                "medium": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/flags/html5/30x19/7.png"
                            },
                            "abbrName": "Belgium",
                            "name": "Belgium"
                        },
                        "club": {
                            "abbrName": "Chelsea",
                            "id": 5,
                            "name": "Chelsea"
                        },
                        "position": "LW",
                        "composure": 87,
                        "height": 173,
                        "weight": 76,
                        "birthdate": "1991-01-07",
                        "age": 27,
                        "acceleration": 93,
                        "aggression": 54,
                        "agility": 93,
                        "balance": 91,
                        "ballcontrol": 92,
                        "foot": "Right",
                        "crossing": 80,
                        "curve": 82,
                        "dribbling": 93,
                        "finishing": 83,
                        "freekickaccuracy": 79,
                        "gkdiving": 11,
                        "gkhandling": 12,
                        "gkkicking": 6,
                        "gkpositioning": 8,
                        "gkreflexes": 8,
                        "headingaccuracy": 57,
                        "interceptions": 41,
                        "jumping": 59,
                        "longpassing": 81,
                        "longshots": 82,
                        "marking": 25,
                        "penalties": 86,
                        "positioning": 85,
                        "potential": 91,
                        "reactions": 85,
                        "shortpassing": 86,
                        "shotpower": 79,
                        "slidingtackle": 22,
                        "sprintspeed": 87,
                        "standingtackle": 27,
                        "stamina": 79,
                        "strength": 65,
                        "vision": 86,
                        "volleys": 79,
                        "weakFoot": 4,
                        "name": "Hazard",
                        "isGK": false,
                        "positionFull": "Left Wing",
                        "isSpecialType": false,
                        "contracts": null,
                        "fitness": null,
                        "isLoan": null,
                        "itemType": "player",
                        "id": "183277",
                        "baseId": 183277,
                        "rating": 90
                    },
                    {
                        "commonName": "",
                        "firstName": "Giorgio",
                        "headshotImgUrl": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/players/html5/134x134/138956.png",
                        "lastName": "Chiellini",
                        "league": {
                            "abbrName": "ITA 1",
                            "id": 31,
                            "imgUrl": null,
                            "name": "Calcio A"
                        },
                        "nation": {
                            "imageUrls": {
                                "small": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/flags/html5/24x14/27.png",
                                "medium": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/flags/html5/30x19/27.png",
                                "large": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/flags/html5/40x25/27.png"
                            },
                            "abbrName": "Italy",
                            "id": 27,
                            "imgUrl": null,
                            "name": "Italy"
                        },
                        "club": {
                            "imageUrls": {
                                "dark": {
                                    "small": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/clubbadges/html5/dark/24x24/l45.png",
                                    "medium": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/clubbadges/html5/dark/27x27/l45.png",
                                    "large": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/clubbadges/html5/dark/34x34/l45.png"
                                },
                                "normal": {
                                    "small": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/clubbadges/html5/normal/24x24/l45.png",
                                    "medium": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/clubbadges/html5/normal/27x27/l45.png",
                                    "large": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/clubbadges/html5/normal/34x34/l45.png"
                                }
                            },
                            "abbrName": "Juventus",
                            "id": 45,
                            "imgUrl": null,
                            "name": "Juventus"
                        },
                        "headshot": {
                            "largeImgUrl": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/players/html5/134x134/138956.png",
                            "medImgUrl": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/players/html5/105x105/138956.png",
                            "smallImgUrl": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/players/html5/40x40/138956.png"
                        },
                        "specialImages": {
                            "largeTOTWImgUrl": null,
                            "medTOTWImgUrl": null
                        },
                        "position": "CB",
                        "composure": 82,
                        "playStyle": "Basic",
                        "playStyleId": null,
                        "height": 187,
                        "weight": 85,
                        "birthdate": "1984-08-14",
                        "age": 33,
                        "acceleration": 68,
                        "aggression": 92,
                        "agility": 59,
                        "balance": 64,
                        "ballcontrol": 57,
                        "foot": "Left",
                        "skillMoves": 2,
                        "crossing": 58,
                        "curve": 60,
                        "dribbling": 58,
                        "finishing": 33,
                        "freekickaccuracy": 31,
                        "gkdiving": 3,
                        "gkhandling": 3,
                        "gkkicking": 2,
                        "gkpositioning": 4,
                        "gkreflexes": 3,
                        "headingaccuracy": 84,
                        "interceptions": 88,
                        "jumping": 89,
                        "longpassing": 59,
                        "longshots": 49,
                        "marking": 92,
                        "penalties": 50,
                        "positioning": 28,
                        "potential": 89,
                        "reactions": 82,
                        "shortpassing": 59,
                        "shotpower": 78,
                        "slidingtackle": 90,
                        "sprintspeed": 78,
                        "standingtackle": 92,
                        "stamina": 68,
                        "strength": 91,
                        "vision": 50,
                        "volleys": 45,
                        "weakFoot": 2,
                        "traits": [
                            "Long Throw",
                            "Injury Prone",
                            "Avoids Using Weaker Foot",
                            "Dives Into Tackles",
                            "Leadership",
                            "Power Header"
                        ],
                        "specialities": [
                            "Tackler",
                            "Tactician",
                            "Strength",
                            "Complete Defender"
                        ],
                        "atkWorkRate": "Low",
                        "defWorkRate": "High",
                        "playerType": "rare",
                        "attributes": [
                            {
                                "name": "fut.attribute.PAC",
                                "value": 74,
                                "chemistryBonus": [
                                    0
                                ]
                            },
                            {
                                "name": "fut.attribute.SHO",
                                "value": 46,
                                "chemistryBonus": [
                                    0
                                ]
                            },
                            {
                                "name": "fut.attribute.PAS",
                                "value": 56,
                                "chemistryBonus": [
                                    0
                                ]
                            },
                            {
                                "name": "fut.attribute.DRI",
                                "value": 60,
                                "chemistryBonus": [
                                    0
                                ]
                            },
                            {
                                "name": "fut.attribute.DEF",
                                "value": 90,
                                "chemistryBonus": [
                                    0
                                ]
                            },
                            {
                                "name": "fut.attribute.PHY",
                                "value": 85,
                                "chemistryBonus": [
                                    0
                                ]
                            }
                        ],
                        "name": "Chiellini",
                        "quality": "gold",
                        "color": "rare_gold",
                        "isGK": false,
                        "positionFull": "Centre Back",
                        "isSpecialType": false,
                        "contracts": null,
                        "fitness": null,
                        "rawAttributeChemistryBonus": null,
                        "isLoan": null,
                        "squadPosition": null,
                        "iconAttributes": null,
                        "itemType": "player",
                        "discardValue": null,
                        "id": "138956",
                        "modelName": "FUTPlayerItem",
                        "baseId": 138956,
                        "rating": 89
                    },
                    {
                        "commonName": "",
                        "firstName": "Manuel",
                        "headshotImgUrl": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/players/html5/134x134/167495.png",
                        "lastName": "Neuer",
                        "league": {
                            "abbrName": "ALL 1",
                            "id": 19,
                            "imgUrl": null,
                            "name": "Bundesliga"
                        },
                        "nation": {
                            "imageUrls": {
                                "small": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/flags/html5/24x14/21.png",
                                "medium": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/flags/html5/30x19/21.png",
                                "large": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/flags/html5/40x25/21.png"
                            },
                            "abbrName": "Allemagne",
                            "id": 21,
                            "imgUrl": null,
                            "name": "Allemagne"
                        },
                        "club": {
                            "imageUrls": {
                                "dark": {
                                    "small": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/clubbadges/html5/dark/24x24/l21.png",
                                    "medium": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/clubbadges/html5/dark/27x27/l21.png",
                                    "large": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/clubbadges/html5/dark/34x34/l21.png"
                                },
                                "normal": {
                                    "small": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/clubbadges/html5/normal/24x24/l21.png",
                                    "medium": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/clubbadges/html5/normal/27x27/l21.png",
                                    "large": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/clubbadges/html5/normal/34x34/l21.png"
                                }
                            },
                            "abbrName": "FC Bayern",
                            "id": 21,
                            "imgUrl": null,
                            "name": "FC Bayern Munich"
                        },
                        "headshot": {
                            "largeImgUrl": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/players/html5/134x134/167495.png",
                            "medImgUrl": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/players/html5/105x105/167495.png",
                            "smallImgUrl": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/players/html5/40x40/167495.png"
                        },
                        "specialImages": {
                            "largeTOTWImgUrl": null,
                            "medTOTWImgUrl": null
                        },
                        "position": "G",
                        "composure": 70,
                        "playStyle": "Base",
                        "playStyleId": null,
                        "height": 193,
                        "weight": 92,
                        "birthdate": "1986-03-27",
                        "age": 31,
                        "acceleration": 58,
                        "aggression": 29,
                        "agility": 52,
                        "balance": 35,
                        "ballcontrol": 48,
                        "foot": "Droit",
                        "skillMoves": 1,
                        "crossing": 15,
                        "curve": 14,
                        "dribbling": 30,
                        "finishing": 13,
                        "freekickaccuracy": 11,
                        "gkdiving": 91,
                        "gkhandling": 90,
                        "gkkicking": 95,
                        "gkpositioning": 91,
                        "gkreflexes": 89,
                        "headingaccuracy": 25,
                        "interceptions": 30,
                        "jumping": 78,
                        "longpassing": 59,
                        "longshots": 16,
                        "marking": 10,
                        "penalties": 47,
                        "positioning": 12,
                        "potential": 92,
                        "reactions": 85,
                        "shortpassing": 55,
                        "shotpower": 25,
                        "slidingtackle": 11,
                        "sprintspeed": 61,
                        "standingtackle": 10,
                        "stamina": 44,
                        "strength": 83,
                        "vision": 70,
                        "volleys": 11,
                        "weakFoot": 4,
                        "traits": [
                            "Longue relance",
                            "Gardien - Duel",
                            "Gardien libéro"
                        ],
                        "specialities": null,
                        "atkWorkRate": "Moyen",
                        "defWorkRate": "Moyen",
                        "playerType": "Rare",
                        "attributes": [
                            {
                                "name": "fut.attribute.DIV",
                                "value": 91,
                                "chemistryBonus": [
                                    0
                                ]
                            },
                            {
                                "name": "fut.attribute.HAN",
                                "value": 90,
                                "chemistryBonus": [
                                    0
                                ]
                            },
                            {
                                "name": "fut.attribute.KIC",
                                "value": 95,
                                "chemistryBonus": [
                                    0
                                ]
                            },
                            {
                                "name": "fut.attribute.REF",
                                "value": 89,
                                "chemistryBonus": [
                                    0
                                ]
                            },
                            {
                                "name": "fut.attribute.SPD",
                                "value": 58,
                                "chemistryBonus": [
                                    0
                                ]
                            },
                            {
                                "name": "fut.attribute.POS",
                                "value": 91,
                                "chemistryBonus": [
                                    0
                                ]
                            }
                        ],
                        "name": "Neuer",
                        "quality": "gold",
                        "color": "rare_gold",
                        "isGK": true,
                        "positionFull": "Gardien",
                        "isSpecialType": false,
                        "contracts": null,
                        "fitness": null,
                        "rawAttributeChemistryBonus": null,
                        "isLoan": null,
                        "squadPosition": null,
                        "iconAttributes": null,
                        "itemType": "player",
                        "discardValue": null,
                        "id": "167495",
                        "modelName": "FUTPlayerItem",
                        "baseId": 167495,
                        "rating": 92
                    },
                    {
                        "commonName": "",
                        "firstName": "Gareth",
                        "headshotImgUrl": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/players/html5/134x134/173731.png",
                        "lastName": "Bale",
                        "league": {
                            "abbrName": "ESP 1",
                            "id": 53,
                            "imgUrl": null,
                            "name": "LaLiga Santander"
                        },
                        "nation": {
                            "imageUrls": {
                                "small": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/flags/html5/24x14/50.png",
                                "medium": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/flags/html5/30x19/50.png",
                                "large": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/flags/html5/40x25/50.png"
                            },
                            "abbrName": "Wales",
                            "id": 50,
                            "imgUrl": null,
                            "name": "Wales"
                        },
                        "club": {
                            "imageUrls": {
                                "dark": {
                                    "small": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/clubbadges/html5/dark/24x24/l243.png",
                                    "medium": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/clubbadges/html5/dark/27x27/l243.png",
                                    "large": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/clubbadges/html5/dark/34x34/l243.png"
                                },
                                "normal": {
                                    "small": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/clubbadges/html5/normal/24x24/l243.png",
                                    "medium": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/clubbadges/html5/normal/27x27/l243.png",
                                    "large": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/clubbadges/html5/normal/34x34/l243.png"
                                }
                            },
                            "abbrName": "R. Madrid",
                            "id": 243,
                            "imgUrl": null,
                            "name": "Real Madrid"
                        },
                        "headshot": {
                            "largeImgUrl": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/players/html5/134x134/173731.png",
                            "medImgUrl": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/players/html5/105x105/173731.png",
                            "smallImgUrl": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/players/html5/40x40/173731.png"
                        },
                        "specialImages": {
                            "largeTOTWImgUrl": null,
                            "medTOTWImgUrl": null
                        },
                        "position": "RW",
                        "composure": 85,
                        "playStyle": "Basic",
                        "playStyleId": null,
                        "height": 183,
                        "weight": 74,
                        "birthdate": "1989-07-16",
                        "age": 28,
                        "acceleration": 93,
                        "aggression": 65,
                        "agility": 77,
                        "balance": 65,
                        "ballcontrol": 87,
                        "foot": "Left",
                        "skillMoves": 4,
                        "crossing": 87,
                        "curve": 86,
                        "dribbling": 89,
                        "finishing": 87,
                        "freekickaccuracy": 85,
                        "gkdiving": 15,
                        "gkhandling": 15,
                        "gkkicking": 11,
                        "gkpositioning": 5,
                        "gkreflexes": 6,
                        "headingaccuracy": 86,
                        "interceptions": 59,
                        "jumping": 85,
                        "longpassing": 80,
                        "longshots": 90,
                        "marking": 51,
                        "penalties": 76,
                        "positioning": 86,
                        "potential": 89,
                        "reactions": 87,
                        "shortpassing": 86,
                        "shotpower": 91,
                        "slidingtackle": 52,
                        "sprintspeed": 95,
                        "standingtackle": 55,
                        "stamina": 76,
                        "strength": 80,
                        "vision": 79,
                        "volleys": 76,
                        "weakFoot": 3,
                        "traits": [
                            "Long Throw",
                            "Injury Prone",
                            "Avoids Using Weaker Foot",
                            "Shooting - Long Shot Taker",
                            "Dribbler - Speed Dribbler",
                            "Shooting - Chip Shot"
                        ],
                        "specialities": [
                            "Speedster",
                            "Dribbler",
                            "Distance Shooter",
                            "Crosser",
                            "Clinical Finisher",
                            "Complete Forward",
                            "Poacher"
                        ],
                        "atkWorkRate": "High",
                        "defWorkRate": "Medium",
                        "playerType": "rare",
                        "attributes": [
                            {
                                "name": "fut.attribute.PAC",
                                "value": 94,
                                "chemistryBonus": [
                                    0
                                ]
                            },
                            {
                                "name": "fut.attribute.SHO",
                                "value": 87,
                                "chemistryBonus": [
                                    0
                                ]
                            },
                            {
                                "name": "fut.attribute.PAS",
                                "value": 84,
                                "chemistryBonus": [
                                    0
                                ]
                            },
                            {
                                "name": "fut.attribute.DRI",
                                "value": 86,
                                "chemistryBonus": [
                                    0
                                ]
                            },
                            {
                                "name": "fut.attribute.DEF",
                                "value": 57,
                                "chemistryBonus": [
                                    0
                                ]
                            },
                            {
                                "name": "fut.attribute.PHY",
                                "value": 76,
                                "chemistryBonus": [
                                    0
                                ]
                            }
                        ],
                        "name": "Bale",
                        "quality": "gold",
                        "color": "rare_gold",
                        "isGK": false,
                        "positionFull": "Right Wing",
                        "isSpecialType": false,
                        "contracts": null,
                        "fitness": null,
                        "rawAttributeChemistryBonus": null,
                        "isLoan": null,
                        "squadPosition": null,
                        "iconAttributes": null,
                        "itemType": "player",
                        "discardValue": null,
                        "id": "173731",
                        "modelName": "FUTPlayerItem",
                        "baseId": 173731,
                        "rating": 89
                    },
                ],
                filterIsActive: false,
                showModal: false,
                playerShownInModal: {
                "commonName": "",
                "firstName": "Eden",
                "lastName": "Hazard",
                "nation": {
                "imageUrls": {
                    "small": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/flags/html5/24x14/7.png",
                        "medium": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/flags/html5/30x19/7.png"
                },
                "abbrName": "Belgium",
                    "name": "Belgium"
            },
                "club": {
                "abbrName": "Chelsea",
                    "id": 5,
                    "name": "Chelsea"
            },
                "position": "LW",
                "composure": 87,
                "height": 173,
                "weight": 76,
                "birthdate": "1991-01-07",
                "age": 27,
                "acceleration": 93,
                "aggression": 54,
                "agility": 93,
                "balance": 91,
                "ballcontrol": 92,
                "foot": "Right",
                "crossing": 80,
                "curve": 82,
                "dribbling": 93,
                "finishing": 83,
                "freekickaccuracy": 79,
                "gkdiving": 11,
                "gkhandling": 12,
                "gkkicking": 6,
                "gkpositioning": 8,
                "gkreflexes": 8,
                "headingaccuracy": 57,
                "interceptions": 41,
                "jumping": 59,
                "longpassing": 81,
                "longshots": 82,
                "marking": 25,
                "penalties": 86,
                "positioning": 85,
                "potential": 91,
                "reactions": 85,
                "shortpassing": 86,
                "shotpower": 79,
                "slidingtackle": 22,
                "sprintspeed": 87,
                "standingtackle": 27,
                "stamina": 79,
                "strength": 65,
                "vision": 86,
                "volleys": 79,
                "weakFoot": 4,
                "name": "Hazard",
                "isGK": false,
                "positionFull": "Left Wing",
                "isSpecialType": false,
                "contracts": null,
                "fitness": null,
                "isLoan": null,
                "itemType": "player",
                "id": "183277",
                "baseId": 183277,
                "rating": 90
            }
            }
        },
        methods:{
            onItemTap(event) {
                console.log(event.index)
                console.log(event.item.position)
                this.showModal =true
                this.getPlayerModal(event.item.id)
                this.playerShownInModal = this.players[event.index]
            },
            onLoadMoreItems(event){
              console.dir('Load more items. event : ' + event)
            },
            onLoaded(event){
              console.dir('Loaded. event: ' + event)
            },
            setFilterActive(){
                this.filterIsActive = !this.filterIsActive
                console.log(this.filterIsActive)
            },
            hideFilters(){
                this.filterIsActive = false
            },
            async searchPlayers(){
                try {
                    const res = await http.request({
                        url: 'http://localhost:3001/players?name_like='+this.form.searchValue+'&position_like='+this.selected+'&_limit=15',
                        method: 'GET'
                    })
                    console.dir(res)

                    this.players = res.data
                    this.hideFilters()
                }
                catch(error) {
                    console.error(error)
                }


            },
            async getPlayerModal(idPlayerClicked){
                try{
                    // const res = await http.request({
                    //     url: 'http://localhost:3001/players?id='+ idPlayerClicked +'',
                    //     method: 'GET'
                    // })
                    // console.dir(res)
                    //
                    // this.playerShownInModal = res.data[0]

                    console.dir(idPlayerClicked)
                    this.showModal = true;
                }catch(error){
                    console.error(error)
                }


            }
        },
        async created(){

        },
    }
</script>

<style lang="scss" scoped>

    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }

    .slide-toggle-enter-active,
    .slide-toggle-leave-active {
        transition: height .3s;
        opacity:0;
    }
    .slide-toggle-enter-active {
        height: 600px;
    }
    .slide-toggle-enter,
    .slide-toggle-leave-active {
        height: 0;
        opacity: 0;
    }
    .slide-toggle-leave {
        height: 600px;
        opacity: 1;
    }

    .page {
        background-color: #219653;
    }

    .modal{
        z-index: 10000000;
    }

    .filters {
        background-color: #188947;
        width: 100%;
        box-shadow: inset 0px 0px 8px rgba(0, 0, 0, 0.12);

        padding: 10px 0px 30px 0px;
        color: #F0F0F0;
        font-weight: bold;
    }
    .card{
        background-color: #F0F0F0;
        /*margin: 2% 0% 2% 0%;*/
        padding: 2% 2% 2% 2%;
    }
    .results{
        background-color: #DEDEDE;
        height:30%;
    }
    .search-input{
        background-color: white;
        height: 110px;
    }
    .search-button{
        margin: 3% 0% 3% 5%;
    }
    /*.card {*/
        /*left: 0%;*/
        /*height: 75px;*/
        /*width: 100%;*/
        /*background-color: #F0F0F0;*/
        /*margin-bottom: 8px;*/
        /*box-shadow: 2px 0px 2px rgba(0,0,0, 0.24),0px 0px 2px rgba(0,0,0, 0.12);*/

        /*display: flex;*/
        /*flex-direction: row;*/
        /*justify-content: space-around;*/
        /*align-content: space-between;*/
        /*align-items: center;*/

        /*.info{*/
            /*order: 0;*/
            /*width: 40%;*/

            /*display: flex;*/
            /*flex-direction: column;*/
            /*justify-content: flex-start;*/
            /*align-content: space-evenly;*/
            /*align-items: center;*/


            /*.name{*/
                /*align-self: flex-start;*/
                /*padding-left: 5px;*/
                /*font-size:12px;*/
            /*}*/
            /*.clubname{*/
                /*align-self: flex-start;*/
                /*padding-left: 5px;*/
                /*font-size:11px;*/
            /*}*/
            /*.age{*/
                /*align-self: flex-start;*/
                /*padding-left: 5px;*/
                /*font-size:11px;*/
            /*}*/
            /*.height{*/
                /*align-self: flex-start;*/
                /*padding-left: 5px;*/
                /*font-size:11px;*/
            /*}*/
            /*.weight{*/
                /*align-self: flex-start;*/
                /*padding-left: 5px;*/
                /*font-size:11px;*/
            /*}*/
        /*}*/

        /*.stats{*/
            /*order: 1;*/
            /*display: flex;*/
            /*flex-direction: row;*/
            /*justify-content: space-evenly;*/
            /*align-items: center;*/

            /*flex-grow: 2;*/
            /*.atq, .def, .spe, .gk{*/
                /*height:100%;*/
                /*width: 25%;*/
            /*}*/
            /*.label{*/
                /*vertical-align: bottom;*/
            /*}*/
            /*.value{*/
                /*display: flex;*/
                /*align-items: center;*/
                /*justify-content: center;*/

                /*height: 50%;*/
                /*font-size: 19px;*/
                /*background-image: url("./../../assets/circle.svg");*/
                /*background-repeat: no-repeat;*/
                /*background-position: center ;*/
                /*background-size: 79%;*/
            /*}*/
        /*}*/

        /*.rightpart{*/
            /*height: 90%;*/
            /*order: 2;*/
            /*display: flex;*/
            /*flex-direction: column;*/
            /*flex-grow: 1;*/
            /*padding-right: 5px;*/
            /*.values{*/
                /*display: flex;*/
                /*flex-direction: row;*/
                /*justify-content: flex-end;*/
                /*background-image: url("./../../assets/underline.svg");*/
                /*background-repeat: no-repeat;*/
                /*background-position: bottom right;*/
                /*.overall{*/
                    /*margin-right: 2px;*/
                /*}*/
            /*}*/
        /*}*/
    /*}*/

    /*.searchplayers{*/
        /*display:flex;*/

        /*.content {*/

            /*position: absolute;*/
            /*height: 85%;*/
            /*width: 100%;*/
            /*left: 0;*/

            /*display: flex;*/
            /*flex-direction: column;*/

            /*!*border: 1px solid black;*!*/
            /*.search {*/
               /*!* display: flex;*/
                /*flex-direction: row;*/
                /*justify-content: space-evenly;*!*/

                /*.search-input{*/
                    /*color: #595555;*/
                    /*width: 60%;*/
                    /*font-family: Roboto;*/
                    /*font-size: 16px;*/
                    /*font-weight: bold;*/
                /*}*/
                /*.find {*/

                /*}*/
                /*.filter {*/

                /*}*/
            /*}*/



            /*.results {*/
                /*padding: 10px 20px 10px 20px;*/
                /*overflow: auto;*/
                /*background-color: #5DB55B;*/
            /*}*/

        /*}*/
    /*}*/

    /*.selected-tag{*/
        /*color: #595555 !important;*/
    /*}*/

    /*.slide-toggle-enter-active,*/
    /*.slide-toggle-leave-active {*/
        /*transition: height .3s;*/
        /*opacity:0;*/
    /*}*/
    /*.slide-toggle-enter-active {*/
        /*height: 200px;*/
    /*}*/
    /*.slide-toggle-enter,*/
    /*.slide-toggle-leave-active {*/
        /*height: 0;*/
        /*opacity: 0;*/
    /*}*/
    /*.slide-toggle-leave {*/
        /*height: 200px;*/
        /*opacity: 1;*/
    /*}*/
</style>
