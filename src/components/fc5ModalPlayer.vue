<template>
    <StackLayout height="10%" width="100%" backgroundColor="grey" top="10" left="10" @click.self="$emit('close')">
        <Label :text="player.rating"></Label>
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
              graphIsShown: true
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
                console.log("hide graph and show contract proposition")
            }
        }
    }
</script>

<style lang="scss" scoped>
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
