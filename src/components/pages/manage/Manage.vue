<template>
    <Page class="page" actionBarHidden="true">

        <WrapLayout>
            <fc5topbar></fc5topbar>

            <StackLayout orientation="vertical" class="menu" >
                <WrapLayout v-for="menu in menus">
                    <Image  v-if="currentPage === menu.title " :src=" menu.activatedImage" class="menu-image" @tap="setCurrentPage(menu.title)" stretch="none"  horizontalAlignment="center"/>
                    <Image  v-else :src=" menu.image" @tap="setCurrentPage(menu.title)" class="menu-image" stretch="none"  horizontalAlignment="center"/>
                </WrapLayout>
            </StackLayout>

            <WrapLayout backgroundImage="~/manage/tactics/background.png" v-if="currentPage === 'tactics'" class="tactics" width="269" height="425">
                <GridLayout height="100%" width="100%" class="field" columns="*,*,*,*,*,*,*" rows="*,*,*,*,*,*,*,*,*"  >

                    <!--<template v-for=" col in colums" >-->
                        <!--<template v-for=" row in rows">-->
                            <!---->
                        <!--</template>-->
                    <!--</template>-->

                    <Image col="0" row="1"  :src="field.c01.isPlayer === true ? fieldImg.player : fieldImg.empty" @tap="addPlayerOnField('c01')" />
                    <Image col="0" row="2"  :src="field.c02.isPlayer === true ? fieldImg.player : fieldImg.empty" @tap="addPlayerOnField('c02')" />
                    <Image col="0" row="3"  :src="field.c03.isPlayer === true ? fieldImg.player : fieldImg.empty" @tap="addPlayerOnField('c03')" />
                    <Image col="0" row="4"  :src="field.c04.isPlayer === true ? fieldImg.player : fieldImg.empty" @tap="addPlayerOnField('c04')" />
                    <Image col="0" row="5"  :src="field.c05.isPlayer === true ? fieldImg.player : fieldImg.empty" @tap="addPlayerOnField('c05')" />
                    <Image col="0" row="6"  :src="field.c06.isPlayer === true ? fieldImg.player : fieldImg.empty" @tap="addPlayerOnField('c06')" />
                    <Image col="0" row="7"  :src="field.c07.isPlayer === true ? fieldImg.player : fieldImg.empty" @tap="addPlayerOnField('c07')" />

                    <Image col="1" row="1"  :src="field.c11.isPlayer === true ? fieldImg.player : fieldImg.empty" @tap="addPlayerOnField('c1')" />
                    <Image col="1" row="2"  :src="field.c12.isPlayer === true ? fieldImg.player : fieldImg.empty" @tap="addPlayerOnField('c12')" />
                    <Image col="1" row="3"  :src="field.c13.isPlayer === true ? fieldImg.player : fieldImg.empty" @tap="addPlayerOnField('c13')" />
                    <Image col="1" row="4"  :src="field.c14.isPlayer === true ? fieldImg.player : fieldImg.empty" @tap="addPlayerOnField('c14')" />
                    <Image col="1" row="5"  :src="field.c15.isPlayer === true ? fieldImg.player : fieldImg.empty" @tap="addPlayerOnField('c15')" />
                    <Image col="1" row="6"  :src="field.c16.isPlayer === true ? fieldImg.player : fieldImg.empty" @tap="addPlayerOnField('c16')" />
                    <Image col="1" row="7"  :src="field.c17.isPlayer === true ? fieldImg.player : fieldImg.empty" @tap="addPlayerOnField('c17')" />

                    <Image col="2" row="1"  :src="field.c21.isPlayer === true ? fieldImg.player : fieldImg.empty" @tap="addPlayerOnField('c21')" />
                    <Image col="2" row="2"  :src="field.c22.isPlayer === true ? fieldImg.player : fieldImg.empty" @tap="addPlayerOnField('c22')" />
                    <Image col="2" row="3"  :src="field.c23.isPlayer === true ? fieldImg.player : fieldImg.empty" @tap="addPlayerOnField('c23')" />
                    <Image col="2" row="4"  :src="field.c24.isPlayer === true ? fieldImg.player : fieldImg.empty" @tap="addPlayerOnField('c24')" />
                    <Image col="2" row="5"  :src="field.c25.isPlayer === true ? fieldImg.player : fieldImg.empty" @tap="addPlayerOnField('c25')" />
                    <Image col="2" row="6"  :src="field.c26.isPlayer === true ? fieldImg.player : fieldImg.empty" @tap="addPlayerOnField('c26')" />
                    <Image col="2" row="7"  :src="field.c27.isPlayer === true ? fieldImg.player : fieldImg.empty" @tap="addPlayerOnField('c27')" />

                    <Image col="3" row="1"  :src="field.c31.isPlayer === true ? fieldImg.player : fieldImg.empty" @tap="addPlayerOnField('c31')" />
                    <Image col="3" row="2"  :src="field.c32.isPlayer === true ? fieldImg.player : fieldImg.empty" @tap="addPlayerOnField('c32')" />
                    <Image col="3" row="3"  :src="field.c33.isPlayer === true ? fieldImg.player : fieldImg.empty" @tap="addPlayerOnField('c33')" />
                    <Image col="3" row="4"  :src="field.c34.isPlayer === true ? fieldImg.player : fieldImg.empty" @tap="addPlayerOnField('c34')" />
                    <Image col="3" row="5"  :src="field.c35.isPlayer === true ? fieldImg.player : fieldImg.empty" @tap="addPlayerOnField('c35')" />
                    <Image col="3" row="6"  :src="field.c36.isPlayer === true ? fieldImg.player : fieldImg.empty" @tap="addPlayerOnField('c36')" />
                    <Image col="3" row="7"  :src="field.c37.isPlayer === true ? fieldImg.player : fieldImg.empty" @tap="addPlayerOnField('c37')" />
                    <Image col="3" row="8"  :src="field.c38.isPlayer === true ? fieldImg.player : fieldImg.empty" @tap="addPlayerOnField('c38')" />

                    <Image col="4" row="1"  :src="field.c41.isPlayer === true ? fieldImg.player : fieldImg.empty" @tap="addPlayerOnField('c41')" />
                    <Image col="4" row="2"  :src="field.c42.isPlayer === true ? fieldImg.player : fieldImg.empty" @tap="addPlayerOnField('c42')" />
                    <Image col="4" row="3"  :src="field.c43.isPlayer === true ? fieldImg.player : fieldImg.empty" @tap="addPlayerOnField('c43')" />
                    <Image col="4" row="4"  :src="field.c44.isPlayer === true ? fieldImg.player : fieldImg.empty" @tap="addPlayerOnField('c44')" />
                    <Image col="4" row="5"  :src="field.c45.isPlayer === true ? fieldImg.player : fieldImg.empty" @tap="addPlayerOnField('c45')" />
                    <Image col="4" row="6"  :src="field.c46.isPlayer === true ? fieldImg.player : fieldImg.empty" @tap="addPlayerOnField('c06')" />
                    <Image col="4" row="7"  :src="field.c47.isPlayer === true ? fieldImg.player : fieldImg.empty" @tap="addPlayerOnField('c47')" />

                    <Image col="5" row="1"  :src="field.c51.isPlayer === true ? fieldImg.player : fieldImg.empty" @tap="addPlayerOnField('c51')" />
                    <Image col="5" row="2"  :src="field.c52.isPlayer === true ? fieldImg.player : fieldImg.empty" @tap="addPlayerOnField('c52')" />
                    <Image col="5" row="3"  :src="field.c53.isPlayer === true ? fieldImg.player : fieldImg.empty" @tap="addPlayerOnField('c53')" />
                    <Image col="5" row="4"  :src="field.c54.isPlayer === true ? fieldImg.player : fieldImg.empty" @tap="addPlayerOnField('c54')" />
                    <Image col="5" row="5"  :src="field.c55.isPlayer === true ? fieldImg.player : fieldImg.empty" @tap="addPlayerOnField('c55')" />
                    <Image col="5" row="6"  :src="field.c56.isPlayer === true ? fieldImg.player : fieldImg.empty" @tap="addPlayerOnField('c56')" />
                    <Image col="5" row="7"  :src="field.c57.isPlayer === true ? fieldImg.player : fieldImg.empty" @tap="addPlayerOnField('c57')" />

                    <Image col="6" row="1"  :src="field.c61.isPlayer === true ? fieldImg.player : fieldImg.empty" @tap="addPlayerOnField('c61')" />
                    <Image col="6" row="2"  :src="field.c62.isPlayer === true ? fieldImg.player : fieldImg.empty" @tap="addPlayerOnField('c62')" />
                    <Image col="6" row="3"  :src="field.c63.isPlayer === true ? fieldImg.player : fieldImg.empty" @tap="addPlayerOnField('c63')" />
                    <Image col="6" row="4"  :src="field.c64.isPlayer === true ? fieldImg.player : fieldImg.empty" @tap="addPlayerOnField('c64')" />
                    <Image col="6" row="5"  :src="field.c65.isPlayer === true ? fieldImg.player : fieldImg.empty" @tap="addPlayerOnField('c65')" />
                    <Image col="6" row="6"  :src="field.c66.isPlayer === true ? fieldImg.player : fieldImg.empty" @tap="addPlayerOnField('c66')" />
                    <Image col="6" row="7"  :src="field.c67.isPlayer === true ? fieldImg.player : fieldImg.empty" @tap="addPlayerOnField('c67')" />
                </GridLayout>>
            </WrapLayout>

            <WrapLayout backgroundColor="#3c495e" class="entete" horizontalAlignment="center">
                <!-- Entete du tableau de liste des joueurs. -->
                <Label width="24%" class="bold" @tap="filterPlayers('name')" text="Name"/>
                <Label width="15%" class="bold" @tap="filterPlayers('atq')" text="ATQ"/>
                <Label width="15%" class="bold" @tap="filterPlayers('def')" text="DEF"/>
                <Label width="15%" class="bold" @tap="filterPlayers('spe')" text="SPE"/>
                <Label width="15%" class="bold" @tap="filterPlayers('gk')" text="GK"/>
                <Label width="15%" class="bold" @tap="filterPlayers('position')" text="Position"/>
            </WrapLayout>

            <WrapLayout>

                <ListView for="player in players" @itemTap="onItemTap">
                    <v-template>
                        <!-- Shows the list item label in the default color and style. :class="player.isSelected === true ? 'selected' : 'not-activated' -->
                       <WrapLayout orientation="horizontal" horizontalAlignment="center" :class="{ 'selected' : player.isSelected , 'activated': player.isActivated }">
                           <Label width="24%" class="bold" :text="player.name"/>
                           <Label width="15%" :text="player.finishing"/>
                           <Label width="15%" :text="player.marking"/>
                           <Label width="15%" :text="player.dribbling"/>
                           <Label width="15%" :text="player.gkhandling"/>
                           <fc5playerposition width="15%" :position="player.position"/>
                       </WrapLayout>
                    </v-template>
                </ListView>
            </WrapLayout>

        </WrapLayout>


    </Page>
</template>

<script>
    import fc5topbar from './../../fc5Topbar.vue'
    import fc5playerposition from './../../fc5PlayerPosition.vue'
    //import router from './../../router/index'

    export default {
        components:{ fc5topbar, fc5playerposition},
        name: "Manage",
        data(){
            return{
                currentPage: "tactics",
                fieldImg:{
                  "empty":"~/manage/tactics/empty24.png",
                  "gk":"~/manage/tactics/player.png",
                  "player":"~/manage/tactics/player.png"
                },
                menus: [
                    {
                        "title": "contracts",
                        "image": "~/manage/menu/contracts0.png",
                        "activatedImage": "~/manage/menu/contracts1.png",
                    },
                    {
                        "title": "shooters",
                        "image": "~/manage/menu/shooters0.png",
                        "activatedImage": "~/manage/menu/shooters1.png",
                    },
                    {
                        "title": "tactics",
                        "image": "~/manage/menu/tactics0.png",
                        "activatedImage": "~/manage/menu/tactics1.png",
                    },
                    {
                        "title": "stadium",
                        "image": "~/manage/menu/stadium0.png",
                        "activatedImage": "~/manage/menu/stadium1.png",
                    },
                    {
                        "title": "treasury",
                        "image": "~/manage/menu/treasury0.png",
                        "activatedImage": "~/manage/menu/treasury1.png",
                    },
                    {
                        "title": "calendar",
                        "image": "~/manage/menu/calendar0.png",
                        "activatedImage": "~/manage/menu/calendar1.png",
                    },
                    {
                        "title": "league",
                        "image": "~/manage/menu/league0.png",
                        "activatedImage": "~/manage/menu/league1.png",
                    },
                    {
                        "title": "training",
                        "image": "~/manage/menu/training0.png",
                        "activatedImage": "~/manage/menu/training1.png",
                    },
                ],
                players: [
                    {
                        "isSelected": false,
                        "isActivated": false,
                        "commonName": "Cristiano Ronaldo",
                        "firstName": "C. Ronaldo",
                        "headshotImgUrl": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/players/html5/134x134/20801.png",
                        "lastName": "dos Santos Aveiro",
                        "league": {
                            "abbrName": "ESP 1",
                            "id": 53,
                            "imgUrl": null,
                            "name": "LaLiga Santander"
                        },
                        "nation": {
                            "imageUrls": {
                                "small": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/flags/html5/24x14/38.png",
                                "medium": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/flags/html5/30x19/38.png",
                                "large": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/flags/html5/40x25/38.png"
                            },
                            "abbrName": "Portugal",
                            "id": 38,
                            "imgUrl": null,
                            "name": "Portugal"
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
                            "largeImgUrl": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/players/html5/134x134/20801.png",
                            "medImgUrl": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/players/html5/105x105/20801.png",
                            "smallImgUrl": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/players/html5/40x40/20801.png"
                        },
                        "specialImages": {
                            "largeTOTWImgUrl": null,
                            "medTOTWImgUrl": null
                        },
                        "position": "LW",
                        "composure": 95,
                        "playStyle": "Basic",
                        "playStyleId": null,
                        "height": 185,
                        "weight": 80,
                        "birthdate": "1985-02-05",
                        "age": 33,
                        "acceleration": 89,
                        "aggression": 63,
                        "agility": 89,
                        "balance": 63,
                        "ballcontrol": 93,
                        "foot": "Right",
                        "skillMoves": 5,
                        "crossing": 85,
                        "curve": 81,
                        "dribbling": 91,
                        "finishing": 94,
                        "freekickaccuracy": 76,
                        "gkdiving": 7,
                        "gkhandling": 11,
                        "gkkicking": 15,
                        "gkpositioning": 14,
                        "gkreflexes": 11,
                        "headingaccuracy": 88,
                        "interceptions": 29,
                        "jumping": 95,
                        "longpassing": 77,
                        "longshots": 92,
                        "marking": 22,
                        "penalties": 85,
                        "positioning": 95,
                        "potential": 94,
                        "reactions": 96,
                        "shortpassing": 83,
                        "shotpower": 94,
                        "slidingtackle": 23,
                        "sprintspeed": 91,
                        "standingtackle": 31,
                        "stamina": 92,
                        "strength": 80,
                        "vision": 85,
                        "volleys": 88,
                        "weakFoot": 4,
                        "traits": [
                            "Takes Powerful Driven Free Kicks",
                            "Flair",
                            "Shooting - Long Shot Taker",
                            "Dribbler - Speed Dribbler"
                        ],
                        "specialities": [
                            "Speedster",
                            "Dribbler",
                            "Distance Shooter",
                            "Acrobat",
                            "Clinical Finisher",
                            "Complete Forward",
                            "Poacher"
                        ],
                        "atkWorkRate": "High",
                        "defWorkRate": "Low",
                        "playerType": "rare",
                        "attributes": [
                            {
                                "name": "fut.attribute.PAC",
                                "value": 90,
                                "chemistryBonus": [
                                    0
                                ]
                            },
                            {
                                "name": "fut.attribute.SHO",
                                "value": 93,
                                "chemistryBonus": [
                                    0
                                ]
                            },
                            {
                                "name": "fut.attribute.PAS",
                                "value": 82,
                                "chemistryBonus": [
                                    0
                                ]
                            },
                            {
                                "name": "fut.attribute.DRI",
                                "value": 90,
                                "chemistryBonus": [
                                    0
                                ]
                            },
                            {
                                "name": "fut.attribute.DEF",
                                "value": 33,
                                "chemistryBonus": [
                                    0
                                ]
                            },
                            {
                                "name": "fut.attribute.PHY",
                                "value": 80,
                                "chemistryBonus": [
                                    0
                                ]
                            }
                        ],
                        "name": "Cristiano Ronaldo",
                        "quality": "gold",
                        "color": "rare_gold",
                        "isGK": false,
                        "positionFull": "Left Wing",
                        "isSpecialType": false,
                        "contracts": null,
                        "fitness": null,
                        "rawAttributeChemistryBonus": null,
                        "isLoan": null,
                        "squadPosition": null,
                        "iconAttributes": null,
                        "itemType": "player",
                        "discardValue": null,
                        "id": "20801",
                        "modelName": "FUTPlayerItem",
                        "baseId": 20801,
                        "rating": 94
                    },
                    {
                        "isSelected": false,
                        "isActivated": false,
                        "commonName": "",
                        "firstName": "Lionel",
                        "headshotImgUrl": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/players/html5/134x134/158023.png",
                        "lastName": "Messi",
                        "league": {
                            "abbrName": "ESP 1",
                            "id": 53,
                            "imgUrl": null,
                            "name": "LaLiga Santander"
                        },
                        "nation": {
                            "imageUrls": {
                                "small": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/flags/html5/24x14/52.png",
                                "medium": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/flags/html5/30x19/52.png",
                                "large": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/flags/html5/40x25/52.png"
                            },
                            "abbrName": "Argentina",
                            "id": 52,
                            "imgUrl": null,
                            "name": "Argentina"
                        },
                        "club": {
                            "imageUrls": {
                                "dark": {
                                    "small": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/clubbadges/html5/dark/24x24/l241.png",
                                    "medium": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/clubbadges/html5/dark/27x27/l241.png",
                                    "large": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/clubbadges/html5/dark/34x34/l241.png"
                                },
                                "normal": {
                                    "small": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/clubbadges/html5/normal/24x24/l241.png",
                                    "medium": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/clubbadges/html5/normal/27x27/l241.png",
                                    "large": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/clubbadges/html5/normal/34x34/l241.png"
                                }
                            },
                            "abbrName": "Barcelona",
                            "id": 241,
                            "imgUrl": null,
                            "name": "FC Barcelona"
                        },
                        "headshot": {
                            "largeImgUrl": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/players/html5/134x134/158023.png",
                            "medImgUrl": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/players/html5/105x105/158023.png",
                            "smallImgUrl": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/players/html5/40x40/158023.png"
                        },
                        "specialImages": {
                            "largeTOTWImgUrl": null,
                            "medTOTWImgUrl": null
                        },
                        "position": "RW",
                        "composure": 96,
                        "playStyle": "Basic",
                        "playStyleId": null,
                        "height": 170,
                        "weight": 72,
                        "birthdate": "1987-06-24",
                        "age": 30,
                        "acceleration": 92,
                        "aggression": 48,
                        "agility": 90,
                        "balance": 95,
                        "ballcontrol": 95,
                        "foot": "Left",
                        "skillMoves": 4,
                        "crossing": 77,
                        "curve": 89,
                        "dribbling": 97,
                        "finishing": 95,
                        "freekickaccuracy": 90,
                        "gkdiving": 6,
                        "gkhandling": 11,
                        "gkkicking": 15,
                        "gkpositioning": 14,
                        "gkreflexes": 8,
                        "headingaccuracy": 71,
                        "interceptions": 22,
                        "jumping": 68,
                        "longpassing": 87,
                        "longshots": 88,
                        "marking": 13,
                        "penalties": 74,
                        "positioning": 93,
                        "potential": 93,
                        "reactions": 95,
                        "shortpassing": 88,
                        "shotpower": 85,
                        "slidingtackle": 26,
                        "sprintspeed": 87,
                        "standingtackle": 28,
                        "stamina": 73,
                        "strength": 59,
                        "vision": 90,
                        "volleys": 85,
                        "weakFoot": 4,
                        "traits": [
                            "Shooting - Finesse Shot",
                            "Shooting - Long Shot Taker",
                            "Dribbler - Speed Dribbler",
                            "Playmaker",
                            "One Club Player",
                            "Shooting - Chip Shot"
                        ],
                        "specialities": [
                            "Dribbler",
                            "FK Specialist",
                            "Acrobat",
                            "Clinical Finisher"
                        ],
                        "atkWorkRate": "Medium",
                        "defWorkRate": "Medium",
                        "playerType": "rare",
                        "attributes": [
                            {
                                "name": "fut.attribute.PAC",
                                "value": 89,
                                "chemistryBonus": [
                                    0
                                ]
                            },
                            {
                                "name": "fut.attribute.SHO",
                                "value": 90,
                                "chemistryBonus": [
                                    0
                                ]
                            },
                            {
                                "name": "fut.attribute.PAS",
                                "value": 86,
                                "chemistryBonus": [
                                    0
                                ]
                            },
                            {
                                "name": "fut.attribute.DRI",
                                "value": 95,
                                "chemistryBonus": [
                                    0
                                ]
                            },
                            {
                                "name": "fut.attribute.DEF",
                                "value": 26,
                                "chemistryBonus": [
                                    0
                                ]
                            },
                            {
                                "name": "fut.attribute.PHY",
                                "value": 61,
                                "chemistryBonus": [
                                    0
                                ]
                            }
                        ],
                        "name": "Messi",
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
                        "id": "158023",
                        "modelName": "FUTPlayerItem",
                        "baseId": 158023,
                        "rating": 93
                    },
                    {
                        "isSelected": false,
                        "isActivated": false,
                        "commonName": "",
                        "firstName": "Luis",
                        "headshotImgUrl": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/players/html5/134x134/176580.png",
                        "lastName": "Suárez",
                        "league": {
                            "abbrName": "ESP 1",
                            "id": 53,
                            "imgUrl": null,
                            "name": "LaLiga Santander"
                        },
                        "nation": {
                            "imageUrls": {
                                "small": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/flags/html5/24x14/60.png",
                                "medium": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/flags/html5/30x19/60.png",
                                "large": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/flags/html5/40x25/60.png"
                            },
                            "abbrName": "Uruguay",
                            "id": 60,
                            "imgUrl": null,
                            "name": "Uruguay"
                        },
                        "club": {
                            "imageUrls": {
                                "dark": {
                                    "small": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/clubbadges/html5/dark/24x24/l241.png",
                                    "medium": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/clubbadges/html5/dark/27x27/l241.png",
                                    "large": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/clubbadges/html5/dark/34x34/l241.png"
                                },
                                "normal": {
                                    "small": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/clubbadges/html5/normal/24x24/l241.png",
                                    "medium": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/clubbadges/html5/normal/27x27/l241.png",
                                    "large": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/clubbadges/html5/normal/34x34/l241.png"
                                }
                            },
                            "abbrName": "Barcelona",
                            "id": 241,
                            "imgUrl": null,
                            "name": "FC Barcelona"
                        },
                        "headshot": {
                            "largeImgUrl": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/players/html5/134x134/176580.png",
                            "medImgUrl": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/players/html5/105x105/176580.png",
                            "smallImgUrl": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/players/html5/40x40/176580.png"
                        },
                        "specialImages": {
                            "largeTOTWImgUrl": null,
                            "medTOTWImgUrl": null
                        },
                        "position": "ST",
                        "composure": 83,
                        "playStyle": "Basic",
                        "playStyleId": null,
                        "height": 182,
                        "weight": 86,
                        "birthdate": "1987-01-24",
                        "age": 31,
                        "acceleration": 88,
                        "aggression": 78,
                        "agility": 86,
                        "balance": 60,
                        "ballcontrol": 91,
                        "foot": "Right",
                        "skillMoves": 4,
                        "crossing": 77,
                        "curve": 86,
                        "dribbling": 86,
                        "finishing": 94,
                        "freekickaccuracy": 84,
                        "gkdiving": 27,
                        "gkhandling": 25,
                        "gkkicking": 31,
                        "gkpositioning": 33,
                        "gkreflexes": 37,
                        "headingaccuracy": 77,
                        "interceptions": 41,
                        "jumping": 69,
                        "longpassing": 64,
                        "longshots": 86,
                        "marking": 30,
                        "penalties": 85,
                        "positioning": 92,
                        "potential": 92,
                        "reactions": 93,
                        "shortpassing": 83,
                        "shotpower": 87,
                        "slidingtackle": 38,
                        "sprintspeed": 77,
                        "standingtackle": 45,
                        "stamina": 89,
                        "strength": 80,
                        "vision": 84,
                        "volleys": 88,
                        "weakFoot": 4,
                        "traits": [
                            "Tries To Beat Defensive Line",
                            "Technical Dribbler"
                        ],
                        "specialities": [
                            "Dribbler",
                            "Acrobat",
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
                                "value": 82,
                                "chemistryBonus": [
                                    0
                                ]
                            },
                            {
                                "name": "fut.attribute.SHO",
                                "value": 90,
                                "chemistryBonus": [
                                    0
                                ]
                            },
                            {
                                "name": "fut.attribute.PAS",
                                "value": 79,
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
                                "value": 42,
                                "chemistryBonus": [
                                    0
                                ]
                            },
                            {
                                "name": "fut.attribute.PHY",
                                "value": 81,
                                "chemistryBonus": [
                                    0
                                ]
                            }
                        ],
                        "name": "Suárez",
                        "quality": "gold",
                        "color": "rare_gold",
                        "isGK": false,
                        "positionFull": "Striker",
                        "isSpecialType": false,
                        "contracts": null,
                        "fitness": null,
                        "rawAttributeChemistryBonus": null,
                        "isLoan": null,
                        "squadPosition": null,
                        "iconAttributes": null,
                        "itemType": "player",
                        "discardValue": null,
                        "id": "176580",
                        "modelName": "FUTPlayerItem",
                        "baseId": 176580,
                        "rating": 92
                    },
                    {
                        "isSelected": false,
                        "isActivated": false,
                        "commonName": "Neymar",
                        "firstName": "Neymar",
                        "headshotImgUrl": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/players/html5/134x134/190871.png",
                        "lastName": "da Silva Santos Jr.",
                        "league": {
                            "abbrName": "FRA 1",
                            "id": 16,
                            "imgUrl": null,
                            "name": "Ligue 1 Conforama"
                        },
                        "nation": {
                            "imageUrls": {
                                "small": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/flags/html5/24x14/54.png",
                                "medium": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/flags/html5/30x19/54.png",
                                "large": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/flags/html5/40x25/54.png"
                            },
                            "abbrName": "Brazil",
                            "id": 54,
                            "imgUrl": null,
                            "name": "Brazil"
                        },
                        "club": {
                            "imageUrls": {
                                "dark": {
                                    "small": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/clubbadges/html5/dark/24x24/l73.png",
                                    "medium": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/clubbadges/html5/dark/27x27/l73.png",
                                    "large": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/clubbadges/html5/dark/34x34/l73.png"
                                },
                                "normal": {
                                    "small": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/clubbadges/html5/normal/24x24/l73.png",
                                    "medium": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/clubbadges/html5/normal/27x27/l73.png",
                                    "large": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/clubbadges/html5/normal/34x34/l73.png"
                                }
                            },
                            "abbrName": "Paris",
                            "id": 73,
                            "imgUrl": null,
                            "name": "Paris Saint-Germain"
                        },
                        "headshot": {
                            "largeImgUrl": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/players/html5/134x134/190871.png",
                            "medImgUrl": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/players/html5/105x105/190871.png",
                            "smallImgUrl": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/players/html5/40x40/190871.png"
                        },
                        "specialImages": {
                            "largeTOTWImgUrl": null,
                            "medTOTWImgUrl": null
                        },
                        "position": "LW",
                        "composure": 92,
                        "playStyle": "Basic",
                        "playStyleId": null,
                        "height": 175,
                        "weight": 68,
                        "birthdate": "1992-02-05",
                        "age": 26,
                        "acceleration": 94,
                        "aggression": 56,
                        "agility": 96,
                        "balance": 82,
                        "ballcontrol": 95,
                        "foot": "Right",
                        "skillMoves": 5,
                        "crossing": 75,
                        "curve": 81,
                        "dribbling": 96,
                        "finishing": 89,
                        "freekickaccuracy": 84,
                        "gkdiving": 9,
                        "gkhandling": 9,
                        "gkkicking": 15,
                        "gkpositioning": 15,
                        "gkreflexes": 11,
                        "headingaccuracy": 62,
                        "interceptions": 36,
                        "jumping": 61,
                        "longpassing": 75,
                        "longshots": 77,
                        "marking": 21,
                        "penalties": 81,
                        "positioning": 90,
                        "potential": 94,
                        "reactions": 88,
                        "shortpassing": 81,
                        "shotpower": 80,
                        "slidingtackle": 33,
                        "sprintspeed": 90,
                        "standingtackle": 24,
                        "stamina": 78,
                        "strength": 53,
                        "vision": 80,
                        "volleys": 83,
                        "weakFoot": 5,
                        "traits": [
                            "Flair",
                            "Dribbler - Speed Dribbler",
                            "Technical Dribbler",
                            "Takes Finesse Style Free Kicks"
                        ],
                        "specialities": [
                            "Speedster",
                            "Dribbler",
                            "Acrobat"
                        ],
                        "atkWorkRate": "High",
                        "defWorkRate": "Medium",
                        "playerType": "rare",
                        "attributes": [
                            {
                                "name": "fut.attribute.PAC",
                                "value": 92,
                                "chemistryBonus": [
                                    0
                                ]
                            },
                            {
                                "name": "fut.attribute.SHO",
                                "value": 84,
                                "chemistryBonus": [
                                    0
                                ]
                            },
                            {
                                "name": "fut.attribute.PAS",
                                "value": 79,
                                "chemistryBonus": [
                                    0
                                ]
                            },
                            {
                                "name": "fut.attribute.DRI",
                                "value": 94,
                                "chemistryBonus": [
                                    0
                                ]
                            },
                            {
                                "name": "fut.attribute.DEF",
                                "value": 30,
                                "chemistryBonus": [
                                    0
                                ]
                            },
                            {
                                "name": "fut.attribute.PHY",
                                "value": 60,
                                "chemistryBonus": [
                                    0
                                ]
                            }
                        ],
                        "name": "Neymar",
                        "quality": "gold",
                        "color": "rare_gold",
                        "isGK": false,
                        "positionFull": "Left Wing",
                        "isSpecialType": false,
                        "contracts": null,
                        "fitness": null,
                        "rawAttributeChemistryBonus": null,
                        "isLoan": null,
                        "squadPosition": null,
                        "iconAttributes": null,
                        "itemType": "player",
                        "discardValue": null,
                        "id": "190871",
                        "modelName": "FUTPlayerItem",
                        "baseId": 190871,
                        "rating": 92
                    },
                    {
                        "isSelected": false,
                        "isActivated": false,
                        "commonName": "",
                        "firstName": "Robert",
                        "headshotImgUrl": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/players/html5/134x134/188545.png",
                        "lastName": "Lewandowski",
                        "league": {
                            "abbrName": "GER 1",
                            "id": 19,
                            "imgUrl": null,
                            "name": "Bundesliga"
                        },
                        "nation": {
                            "imageUrls": {
                                "small": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/flags/html5/24x14/37.png",
                                "medium": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/flags/html5/30x19/37.png",
                                "large": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/flags/html5/40x25/37.png"
                            },
                            "abbrName": "Poland",
                            "id": 37,
                            "imgUrl": null,
                            "name": "Poland"
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
                            "abbrName": "Bayern",
                            "id": 21,
                            "imgUrl": null,
                            "name": "FC Bayern München"
                        },
                        "headshot": {
                            "largeImgUrl": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/players/html5/134x134/188545.png",
                            "medImgUrl": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/players/html5/105x105/188545.png",
                            "smallImgUrl": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/players/html5/40x40/188545.png"
                        },
                        "specialImages": {
                            "largeTOTWImgUrl": null,
                            "medTOTWImgUrl": null
                        },
                        "position": "ST",
                        "composure": 87,
                        "playStyle": "Basic",
                        "playStyleId": null,
                        "height": 185,
                        "weight": 79,
                        "birthdate": "1988-08-21",
                        "age": 29,
                        "acceleration": 79,
                        "aggression": 80,
                        "agility": 78,
                        "balance": 80,
                        "ballcontrol": 89,
                        "foot": "Right",
                        "skillMoves": 3,
                        "crossing": 62,
                        "curve": 77,
                        "dribbling": 85,
                        "finishing": 91,
                        "freekickaccuracy": 84,
                        "gkdiving": 15,
                        "gkhandling": 6,
                        "gkkicking": 12,
                        "gkpositioning": 8,
                        "gkreflexes": 10,
                        "headingaccuracy": 85,
                        "interceptions": 39,
                        "jumping": 84,
                        "longpassing": 65,
                        "longshots": 83,
                        "marking": 25,
                        "penalties": 81,
                        "positioning": 91,
                        "potential": 91,
                        "reactions": 91,
                        "shortpassing": 83,
                        "shotpower": 88,
                        "slidingtackle": 19,
                        "sprintspeed": 83,
                        "standingtackle": 42,
                        "stamina": 79,
                        "strength": 84,
                        "vision": 78,
                        "volleys": 87,
                        "weakFoot": 4,
                        "traits": [
                            "Shooting - Finesse Shot",
                            "Shooting - Chip Shot"
                        ],
                        "specialities": [
                            "Clinical Finisher",
                            "Poacher"
                        ],
                        "atkWorkRate": "High",
                        "defWorkRate": "Medium",
                        "playerType": "rare",
                        "attributes": [
                            {
                                "name": "fut.attribute.PAC",
                                "value": 81,
                                "chemistryBonus": [
                                    0
                                ]
                            },
                            {
                                "name": "fut.attribute.SHO",
                                "value": 88,
                                "chemistryBonus": [
                                    0
                                ]
                            },
                            {
                                "name": "fut.attribute.PAS",
                                "value": 75,
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
                                "value": 38,
                                "chemistryBonus": [
                                    0
                                ]
                            },
                            {
                                "name": "fut.attribute.PHY",
                                "value": 82,
                                "chemistryBonus": [
                                    0
                                ]
                            }
                        ],
                        "name": "Lewandowski",
                        "quality": "gold",
                        "color": "rare_gold",
                        "isGK": false,
                        "positionFull": "Striker",
                        "isSpecialType": false,
                        "contracts": null,
                        "fitness": null,
                        "rawAttributeChemistryBonus": null,
                        "isLoan": null,
                        "squadPosition": null,
                        "iconAttributes": null,
                        "itemType": "player",
                        "discardValue": null,
                        "id": "188545",
                        "modelName": "FUTPlayerItem",
                        "baseId": 188545,
                        "rating": 91
                    },
                    {
                        "isSelected": false,
                        "isActivated": false,
                        "commonName": "",
                        "firstName": "Kevin",
                        "headshotImgUrl": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/players/html5/134x134/192985.png",
                        "lastName": "De Bruyne",
                        "league": {
                            "abbrName": "ENG 1",
                            "id": 13,
                            "imgUrl": null,
                            "name": "Premier League"
                        },
                        "nation": {
                            "imageUrls": {
                                "small": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/flags/html5/24x14/7.png",
                                "medium": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/flags/html5/30x19/7.png",
                                "large": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/flags/html5/40x25/7.png"
                            },
                            "abbrName": "Belgium",
                            "id": 7,
                            "imgUrl": null,
                            "name": "Belgium"
                        },
                        "club": {
                            "imageUrls": {
                                "dark": {
                                    "small": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/clubbadges/html5/dark/24x24/l10.png",
                                    "medium": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/clubbadges/html5/dark/27x27/l10.png",
                                    "large": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/clubbadges/html5/dark/34x34/l10.png"
                                },
                                "normal": {
                                    "small": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/clubbadges/html5/normal/24x24/l10.png",
                                    "medium": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/clubbadges/html5/normal/27x27/l10.png",
                                    "large": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/clubbadges/html5/normal/34x34/l10.png"
                                }
                            },
                            "abbrName": "Man City",
                            "id": 10,
                            "imgUrl": null,
                            "name": "Manchester City"
                        },
                        "headshot": {
                            "largeImgUrl": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/players/html5/134x134/192985.png",
                            "medImgUrl": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/players/html5/105x105/192985.png",
                            "smallImgUrl": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/players/html5/40x40/192985.png"
                        },
                        "specialImages": {
                            "largeTOTWImgUrl": null,
                            "medTOTWImgUrl": null
                        },
                        "position": "CAM",
                        "composure": 85,
                        "playStyle": "Basic",
                        "playStyleId": null,
                        "height": 181,
                        "weight": 68,
                        "birthdate": "1991-06-28",
                        "age": 26,
                        "acceleration": 77,
                        "aggression": 68,
                        "agility": 81,
                        "balance": 76,
                        "ballcontrol": 89,
                        "foot": "Right",
                        "skillMoves": 4,
                        "crossing": 92,
                        "curve": 84,
                        "dribbling": 87,
                        "finishing": 83,
                        "freekickaccuracy": 84,
                        "gkdiving": 15,
                        "gkhandling": 13,
                        "gkkicking": 5,
                        "gkpositioning": 10,
                        "gkreflexes": 13,
                        "headingaccuracy": 56,
                        "interceptions": 59,
                        "jumping": 65,
                        "longpassing": 85,
                        "longshots": 87,
                        "marking": 32,
                        "penalties": 77,
                        "positioning": 85,
                        "potential": 92,
                        "reactions": 90,
                        "shortpassing": 92,
                        "shotpower": 86,
                        "slidingtackle": 42,
                        "sprintspeed": 76,
                        "standingtackle": 54,
                        "stamina": 88,
                        "strength": 73,
                        "vision": 92,
                        "volleys": 82,
                        "weakFoot": 5,
                        "traits": [
                            "Crosser - Early Crosser",
                            "Passing - Long Passer",
                            "Shooting - Long Shot Taker",
                            "Playmaker",
                            "Corner Specialist"
                        ],
                        "specialities": [
                            "Dribbler",
                            "Play Maker",
                            "Crosser",
                            "Midfielder"
                        ],
                        "atkWorkRate": "High",
                        "defWorkRate": "High",
                        "playerType": "rare",
                        "attributes": [
                            {
                                "name": "fut.attribute.PAC",
                                "value": 76,
                                "chemistryBonus": [
                                    0
                                ]
                            },
                            {
                                "name": "fut.attribute.SHO",
                                "value": 85,
                                "chemistryBonus": [
                                    0
                                ]
                            },
                            {
                                "name": "fut.attribute.PAS",
                                "value": 90,
                                "chemistryBonus": [
                                    0
                                ]
                            },
                            {
                                "name": "fut.attribute.DRI",
                                "value": 87,
                                "chemistryBonus": [
                                    0
                                ]
                            },
                            {
                                "name": "fut.attribute.DEF",
                                "value": 48,
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
                        "name": "De Bruyne",
                        "quality": "gold",
                        "color": "rare_gold",
                        "isGK": false,
                        "positionFull": "Centre Attacking Midfielder",
                        "isSpecialType": false,
                        "contracts": null,
                        "fitness": null,
                        "rawAttributeChemistryBonus": null,
                        "isLoan": null,
                        "squadPosition": null,
                        "iconAttributes": null,
                        "itemType": "player",
                        "discardValue": null,
                        "id": "117633497",
                        "modelName": "FUTPlayerItem",
                        "baseId": 192985,
                        "rating": 91
                    },
                    {
                        "isSelected": false,
                        "isActivated": false,
                        "commonName": "",
                        "firstName": "Eden",
                        "headshotImgUrl": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/players/html5/134x134/183277.png",
                        "lastName": "Hazard",
                        "league": {
                            "abbrName": "ENG 1",
                            "id": 13,
                            "imgUrl": null,
                            "name": "Premier League"
                        },
                        "nation": {
                            "imageUrls": {
                                "small": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/flags/html5/24x14/7.png",
                                "medium": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/flags/html5/30x19/7.png",
                                "large": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/flags/html5/40x25/7.png"
                            },
                            "abbrName": "Belgium",
                            "id": 7,
                            "imgUrl": null,
                            "name": "Belgium"
                        },
                        "club": {
                            "imageUrls": {
                                "dark": {
                                    "small": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/clubbadges/html5/dark/24x24/l5.png",
                                    "medium": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/clubbadges/html5/dark/27x27/l5.png",
                                    "large": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/clubbadges/html5/dark/34x34/l5.png"
                                },
                                "normal": {
                                    "small": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/clubbadges/html5/normal/24x24/l5.png",
                                    "medium": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/clubbadges/html5/normal/27x27/l5.png",
                                    "large": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/clubbadges/html5/normal/34x34/l5.png"
                                }
                            },
                            "abbrName": "Chelsea",
                            "id": 5,
                            "imgUrl": null,
                            "name": "Chelsea"
                        },
                        "headshot": {
                            "largeImgUrl": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/players/html5/134x134/183277.png",
                            "medImgUrl": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/players/html5/105x105/183277.png",
                            "smallImgUrl": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/players/html5/40x40/183277.png"
                        },
                        "specialImages": {
                            "largeTOTWImgUrl": null,
                            "medTOTWImgUrl": null
                        },
                        "position": "LW",
                        "composure": 87,
                        "playStyle": "Basic",
                        "playStyleId": null,
                        "height": 173,
                        "weight": 76,
                        "birthdate": "1991-01-07",
                        "age": 27,
                        "acceleration": 93,
                        "aggression": 55,
                        "agility": 94,
                        "balance": 91,
                        "ballcontrol": 93,
                        "foot": "Right",
                        "skillMoves": 4,
                        "crossing": 80,
                        "curve": 82,
                        "dribbling": 94,
                        "finishing": 84,
                        "freekickaccuracy": 79,
                        "gkdiving": 11,
                        "gkhandling": 12,
                        "gkkicking": 6,
                        "gkpositioning": 8,
                        "gkreflexes": 8,
                        "headingaccuracy": 57,
                        "interceptions": 41,
                        "jumping": 60,
                        "longpassing": 81,
                        "longshots": 83,
                        "marking": 25,
                        "penalties": 87,
                        "positioning": 86,
                        "potential": 91,
                        "reactions": 85,
                        "shortpassing": 87,
                        "shotpower": 79,
                        "slidingtackle": 22,
                        "sprintspeed": 87,
                        "standingtackle": 27,
                        "stamina": 81,
                        "strength": 66,
                        "vision": 87,
                        "volleys": 79,
                        "weakFoot": 4,
                        "traits": [
                            "Shooting - Finesse Shot",
                            "Flair",
                            "Playmaker",
                            "Technical Dribbler"
                        ],
                        "specialities": [
                            "Speedster",
                            "Dribbler",
                            "Acrobat"
                        ],
                        "atkWorkRate": "High",
                        "defWorkRate": "Medium",
                        "playerType": "rare",
                        "attributes": [
                            {
                                "name": "fut.attribute.PAC",
                                "value": 90,
                                "chemistryBonus": [
                                    0
                                ]
                            },
                            {
                                "name": "fut.attribute.SHO",
                                "value": 83,
                                "chemistryBonus": [
                                    0
                                ]
                            },
                            {
                                "name": "fut.attribute.PAS",
                                "value": 85,
                                "chemistryBonus": [
                                    0
                                ]
                            },
                            {
                                "name": "fut.attribute.DRI",
                                "value": 93,
                                "chemistryBonus": [
                                    0
                                ]
                            },
                            {
                                "name": "fut.attribute.DEF",
                                "value": 32,
                                "chemistryBonus": [
                                    0
                                ]
                            },
                            {
                                "name": "fut.attribute.PHY",
                                "value": 68,
                                "chemistryBonus": [
                                    0
                                ]
                            }
                        ],
                        "name": "Hazard",
                        "quality": "gold",
                        "color": "rare_gold",
                        "isGK": false,
                        "positionFull": "Left Wing",
                        "isSpecialType": false,
                        "contracts": null,
                        "fitness": null,
                        "rawAttributeChemistryBonus": null,
                        "isLoan": null,
                        "squadPosition": null,
                        "iconAttributes": null,
                        "itemType": "player",
                        "discardValue": null,
                        "id": "134401005",
                        "modelName": "FUTPlayerItem",
                        "baseId": 183277,
                        "rating": 91
                    },
                    {

                        "isSelected": false,
                        "isActivated": false,    "commonName": "Sergio Ramos",
                        "firstName": "Sergio",
                        "headshotImgUrl": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/players/html5/134x134/155862.png",
                        "lastName": "Ramos García",
                        "league": {
                            "abbrName": "ESP 1",
                            "id": 53,
                            "imgUrl": null,
                            "name": "LaLiga Santander"
                        },
                        "nation": {
                            "imageUrls": {
                                "small": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/flags/html5/24x14/45.png",
                                "medium": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/flags/html5/30x19/45.png",
                                "large": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/flags/html5/40x25/45.png"
                            },
                            "abbrName": "Spain",
                            "id": 45,
                            "imgUrl": null,
                            "name": "Spain"
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
                            "largeImgUrl": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/players/html5/134x134/155862.png",
                            "medImgUrl": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/players/html5/105x105/155862.png",
                            "smallImgUrl": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/players/html5/40x40/155862.png"
                        },
                        "specialImages": {
                            "largeTOTWImgUrl": null,
                            "medTOTWImgUrl": null
                        },
                        "position": "CB",
                        "composure": 80,
                        "playStyle": "Basic",
                        "playStyleId": null,
                        "height": 183,
                        "weight": 75,
                        "birthdate": "1986-03-30",
                        "age": 31,
                        "acceleration": 75,
                        "aggression": 84,
                        "agility": 79,
                        "balance": 60,
                        "ballcontrol": 84,
                        "foot": "Right",
                        "skillMoves": 3,
                        "crossing": 66,
                        "curve": 73,
                        "dribbling": 61,
                        "finishing": 60,
                        "freekickaccuracy": 67,
                        "gkdiving": 11,
                        "gkhandling": 8,
                        "gkkicking": 9,
                        "gkpositioning": 7,
                        "gkreflexes": 11,
                        "headingaccuracy": 91,
                        "interceptions": 88,
                        "jumping": 93,
                        "longpassing": 72,
                        "longshots": 55,
                        "marking": 86,
                        "penalties": 68,
                        "positioning": 52,
                        "potential": 90,
                        "reactions": 85,
                        "shortpassing": 78,
                        "shotpower": 79,
                        "slidingtackle": 91,
                        "sprintspeed": 77,
                        "standingtackle": 89,
                        "stamina": 84,
                        "strength": 81,
                        "vision": 63,
                        "volleys": 66,
                        "weakFoot": 3,
                        "traits": [
                            "Dives Into Tackles",
                            "Leadership",
                            "Power Header"
                        ],
                        "specialities": [
                            "Aerial Threat",
                            "Tackler",
                            "Tactician",
                            "Complete Defender"
                        ],
                        "atkWorkRate": "High",
                        "defWorkRate": "Medium",
                        "playerType": "rare",
                        "attributes": [
                            {
                                "name": "fut.attribute.PAC",
                                "value": 76,
                                "chemistryBonus": [
                                    0
                                ]
                            },
                            {
                                "name": "fut.attribute.SHO",
                                "value": 63,
                                "chemistryBonus": [
                                    0
                                ]
                            },
                            {
                                "name": "fut.attribute.PAS",
                                "value": 71,
                                "chemistryBonus": [
                                    0
                                ]
                            },
                            {
                                "name": "fut.attribute.DRI",
                                "value": 72,
                                "chemistryBonus": [
                                    0
                                ]
                            },
                            {
                                "name": "fut.attribute.DEF",
                                "value": 88,
                                "chemistryBonus": [
                                    0
                                ]
                            },
                            {
                                "name": "fut.attribute.PHY",
                                "value": 83,
                                "chemistryBonus": [
                                    0
                                ]
                            }
                        ],
                        "name": "Sergio Ramos",
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
                        "id": "155862",
                        "modelName": "FUTPlayerItem",
                        "baseId": 155862,
                        "rating": 90
                    },
                    {

                        "isSelected": false,
                        "isActivated": false,    "commonName": "",
                        "firstName": "Gonzalo",
                        "headshotImgUrl": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/players/html5/134x134/167664.png",
                        "lastName": "Higuaín",
                        "league": {
                            "abbrName": "ITA 1",
                            "id": 31,
                            "imgUrl": null,
                            "name": "Calcio A"
                        },
                        "nation": {
                            "imageUrls": {
                                "small": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/flags/html5/24x14/52.png",
                                "medium": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/flags/html5/30x19/52.png",
                                "large": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/flags/html5/40x25/52.png"
                            },
                            "abbrName": "Argentina",
                            "id": 52,
                            "imgUrl": null,
                            "name": "Argentina"
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
                            "largeImgUrl": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/players/html5/134x134/167664.png",
                            "medImgUrl": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/players/html5/105x105/167664.png",
                            "smallImgUrl": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/players/html5/40x40/167664.png"
                        },
                        "specialImages": {
                            "largeTOTWImgUrl": null,
                            "medTOTWImgUrl": null
                        },
                        "position": "ST",
                        "composure": 86,
                        "playStyle": "Basic",
                        "playStyleId": null,
                        "height": 184,
                        "weight": 87,
                        "birthdate": "1987-12-10",
                        "age": 30,
                        "acceleration": 78,
                        "aggression": 50,
                        "agility": 75,
                        "balance": 69,
                        "ballcontrol": 85,
                        "foot": "Right",
                        "skillMoves": 3,
                        "crossing": 68,
                        "curve": 74,
                        "dribbling": 84,
                        "finishing": 91,
                        "freekickaccuracy": 62,
                        "gkdiving": 5,
                        "gkhandling": 12,
                        "gkkicking": 7,
                        "gkpositioning": 5,
                        "gkreflexes": 10,
                        "headingaccuracy": 86,
                        "interceptions": 20,
                        "jumping": 79,
                        "longpassing": 59,
                        "longshots": 82,
                        "marking": 12,
                        "penalties": 70,
                        "positioning": 92,
                        "potential": 90,
                        "reactions": 88,
                        "shortpassing": 75,
                        "shotpower": 88,
                        "slidingtackle": 18,
                        "sprintspeed": 80,
                        "standingtackle": 22,
                        "stamina": 72,
                        "strength": 85,
                        "vision": 70,
                        "volleys": 88,
                        "weakFoot": 4,
                        "traits": [
                            "Chip Shot"
                        ],
                        "specialities": [
                            "Clinical Finisher",
                            "Poacher"
                        ],
                        "atkWorkRate": "High",
                        "defWorkRate": "Medium",
                        "playerType": "rare",
                        "attributes": [
                            {
                                "name": "fut.attribute.PAC",
                                "value": 79,
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
                                "value": 70,
                                "chemistryBonus": [
                                    0
                                ]
                            },
                            {
                                "name": "fut.attribute.DRI",
                                "value": 83,
                                "chemistryBonus": [
                                    0
                                ]
                            },
                            {
                                "name": "fut.attribute.DEF",
                                "value": 25,
                                "chemistryBonus": [
                                    0
                                ]
                            },
                            {
                                "name": "fut.attribute.PHY",
                                "value": 74,
                                "chemistryBonus": [
                                    0
                                ]
                            }
                        ],
                        "name": "Higuaín",
                        "quality": "gold",
                        "color": "rare_gold",
                        "isGK": false,
                        "positionFull": "Striker",
                        "isSpecialType": false,
                        "contracts": null,
                        "fitness": null,
                        "rawAttributeChemistryBonus": null,
                        "isLoan": null,
                        "squadPosition": null,
                        "iconAttributes": null,
                        "itemType": "player",
                        "discardValue": null,
                        "id": "167664",
                        "modelName": "FUTPlayerItem",
                        "baseId": 167664,
                        "rating": 90
                    },
                    {
                        "isSelected": false,
                        "isActivated": false,
                        "commonName": "",
                        "firstName": "Toni",
                        "headshotImgUrl": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/players/html5/134x134/182521.png",
                        "lastName": "Kroos",
                        "league": {
                            "abbrName": "ESP 1",
                            "id": 53,
                            "imgUrl": null,
                            "name": "LaLiga Santander"
                        },
                        "nation": {
                            "imageUrls": {
                                "small": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/flags/html5/24x14/21.png",
                                "medium": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/flags/html5/30x19/21.png",
                                "large": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/flags/html5/40x25/21.png"
                            },
                            "abbrName": "Germany",
                            "id": 21,
                            "imgUrl": null,
                            "name": "Germany"
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
                            "largeImgUrl": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/players/html5/134x134/182521.png",
                            "medImgUrl": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/players/html5/105x105/182521.png",
                            "smallImgUrl": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/players/html5/40x40/182521.png"
                        },
                        "specialImages": {
                            "largeTOTWImgUrl": null,
                            "medTOTWImgUrl": null
                        },
                        "position": "CM",
                        "composure": 85,
                        "playStyle": "Basic",
                        "playStyleId": null,
                        "height": 182,
                        "weight": 78,
                        "birthdate": "1990-01-04",
                        "age": 28,
                        "acceleration": 56,
                        "aggression": 60,
                        "agility": 71,
                        "balance": 69,
                        "ballcontrol": 89,
                        "foot": "Right",
                        "skillMoves": 3,
                        "crossing": 85,
                        "curve": 85,
                        "dribbling": 79,
                        "finishing": 76,
                        "freekickaccuracy": 84,
                        "gkdiving": 10,
                        "gkhandling": 11,
                        "gkkicking": 13,
                        "gkpositioning": 7,
                        "gkreflexes": 10,
                        "headingaccuracy": 54,
                        "interceptions": 85,
                        "jumping": 32,
                        "longpassing": 93,
                        "longshots": 90,
                        "marking": 63,
                        "penalties": 73,
                        "positioning": 79,
                        "potential": 90,
                        "reactions": 86,
                        "shortpassing": 90,
                        "shotpower": 87,
                        "slidingtackle": 69,
                        "sprintspeed": 45,
                        "standingtackle": 82,
                        "stamina": 77,
                        "strength": 74,
                        "vision": 88,
                        "volleys": 82,
                        "weakFoot": 5,
                        "traits": [
                            "Shooting - Long Shot Taker",
                            "Playmaker",
                            "Technical Dribbler",
                            "Corner Specialist"
                        ],
                        "specialities": [
                            "Play Maker",
                            "Distance Shooter"
                        ],
                        "atkWorkRate": "Medium",
                        "defWorkRate": "Medium",
                        "playerType": "rare",
                        "attributes": [
                            {
                                "name": "fut.attribute.PAC",
                                "value": 50,
                                "chemistryBonus": [
                                    0
                                ]
                            },
                            {
                                "name": "fut.attribute.SHO",
                                "value": 81,
                                "chemistryBonus": [
                                    0
                                ]
                            },
                            {
                                "name": "fut.attribute.PAS",
                                "value": 88,
                                "chemistryBonus": [
                                    0
                                ]
                            },
                            {
                                "name": "fut.attribute.DRI",
                                "value": 81,
                                "chemistryBonus": [
                                    0
                                ]
                            },
                            {
                                "name": "fut.attribute.DEF",
                                "value": 73,
                                "chemistryBonus": [
                                    0
                                ]
                            },
                            {
                                "name": "fut.attribute.PHY",
                                "value": 70,
                                "chemistryBonus": [
                                    0
                                ]
                            }
                        ],
                        "name": "Kroos",
                        "quality": "gold",
                        "color": "rare_gold",
                        "isGK": false,
                        "positionFull": "Centre Midfielder",
                        "isSpecialType": false,
                        "contracts": null,
                        "fitness": null,
                        "rawAttributeChemistryBonus": null,
                        "isLoan": null,
                        "squadPosition": null,
                        "iconAttributes": null,
                        "itemType": "player",
                        "discardValue": null,
                        "id": "182521",
                        "modelName": "FUTPlayerItem",
                        "baseId": 182521,
                        "rating": 90
                    },
                    {
                        "isSelected": false,
                        "isActivated": false,
                        "commonName": "",
                        "firstName": "Eden",
                        "headshotImgUrl": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/players/html5/134x134/183277.png",
                        "lastName": "Hazard",
                        "league": {
                            "abbrName": "ENG 1",
                            "id": 13,
                            "imgUrl": null,
                            "name": "Premier League"
                        },
                        "nation": {
                            "imageUrls": {
                                "small": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/flags/html5/24x14/7.png",
                                "medium": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/flags/html5/30x19/7.png",
                                "large": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/flags/html5/40x25/7.png"
                            },
                            "abbrName": "Belgium",
                            "id": 7,
                            "imgUrl": null,
                            "name": "Belgium"
                        },
                        "club": {
                            "imageUrls": {
                                "dark": {
                                    "small": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/clubbadges/html5/dark/24x24/l5.png",
                                    "medium": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/clubbadges/html5/dark/27x27/l5.png",
                                    "large": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/clubbadges/html5/dark/34x34/l5.png"
                                },
                                "normal": {
                                    "small": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/clubbadges/html5/normal/24x24/l5.png",
                                    "medium": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/clubbadges/html5/normal/27x27/l5.png",
                                    "large": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/clubbadges/html5/normal/34x34/l5.png"
                                }
                            },
                            "abbrName": "Chelsea",
                            "id": 5,
                            "imgUrl": null,
                            "name": "Chelsea"
                        },
                        "headshot": {
                            "largeImgUrl": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/players/html5/134x134/183277.png",
                            "medImgUrl": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/players/html5/105x105/183277.png",
                            "smallImgUrl": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/players/html5/40x40/183277.png"
                        },
                        "specialImages": {
                            "largeTOTWImgUrl": null,
                            "medTOTWImgUrl": null
                        },
                        "position": "LW",
                        "composure": 87,
                        "playStyle": "Basic",
                        "playStyleId": null,
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
                        "skillMoves": 4,
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
                        "traits": [
                            "Shooting - Finesse Shot",
                            "Flair",
                            "Playmaker",
                            "Technical Dribbler"
                        ],
                        "specialities": [
                            "Speedster",
                            "Dribbler",
                            "Acrobat"
                        ],
                        "atkWorkRate": "High",
                        "defWorkRate": "Medium",
                        "playerType": "rare",
                        "attributes": [
                            {
                                "name": "fut.attribute.PAC",
                                "value": 90,
                                "chemistryBonus": [
                                    0
                                ]
                            },
                            {
                                "name": "fut.attribute.SHO",
                                "value": 82,
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
                                "value": 92,
                                "chemistryBonus": [
                                    0
                                ]
                            },
                            {
                                "name": "fut.attribute.DEF",
                                "value": 32,
                                "chemistryBonus": [
                                    0
                                ]
                            },
                            {
                                "name": "fut.attribute.PHY",
                                "value": 66,
                                "chemistryBonus": [
                                    0
                                ]
                            }
                        ],
                        "name": "Hazard",
                        "quality": "gold",
                        "color": "rare_gold",
                        "isGK": false,
                        "positionFull": "Left Wing",
                        "isSpecialType": false,
                        "contracts": null,
                        "fitness": null,
                        "rawAttributeChemistryBonus": null,
                        "isLoan": null,
                        "squadPosition": null,
                        "iconAttributes": null,
                        "itemType": "player",
                        "discardValue": null,
                        "id": "183277",
                        "modelName": "FUTPlayerItem",
                        "baseId": 183277,
                        "rating": 90
                    },
                    {
                        "isSelected": false,
                        "isActivated": false,
                        "commonName": "",
                        "firstName": "Mats",
                        "headshotImgUrl": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/players/html5/134x134/178603.png",
                        "lastName": "Hummels",
                        "league": {
                            "abbrName": "GER 1",
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
                            "abbrName": "Germany",
                            "id": 21,
                            "imgUrl": null,
                            "name": "Germany"
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
                            "abbrName": "Bayern",
                            "id": 21,
                            "imgUrl": null,
                            "name": "FC Bayern München"
                        },
                        "headshot": {
                            "largeImgUrl": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/players/html5/134x134/178603.png",
                            "medImgUrl": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/players/html5/105x105/178603.png",
                            "smallImgUrl": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/players/html5/40x40/178603.png"
                        },
                        "specialImages": {
                            "largeTOTWImgUrl": null,
                            "medTOTWImgUrl": null
                        },
                        "position": "CB",
                        "composure": 92,
                        "playStyle": "Basic",
                        "playStyleId": null,
                        "height": 191,
                        "weight": 92,
                        "birthdate": "1988-12-16",
                        "age": 29,
                        "acceleration": 62,
                        "aggression": 66,
                        "agility": 64,
                        "balance": 58,
                        "ballcontrol": 78,
                        "foot": "Right",
                        "skillMoves": 2,
                        "crossing": 64,
                        "curve": 65,
                        "dribbling": 68,
                        "finishing": 55,
                        "freekickaccuracy": 53,
                        "gkdiving": 15,
                        "gkhandling": 6,
                        "gkkicking": 10,
                        "gkpositioning": 5,
                        "gkreflexes": 6,
                        "headingaccuracy": 90,
                        "interceptions": 90,
                        "jumping": 68,
                        "longpassing": 86,
                        "longshots": 51,
                        "marking": 85,
                        "penalties": 68,
                        "positioning": 56,
                        "potential": 88,
                        "reactions": 86,
                        "shortpassing": 81,
                        "shotpower": 71,
                        "slidingtackle": 91,
                        "sprintspeed": 66,
                        "standingtackle": 93,
                        "stamina": 66,
                        "strength": 86,
                        "vision": 80,
                        "volleys": 60,
                        "weakFoot": 3,
                        "traits": [
                            "Avoids Using Weaker Foot",
                            "Passing - Long Passer",
                            "Playmaker"
                        ],
                        "specialities": [
                            "Aerial Threat",
                            "Tackler",
                            "Tactician",
                            "Strength",
                            "Complete Defender"
                        ],
                        "atkWorkRate": "High",
                        "defWorkRate": "Medium",
                        "playerType": "rare",
                        "attributes": [
                            {
                                "name": "fut.attribute.PAC",
                                "value": 65,
                                "chemistryBonus": [
                                    0
                                ]
                            },
                            {
                                "name": "fut.attribute.SHO",
                                "value": 58,
                                "chemistryBonus": [
                                    0
                                ]
                            },
                            {
                                "name": "fut.attribute.PAS",
                                "value": 76,
                                "chemistryBonus": [
                                    0
                                ]
                            },
                            {
                                "name": "fut.attribute.DRI",
                                "value": 73,
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
                                "value": 77,
                                "chemistryBonus": [
                                    0
                                ]
                            }
                        ],
                        "name": "Hummels",
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
                        "id": "117619115",
                        "modelName": "FUTPlayerItem",
                        "baseId": 178603,
                        "rating": 89
                    },
                    {

                        "isSelected": false,
                        "isActivated": false,
                        "commonName": "",
                        "firstName": "Alexis",
                        "headshotImgUrl": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/players/html5/134x134/184941.png",
                        "lastName": "Sánchez",
                        "league": {
                            "abbrName": "ENG 1",
                            "id": 13,
                            "imgUrl": null,
                            "name": "Premier League"
                        },
                        "nation": {
                            "imageUrls": {
                                "small": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/flags/html5/24x14/55.png",
                                "medium": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/flags/html5/30x19/55.png",
                                "large": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/flags/html5/40x25/55.png"
                            },
                            "abbrName": "Chile",
                            "id": 55,
                            "imgUrl": null,
                            "name": "Chile"
                        },
                        "club": {
                            "imageUrls": {
                                "dark": {
                                    "small": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/clubbadges/html5/dark/24x24/l11.png",
                                    "medium": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/clubbadges/html5/dark/27x27/l11.png",
                                    "large": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/clubbadges/html5/dark/34x34/l11.png"
                                },
                                "normal": {
                                    "small": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/clubbadges/html5/normal/24x24/l11.png",
                                    "medium": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/clubbadges/html5/normal/27x27/l11.png",
                                    "large": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/clubbadges/html5/normal/34x34/l11.png"
                                }
                            },
                            "abbrName": "Man Utd",
                            "id": 11,
                            "imgUrl": null,
                            "name": "Manchester United"
                        },
                        "headshot": {
                            "largeImgUrl": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/players/html5/134x134/184941.png",
                            "medImgUrl": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/players/html5/105x105/184941.png",
                            "smallImgUrl": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/players/html5/40x40/184941.png"
                        },
                        "specialImages": {
                            "largeTOTWImgUrl": null,
                            "medTOTWImgUrl": null
                        },
                        "position": "LM",
                        "composure": 86,
                        "playStyle": "Basic",
                        "playStyleId": null,
                        "height": 169,
                        "weight": 62,
                        "birthdate": "1988-12-19",
                        "age": 29,
                        "acceleration": 88,
                        "aggression": 80,
                        "agility": 90,
                        "balance": 87,
                        "ballcontrol": 87,
                        "foot": "Right",
                        "skillMoves": 4,
                        "crossing": 80,
                        "curve": 78,
                        "dribbling": 90,
                        "finishing": 85,
                        "freekickaccuracy": 78,
                        "gkdiving": 10,
                        "gkhandling": 10,
                        "gkkicking": 15,
                        "gkpositioning": 12,
                        "gkreflexes": 13,
                        "headingaccuracy": 70,
                        "interceptions": 42,
                        "jumping": 85,
                        "longpassing": 73,
                        "longshots": 82,
                        "marking": 30,
                        "penalties": 77,
                        "positioning": 86,
                        "potential": 89,
                        "reactions": 87,
                        "shortpassing": 81,
                        "shotpower": 84,
                        "slidingtackle": 35,
                        "sprintspeed": 84,
                        "standingtackle": 39,
                        "stamina": 85,
                        "strength": 72,
                        "vision": 83,
                        "volleys": 83,
                        "weakFoot": 3,
                        "traits": [
                            "Flair",
                            "Shooting - Long Shot Taker",
                            "Technical Dribbler"
                        ],
                        "specialities": [
                            "Dribbler",
                            "Acrobat"
                        ],
                        "atkWorkRate": "High",
                        "defWorkRate": "High",
                        "playerType": "rare",
                        "attributes": [
                            {
                                "name": "fut.attribute.PAC",
                                "value": 86,
                                "chemistryBonus": [
                                    0
                                ]
                            },
                            {
                                "name": "fut.attribute.SHO",
                                "value": 84,
                                "chemistryBonus": [
                                    0
                                ]
                            },
                            {
                                "name": "fut.attribute.PAS",
                                "value": 80,
                                "chemistryBonus": [
                                    0
                                ]
                            },
                            {
                                "name": "fut.attribute.DRI",
                                "value": 89,
                                "chemistryBonus": [
                                    0
                                ]
                            },
                            {
                                "name": "fut.attribute.DEF",
                                "value": 40,
                                "chemistryBonus": [
                                    0
                                ]
                            },
                            {
                                "name": "fut.attribute.PHY",
                                "value": 78,
                                "chemistryBonus": [
                                    0
                                ]
                            }
                        ],
                        "name": "Sánchez",
                        "quality": "gold",
                        "color": "rare_gold",
                        "isGK": false,
                        "positionFull": "Left Midfielder",
                        "isSpecialType": false,
                        "contracts": null,
                        "fitness": null,
                        "rawAttributeChemistryBonus": null,
                        "isLoan": null,
                        "squadPosition": null,
                        "iconAttributes": null,
                        "itemType": "player",
                        "discardValue": null,
                        "id": "117625453",
                        "modelName": "FUTPlayerItem",
                        "baseId": 184941,
                        "rating": 89
                    },
                    {
                        "isSelected": false,
                        "isActivated": false,
                        "commonName": "David Silva",
                        "firstName": "David Josué",
                        "headshotImgUrl": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/players/html5/134x134/168542.png",
                        "lastName": "Jimenez Silva",
                        "league": {
                            "abbrName": "ENG 1",
                            "id": 13,
                            "imgUrl": null,
                            "name": "Premier League"
                        },
                        "nation": {
                            "imageUrls": {
                                "small": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/flags/html5/24x14/45.png",
                                "medium": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/flags/html5/30x19/45.png",
                                "large": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/flags/html5/40x25/45.png"
                            },
                            "abbrName": "Spain",
                            "id": 45,
                            "imgUrl": null,
                            "name": "Spain"
                        },
                        "club": {
                            "imageUrls": {
                                "dark": {
                                    "small": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/clubbadges/html5/dark/24x24/l10.png",
                                    "medium": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/clubbadges/html5/dark/27x27/l10.png",
                                    "large": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/clubbadges/html5/dark/34x34/l10.png"
                                },
                                "normal": {
                                    "small": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/clubbadges/html5/normal/24x24/l10.png",
                                    "medium": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/clubbadges/html5/normal/27x27/l10.png",
                                    "large": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/clubbadges/html5/normal/34x34/l10.png"
                                }
                            },
                            "abbrName": "Man City",
                            "id": 10,
                            "imgUrl": null,
                            "name": "Manchester City"
                        },
                        "headshot": {
                            "largeImgUrl": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/players/html5/134x134/168542.png",
                            "medImgUrl": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/players/html5/105x105/168542.png",
                            "smallImgUrl": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/players/html5/40x40/168542.png"
                        },
                        "specialImages": {
                            "largeTOTWImgUrl": null,
                            "medTOTWImgUrl": null
                        },
                        "position": "CAM",
                        "composure": 94,
                        "playStyle": "Basic",
                        "playStyleId": null,
                        "height": 173,
                        "weight": 67,
                        "birthdate": "1986-01-08",
                        "age": 32,
                        "acceleration": 72,
                        "aggression": 51,
                        "agility": 94,
                        "balance": 91,
                        "ballcontrol": 92,
                        "foot": "Left",
                        "skillMoves": 4,
                        "crossing": 83,
                        "curve": 82,
                        "dribbling": 85,
                        "finishing": 72,
                        "freekickaccuracy": 75,
                        "gkdiving": 1,
                        "gkhandling": 1,
                        "gkkicking": 1,
                        "gkpositioning": 1,
                        "gkreflexes": 1,
                        "headingaccuracy": 55,
                        "interceptions": 44,
                        "jumping": 67,
                        "longpassing": 79,
                        "longshots": 75,
                        "marking": 25,
                        "penalties": 75,
                        "positioning": 83,
                        "potential": 87,
                        "reactions": 85,
                        "shortpassing": 92,
                        "shotpower": 72,
                        "slidingtackle": 29,
                        "sprintspeed": 65,
                        "standingtackle": 45,
                        "stamina": 79,
                        "strength": 56,
                        "vision": 93,
                        "volleys": 81,
                        "weakFoot": 2,
                        "traits": [
                            "Avoids Using Weaker Foot",
                            "Shooting - Finesse Shot",
                            "Flair",
                            "Playmaker",
                            "Takes Finesse Style Free Kicks"
                        ],
                        "specialities": [
                            "Play Maker",
                            "Acrobat"
                        ],
                        "atkWorkRate": "High",
                        "defWorkRate": "Low",
                        "playerType": "rare",
                        "attributes": [
                            {
                                "name": "fut.attribute.PAC",
                                "value": 68,
                                "chemistryBonus": [
                                    0
                                ]
                            },
                            {
                                "name": "fut.attribute.SHO",
                                "value": 74,
                                "chemistryBonus": [
                                    0
                                ]
                            },
                            {
                                "name": "fut.attribute.PAS",
                                "value": 88,
                                "chemistryBonus": [
                                    0
                                ]
                            },
                            {
                                "name": "fut.attribute.DRI",
                                "value": 89,
                                "chemistryBonus": [
                                    0
                                ]
                            },
                            {
                                "name": "fut.attribute.DEF",
                                "value": 39,
                                "chemistryBonus": [
                                    0
                                ]
                            },
                            {
                                "name": "fut.attribute.PHY",
                                "value": 62,
                                "chemistryBonus": [
                                    0
                                ]
                            }
                        ],
                        "name": "David Silva",
                        "quality": "gold",
                        "color": "rare_gold",
                        "isGK": false,
                        "positionFull": "Centre Attacking Midfielder",
                        "isSpecialType": false,
                        "contracts": null,
                        "fitness": null,
                        "rawAttributeChemistryBonus": null,
                        "isLoan": null,
                        "squadPosition": null,
                        "iconAttributes": null,
                        "itemType": "player",
                        "discardValue": null,
                        "id": "134386270",
                        "modelName": "FUTPlayerItem",
                        "baseId": 168542,
                        "rating": 89
                    },
                    {
                        "isSelected": false,
                        "isActivated": false,
                        "commonName": "",
                        "firstName": "Arjen",
                        "headshotImgUrl": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/players/html5/134x134/9014.png",
                        "lastName": "Robben",
                        "league": {
                            "abbrName": "GER 1",
                            "id": 19,
                            "imgUrl": null,
                            "name": "Bundesliga"
                        },
                        "nation": {
                            "imageUrls": {
                                "small": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/flags/html5/24x14/34.png",
                                "medium": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/flags/html5/30x19/34.png",
                                "large": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/flags/html5/40x25/34.png"
                            },
                            "abbrName": "Holland",
                            "id": 34,
                            "imgUrl": null,
                            "name": "Holland"
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
                            "abbrName": "Bayern",
                            "id": 21,
                            "imgUrl": null,
                            "name": "FC Bayern München"
                        },
                        "headshot": {
                            "largeImgUrl": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/players/html5/134x134/9014.png",
                            "medImgUrl": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/players/html5/105x105/9014.png",
                            "smallImgUrl": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/players/html5/40x40/9014.png"
                        },
                        "specialImages": {
                            "largeTOTWImgUrl": null,
                            "medTOTWImgUrl": null
                        },
                        "position": "RM",
                        "composure": 86,
                        "playStyle": "Basic",
                        "playStyleId": null,
                        "height": 180,
                        "weight": 80,
                        "birthdate": "1984-01-23",
                        "age": 34,
                        "acceleration": 87,
                        "aggression": 47,
                        "agility": 89,
                        "balance": 91,
                        "ballcontrol": 89,
                        "foot": "Left",
                        "skillMoves": 4,
                        "crossing": 80,
                        "curve": 87,
                        "dribbling": 92,
                        "finishing": 85,
                        "freekickaccuracy": 81,
                        "gkdiving": 10,
                        "gkhandling": 8,
                        "gkkicking": 11,
                        "gkpositioning": 5,
                        "gkreflexes": 15,
                        "headingaccuracy": 51,
                        "interceptions": 39,
                        "jumping": 61,
                        "longpassing": 71,
                        "longshots": 88,
                        "marking": 29,
                        "penalties": 80,
                        "positioning": 85,
                        "potential": 88,
                        "reactions": 87,
                        "shortpassing": 84,
                        "shotpower": 87,
                        "slidingtackle": 26,
                        "sprintspeed": 86,
                        "standingtackle": 26,
                        "stamina": 68,
                        "strength": 67,
                        "vision": 83,
                        "volleys": 86,
                        "weakFoot": 2,
                        "traits": [
                            "Injury Prone",
                            "Avoids Using Weaker Foot",
                            "Selfish",
                            "Shooting - Long Shot Taker",
                            "Dribbler - Speed Dribbler",
                            "Shooting - Chip Shot"
                        ],
                        "specialities": [
                            "Dribbler",
                            "Distance Shooter",
                            "Acrobat"
                        ],
                        "atkWorkRate": "High",
                        "defWorkRate": "Low",
                        "playerType": "rare",
                        "attributes": [
                            {
                                "name": "fut.attribute.PAC",
                                "value": 86,
                                "chemistryBonus": [
                                    0
                                ]
                            },
                            {
                                "name": "fut.attribute.SHO",
                                "value": 86,
                                "chemistryBonus": [
                                    0
                                ]
                            },
                            {
                                "name": "fut.attribute.PAS",
                                "value": 81,
                                "chemistryBonus": [
                                    0
                                ]
                            },
                            {
                                "name": "fut.attribute.DRI",
                                "value": 90,
                                "chemistryBonus": [
                                    0
                                ]
                            },
                            {
                                "name": "fut.attribute.DEF",
                                "value": 32,
                                "chemistryBonus": [
                                    0
                                ]
                            },
                            {
                                "name": "fut.attribute.PHY",
                                "value": 63,
                                "chemistryBonus": [
                                    0
                                ]
                            }
                        ],
                        "name": "Robben",
                        "quality": "gold",
                        "color": "rare_gold",
                        "isGK": false,
                        "positionFull": "Right Midfielder",
                        "isSpecialType": false,
                        "contracts": null,
                        "fitness": null,
                        "rawAttributeChemistryBonus": null,
                        "isLoan": null,
                        "squadPosition": null,
                        "iconAttributes": null,
                        "itemType": "player",
                        "discardValue": null,
                        "id": "9014",
                        "modelName": "FUTPlayerItem",
                        "baseId": 9014,
                        "rating": 88
                    },
                    {
                        "isSelected": false,
                        "isActivated": false,
                        "commonName": "",
                        "firstName": "Zlatan",
                        "headshotImgUrl": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/players/html5/134x134/41236.png",
                        "lastName": "Ibrahimović",
                        "league": {
                            "abbrName": "ENG 1",
                            "id": 13,
                            "imgUrl": null,
                            "name": "Premier League"
                        },
                        "nation": {
                            "imageUrls": {
                                "small": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/flags/html5/24x14/46.png",
                                "medium": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/flags/html5/30x19/46.png",
                                "large": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/flags/html5/40x25/46.png"
                            },
                            "abbrName": "Sweden",
                            "id": 46,
                            "imgUrl": null,
                            "name": "Sweden"
                        },
                        "club": {
                            "imageUrls": {
                                "dark": {
                                    "small": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/clubbadges/html5/dark/24x24/l11.png",
                                    "medium": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/clubbadges/html5/dark/27x27/l11.png",
                                    "large": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/clubbadges/html5/dark/34x34/l11.png"
                                },
                                "normal": {
                                    "small": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/clubbadges/html5/normal/24x24/l11.png",
                                    "medium": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/clubbadges/html5/normal/27x27/l11.png",
                                    "large": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/clubbadges/html5/normal/34x34/l11.png"
                                }
                            },
                            "abbrName": "Man Utd",
                            "id": 11,
                            "imgUrl": null,
                            "name": "Manchester United"
                        },
                        "headshot": {
                            "largeImgUrl": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/players/html5/134x134/41236.png",
                            "medImgUrl": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/players/html5/105x105/41236.png",
                            "smallImgUrl": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/players/html5/40x40/41236.png"
                        },
                        "specialImages": {
                            "largeTOTWImgUrl": null,
                            "medTOTWImgUrl": null
                        },
                        "position": "ST",
                        "composure": 91,
                        "playStyle": "Basic",
                        "playStyleId": null,
                        "height": 195,
                        "weight": 95,
                        "birthdate": "1981-10-03",
                        "age": 36,
                        "acceleration": 63,
                        "aggression": 84,
                        "agility": 81,
                        "balance": 41,
                        "ballcontrol": 88,
                        "foot": "Right",
                        "skillMoves": 4,
                        "crossing": 76,
                        "curve": 82,
                        "dribbling": 82,
                        "finishing": 87,
                        "freekickaccuracy": 82,
                        "gkdiving": 13,
                        "gkhandling": 15,
                        "gkkicking": 10,
                        "gkpositioning": 9,
                        "gkreflexes": 12,
                        "headingaccuracy": 80,
                        "interceptions": 20,
                        "jumping": 69,
                        "longpassing": 76,
                        "longshots": 85,
                        "marking": 15,
                        "penalties": 91,
                        "positioning": 86,
                        "potential": 88,
                        "reactions": 86,
                        "shortpassing": 84,
                        "shotpower": 91,
                        "slidingtackle": 27,
                        "sprintspeed": 67,
                        "standingtackle": 41,
                        "stamina": 71,
                        "strength": 88,
                        "vision": 83,
                        "volleys": 90,
                        "weakFoot": 4,
                        "traits": [
                            "Flair",
                            "Shooting - Long Shot Taker",
                            "Power Header",
                            "Technical Dribbler",
                            "Backs Into Player",
                            "Target Forward"
                        ],
                        "specialities": [
                            "Aerial Threat",
                            "Distance Shooter",
                            "Strength",
                            "Clinical Finisher",
                            "Complete Forward",
                            "Poacher"
                        ],
                        "atkWorkRate": "Medium",
                        "defWorkRate": "Low",
                        "playerType": "rare",
                        "attributes": [
                            {
                                "name": "fut.attribute.PAC",
                                "value": 65,
                                "chemistryBonus": [
                                    0
                                ]
                            },
                            {
                                "name": "fut.attribute.SHO",
                                "value": 88,
                                "chemistryBonus": [
                                    0
                                ]
                            },
                            {
                                "name": "fut.attribute.PAS",
                                "value": 81,
                                "chemistryBonus": [
                                    0
                                ]
                            },
                            {
                                "name": "fut.attribute.DRI",
                                "value": 82,
                                "chemistryBonus": [
                                    0
                                ]
                            },
                            {
                                "name": "fut.attribute.DEF",
                                "value": 32,
                                "chemistryBonus": [
                                    0
                                ]
                            },
                            {
                                "name": "fut.attribute.PHY",
                                "value": 82,
                                "chemistryBonus": [
                                    0
                                ]
                            }
                        ],
                        "name": "Ibrahimović",
                        "quality": "gold",
                        "color": "rare_gold",
                        "isGK": false,
                        "positionFull": "Striker",
                        "isSpecialType": false,
                        "contracts": null,
                        "fitness": null,
                        "rawAttributeChemistryBonus": null,
                        "isLoan": null,
                        "squadPosition": null,
                        "iconAttributes": null,
                        "itemType": "player",
                        "discardValue": null,
                        "id": "41236",
                        "modelName": "FUTPlayerItem",
                        "baseId": 41236,
                        "rating": 88
                    },
                    {
                        "isSelected": false,
                        "isActivated": false,
                        "commonName": "Thiago Silva",
                        "firstName": "Thiago Emiliano",
                        "headshotImgUrl": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/players/html5/134x134/164240.png",
                        "lastName": "da Silva",
                        "league": {
                            "abbrName": "FRA 1",
                            "id": 16,
                            "imgUrl": null,
                            "name": "Ligue 1 Conforama"
                        },
                        "nation": {
                            "imageUrls": {
                                "small": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/flags/html5/24x14/54.png",
                                "medium": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/flags/html5/30x19/54.png",
                                "large": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/flags/html5/40x25/54.png"
                            },
                            "abbrName": "Brazil",
                            "id": 54,
                            "imgUrl": null,
                            "name": "Brazil"
                        },
                        "club": {
                            "imageUrls": {
                                "dark": {
                                    "small": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/clubbadges/html5/dark/24x24/l73.png",
                                    "medium": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/clubbadges/html5/dark/27x27/l73.png",
                                    "large": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/clubbadges/html5/dark/34x34/l73.png"
                                },
                                "normal": {
                                    "small": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/clubbadges/html5/normal/24x24/l73.png",
                                    "medium": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/clubbadges/html5/normal/27x27/l73.png",
                                    "large": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/clubbadges/html5/normal/34x34/l73.png"
                                }
                            },
                            "abbrName": "Paris",
                            "id": 73,
                            "imgUrl": null,
                            "name": "Paris Saint-Germain"
                        },
                        "headshot": {
                            "largeImgUrl": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/players/html5/134x134/164240.png",
                            "medImgUrl": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/players/html5/105x105/164240.png",
                            "smallImgUrl": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/players/html5/40x40/164240.png"
                        },
                        "specialImages": {
                            "largeTOTWImgUrl": null,
                            "medTOTWImgUrl": null
                        },
                        "position": "CB",
                        "composure": 83,
                        "playStyle": "Basic",
                        "playStyleId": null,
                        "height": 183,
                        "weight": 79,
                        "birthdate": "1984-09-22",
                        "age": 33,
                        "acceleration": 70,
                        "aggression": 77,
                        "agility": 74,
                        "balance": 68,
                        "ballcontrol": 80,
                        "foot": "Right",
                        "skillMoves": 3,
                        "crossing": 60,
                        "curve": 61,
                        "dribbling": 68,
                        "finishing": 38,
                        "freekickaccuracy": 67,
                        "gkdiving": 9,
                        "gkhandling": 12,
                        "gkkicking": 5,
                        "gkpositioning": 9,
                        "gkreflexes": 10,
                        "headingaccuracy": 82,
                        "interceptions": 89,
                        "jumping": 93,
                        "longpassing": 81,
                        "longshots": 71,
                        "marking": 90,
                        "penalties": 71,
                        "positioning": 59,
                        "potential": 88,
                        "reactions": 84,
                        "shortpassing": 79,
                        "shotpower": 74,
                        "slidingtackle": 88,
                        "sprintspeed": 74,
                        "standingtackle": 89,
                        "stamina": 74,
                        "strength": 81,
                        "vision": 74,
                        "volleys": 63,
                        "weakFoot": 3,
                        "traits": [
                            "Leadership",
                            "Passing - Long Passer",
                            "Power Header"
                        ],
                        "specialities": [
                            "Tackler",
                            "Tactician"
                        ],
                        "atkWorkRate": "High",
                        "defWorkRate": "High",
                        "playerType": "rare",
                        "attributes": [
                            {
                                "name": "fut.attribute.PAC",
                                "value": 72,
                                "chemistryBonus": [
                                    0
                                ]
                            },
                            {
                                "name": "fut.attribute.SHO",
                                "value": 56,
                                "chemistryBonus": [
                                    0
                                ]
                            },
                            {
                                "name": "fut.attribute.PAS",
                                "value": 73,
                                "chemistryBonus": [
                                    0
                                ]
                            },
                            {
                                "name": "fut.attribute.DRI",
                                "value": 74,
                                "chemistryBonus": [
                                    0
                                ]
                            },
                            {
                                "name": "fut.attribute.DEF",
                                "value": 88,
                                "chemistryBonus": [
                                    0
                                ]
                            },
                            {
                                "name": "fut.attribute.PHY",
                                "value": 79,
                                "chemistryBonus": [
                                    0
                                ]
                            }
                        ],
                        "name": "Thiago Silva",
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
                        "id": "164240",
                        "modelName": "FUTPlayerItem",
                        "baseId": 164240,
                        "rating": 88
                    },
                    {
                        "isSelected": false,
                        "isActivated": false,
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
                    }
                ],
                field:{
                    c01:{
                        isPlayer: false,
                        idPlayer: ''
                    },
                    c02:{
                        isPlayer: false,
                        idPlayer: ''
                    },
                    c03:{
                        isPlayer: false,
                        idPlayer: ''
                    },
                    c04:{
                        isPlayer: false,
                        idPlayer: ''
                    },
                    c05:{
                        isPlayer: false,
                        idPlayer: ''
                    },
                    c06:{
                        isPlayer: false,
                        idPlayer: ''
                    },
                    c07:{
                        isPlayer: false,
                        idPlayer: ''
                    },


                    c11:{
                        "isPlayer": false
                    },
                    c12:{
                        "isPlayer": false
                    },
                    c13:{
                        "isPlayer": false
                    },
                    c14:{
                        "isPlayer": false
                    },
                    c15:{
                        "isPlayer": false
                    },
                    c16:{
                        "isPlayer": false
                    },
                    c17:{
                        "isPlayer": false
                    },


                    c21:{
                        "isPlayer": false
                    },
                    c22:{
                        "isPlayer": false
                    },
                    c23:{
                        "isPlayer": false
                    },
                    c24:{
                        "isPlayer": false
                    },
                    c25:{
                        "isPlayer": false
                    },
                    c26:{
                        "isPlayer": false
                    },
                    c27:{
                        "isPlayer": false
                    },


                    c31:{
                        "isPlayer": false
                    },
                    c32:{
                        "isPlayer": false
                    },
                    c33:{
                        "isPlayer": false
                    },
                    c34:{
                        "isPlayer": false
                    },
                    c35:{
                        "isPlayer": false
                    },
                    c36:{
                        "isPlayer": false
                    },
                    c37:{
                        "isPlayer": false
                    },
                    c38:{
                        "isPlayer": false
                    },


                    c41:{
                        "isPlayer": false
                    },
                    c42:{
                        "isPlayer": false
                    },
                    c43:{
                        "isPlayer": false
                    },
                    c44:{
                        "isPlayer": false
                    },
                    c45:{
                        "isPlayer": false
                    },
                    c46:{
                        "isPlayer": false
                    },
                    c47:{
                        "isPlayer": false
                    },


                    c51:{
                        "isPlayer": false
                    },
                    c52:{
                        "isPlayer": false
                    },
                    c53:{
                        "isPlayer": false
                    },
                    c54:{
                        "isPlayer": false
                    },
                    c55:{
                        "isPlayer": false
                    },
                    c56:{
                        "isPlayer": false
                    },
                    c57:{
                        "isPlayer": false
                    },


                    c61:{
                        "isPlayer": false
                    },
                    c62:{
                        "isPlayer": false
                    },
                    c63:{
                        "isPlayer": false
                    },
                    c64:{
                        "isPlayer": false
                    },
                    c65:{
                        "isPlayer": false
                    },
                    c66:{
                        "isPlayer": false
                    },
                    c67:{
                        "isPlayer": false
                    },

                },
                compo:{
                    GK:[

                    ],
                    DEF:[

                    ],
                    MID:[

                    ],
                    ATQ:[

                    ]
                }
            }
        },
        methods:{
            onItemTap(event){
                    console.log(event.index)
                    console.log(event.item.position)
                    this.resetSelected()
                    event.item.isSelected = true
            },
            setCurrentPage(page){
                this.currentPage = page
            },
            filterPlayers(col){
                switch(col) {
                    case "name":
                        this.players.sort(function(a, b){
                            if(a.name < b.name) return -1;
                            if(a.name > b.name) return 1;
                            return 0;
                        })
                        break;
                    case "atq":
                        this.players.sort(function(a, b){
                            if(a.finishing < b.finishing) return 1;
                            if(a.finishing > b.finishing) return -1;
                            return 0;
                        })
                        break;
                    case "def":
                        this.players.sort(function(a, b){
                            if(a.marking< b.marking) return 1;
                            if(a.marking> b.marking) return -1;
                            return 0;
                        })
                        break;
                    case "spe":
                        this.players.sort(function(a, b){
                            if(a.dribbling< b.dribbling) return 1;
                            if(a.dribbling> b.dribbling) return -1;
                            return 0;
                        })
                        break;
                    case "gk":
                        this.players.sort(function(a, b){
                            if(a.gkhandling< b.gkhandling) return 1;
                            if(a.gkhandling> b.gkhandling) return -1;
                            return 0;
                        })
                        break;
                    case "position":
                        this.players.sort(function(a, b){
                            if(a.position< b.position) return -1;
                            if(a.position> b.position) return 1;
                            return 0;
                        })
                        break;
                    default:
                        this.players.sort(function(a, b){
                            if(a.name < b.name) return -1;
                            if(a.name > b.name) return 1;
                            return 0;
                        })
                }
            },
            resetSelected(){
                let playersReseted = this.players.map((val,index,array)=>{
                    if( val.isSelected === true) val.isSelected = false
                })
            },
            addPlayerOnField(playerPosition){
               if(this.selectedPlayer.length === 0 ) return false // check if there is a selectedPlayer

                for (let cell in this.field){
                    if( this.field.hasOwnProperty( cell ) ) {
                        if (cell.toString() === playerPosition.toString()){
                            this.field[cell].isPlayer = true // show player image
                            this.field[cell].idPlayer = this.selectedPlayer.id // set id player on field
                            this.setActive(this.selectedPlayer[0].id)
                        }
                    }
                }
                this.resetSelected()
            },
            setActive(idPlayer){
                let newPlayerStatus = this.players.map((val,index,array)=>{
                    if( val.id === idPlayer) val.isActivated = true
                })
            }
        },
        computed:{
            selectedPlayer(){
                return this.players.filter(val=>val.isSelected === true)
            }
        }
    }
</script>

<style scoped>

    .menu{
        background-color: #DEDEDE;
        margin: 1% 3% 2% 2%;
        padding: 2px;
    }
    .menu-image{
        margin-top:3%;
    }
    .tactics{
        margin-top:1%;
    }
    .entete{
        color: white;
        margin-top: 1%;
        padding-top: 2px;
        padding-bottom: 2px;
    }
    .field{
        padding: 70px 70px 70px 70px;
    }
    .selected{
        background-color: lightgoldenrodyellow;
    }
    .not-activated{
        background-color: white;
    }
    .activated{
        background-color:lightskyblue;
    }
</style>