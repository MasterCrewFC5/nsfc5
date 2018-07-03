<template>
    <StackLayout width="80%">
        <WrapLayout oriention="horizontal" width="80%" horizontalAlignment="center" class="modal-header">
            <Label :text="player.firstName + ' ' + player.lastName + '      '" class="bold" width="50%"/>
            <Label :text="player.rating" class ='bold' width="20%"/>
            <Image :src="player.nation.imageUrls.small" stretch="none" class="nation" width="20%"/>
        </WrapLayout>

        <WrapLayout oriention="horizontal" width="80%" horizontalAlignment="center" class="modal-content">
            <Label :text="player.age + ' Years old'" width="25%"/>
            <Label :text="player.weight + ' Kg'"  width="25%"/>
            <Label :text="player.height + ' Cm'" width="25%"/>
            <Label :text="player.foot + ' Foot'" width="25%"/>
        </WrapLayout>


        <Button text="Offer contract" class="button" @tap="contractIsShown = !contractIsShown" width="50%" horizontalAlignment="center"/>

        <transition name="fade">
            <WrapLayout v-if="contractIsShown" width="100%" horizontalAlignment="center" orientation="vertical" class="modal-contract">

                <WrapLayout width="100%" horizontalAlignment="center" orientation="horizontal">
                    <Label text="Salary" class="bold" width="40%"/>
                    <TextField :text="textFieldValue" hint="Salary" v-model="contractForm.salary" class="text-input" width="50%"/>
                </WrapLayout>

                <WrapLayout width="100%" horizontalAlignment="center" orientation="horizontal">
                    <Label text="Duration (months)" class="bold" width="40%"/>
                    <TextField :text="textFieldValue" hint="Duration" v-model="contractForm.duration" class="text-input" width="50%" />
                </WrapLayout>

                <Button text="Buy Player" class="button buy-button" @tap="offerContract" horizontalAlignment="center" width="30%"/>
            </WrapLayout>

        </transition>

    </StackLayout>


</template>

<script>

    //import fc5svggraph from './fc5SvgGraph'
    //import fc5playerposition from './fc5PlayerPosition'

    export default {
        name: "fc5modalplayer",
        components: {},
        props: ['player'],
        data(){
          return{
              graphIsShown: true,
              contractIsShown: false,
              contractForm:{
                  salary: 0,
                  duration: 0
              }
          }
        },
        computed: {
            stats: function () {
                let gkStats = [
                    { label: 'Diving', value: this.player.gkdiving },
                    { label: 'Handling', value: this.player.gkhandling },
                    { label: 'Kicking', value: this.player.gkkicking },
                    { label: 'Positionning', value: this.player.gkpositioning },
                    { label: 'Reflexes', value: this.player.gkreflexes },
                ]
                let playerStats = [
                    { label: 'Shoot', value: (this.player.finishing + this.player.shotpower + this.player.longshots + this.player.volleys) / 4 },
                    { label: 'Speed', value: (this.player.sprintspeed + this.player.acceleration) / 2 },
                    { label: 'Dribble', value: (this.player.dribbling + this.player.ballcontrol + this.player.agility ) / 3 },
                    { label: 'Passing', value: (this.player.shortpassing + this.player.longpassing + this.player.crossing) / 3 },
                    { label: 'Defense', value: (this.player.interceptions + this.player.marking + this.player.slidingtackle + this.player.standingtackle ) / 4 },
                    { label: 'Physicality', value: (this.player.stamina + this.player.strength + this.player.jumping) /3 },
                ]

                if(this.player.isGK === true ) return gkStats;

                return playerStats;
            }
        },
        methods:{
            openContract(){
                this.contractIsShown = true
            },
            closeContract(){
                this.contractIsShown = false
            },
            offerContract(){
                console.log("contract salary and duration: " + this.contractForm.salary+ ' ' +this.contractForm.duration + ' months' + this.player.name )
            }
        }
    }
</script>

<style lang="scss" scoped>

    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }



    .button{
        background: #BBB;
        margin-top: 5px;
        margin-bottom: 5px;
    }

    .text-input{
        background-color: white;
        height: 110px;
    }

    .buy-button{
        margin-top: 5px;
    }
    .modal-header{
        margin: 10px 0px 10px 0px;
        text-align:center;
    }
    .modal-content{
        margin: 10px 0px 10px 0px;
        text-align:center;
    }
    .modal-contract{
        margin: 10px 0px 10px 0px;
    }

    .modal-mask {
        position: fixed;
        z-index: 9998;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .5);
        display: table;
        transition: opacity .3s ease;
    }

    .modal-wrapper {
        display: table-cell;
        vertical-align: middle;
    }

    .modal-container {
        width: 92%;
        margin: 0px auto;
        background-color: #fff;
        box-shadow: 2px 0px 2px rgba(0, 0, 0, .24), 0 0px 2px rgba(0, 0, 0, .12)  ;
        transition: all .3s ease;
        font-family: Roboto;
        padding: 10px 5px 10px 5px;

        .left{
            flex-grow: 1;
        }
        .right{
            flex-grow: 2;
        }
        .modal-header h3 {
            margin-top: 0;
            color: #595555;
        }

        .modal-body {
            margin: 20px 0;
        }

        .line{
            justify-content: space-evenly;
            padding: 5px 0px 5px 0px;
        }
        .flag{
            max-height: 24px;
        }

        .modal-default-button {
            float: right;
        }
    }



    /*
     * The following styles are auto-applied to elements with
     * transition="modal" when their visibility is toggled
     * by Vue.js.
     *
     * You can easily play with the modal transition by editing
     * these styles.
     */

    .modal-enter {
        opacity: 0;
    }

    .modal-leave-active {
        opacity: 0;
    }

    .modal-enter .modal-container,
    .modal-leave-active .modal-container {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }
</style>
