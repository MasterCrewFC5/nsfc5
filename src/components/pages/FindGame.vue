<template>
    <Page class="page" actionBarHidden="true">

        <StackLayout>
            <fc5topbar></fc5topbar>

            <Image src="~/findgame/bgimg.png" stretch="none"/>

            <WrapLayout class="findgame" orientation="vertical" horizontalAlignment="center">
                <Image src="~/findgame/ribbon.png" stretch="none" horizontalAlignment="center"/>
                <Label class="title" text="Games left until end of season :"/>
                <Label class="value big" :text="gamesLeft"/>
                <Label class="title" text="Points needed to rank up :"/>
                <Label class="value big" :text="neededPoints"/>
                <Label class="title " text="Current points :"/>
                <Label class="value big" :text="currentPoints"/>

                <WrapLayout class="bonus" v-for="(bonus, index) in bonuses" orientation="vertical">
                    <GridLayout columns="auto,*" rows="auto,auto" >
                        <Image col="0" row="0"  :src=" bonus.isActivated === true ? bonus.activeImg : bonus.inactiveImg"   stretch="none" @tap="activateBonus(index)" horizontalAlignment="center"/>
                        <Label col="1" row="0" class="bold" :text="bonus.description" />
                        <Label col="0" row="1" class="thin" :text="bonus.available + ' Available'" />

                    </GridLayout>
                </WrapLayout>


                <Button text="START" class="start" @tap="searchGame" />
            </WrapLayout>


        </StackLayout>


    </Page>
</template>

<script>

    import fc5topbar from './../fc5Topbar.vue'
    import router from './../../router/index'


    export default {
        router,
        name: "findgame",
        components: {fc5topbar},
        data(){
            return{
                currentPoints: 0,
                neededPoints: 45,
                gamesLeft:38,
                bonuses:[
                    {
                        id:1,
                        activeImg:'~/findgame/bonus/referee1.png',
                        inactiveImg:'~/findgame/bonus/referee0.png',
                        isActivated: false,
                        available: 0,
                        name: "Referee",
                        description: "50 % more fouls for your team"
                    },
                    {
                        id:2,
                        activeImg:'~/findgame/bonus/syringe1.png',
                        inactiveImg:'~/findgame/bonus/syringe0.png',
                        isActivated: false,
                        available: 0,
                        name: "Syringe",
                        description: "Your team is 10% faster"
                    },
                    {
                        id:3,
                        activeImg:'~/findgame/bonus/eye1.png',
                        inactiveImg:'~/findgame/bonus/eye0.png',
                        isActivated: false,
                        available: 10,
                        name: "Eye",
                        description: "Your team is 10% more accurate"
                    },
                    {
                        id:4,
                        activeImg:'~/findgame/bonus/voodoo1.png',
                        inactiveImg:'~/findgame/bonus/voodoo0.png',
                        isActivated: false,
                        available: 0,
                        name: "voodoo",
                        description: "Enemy team is 10% more likely to miss"
                    }
                ]
            }
        },
        methods:{
            searchGame(){
                confirm('Do you want start a game ?')
                    .then(result => {
                        if(result) this.$router.push('waitroom');
                    });
            },
            activateBonus(index){
                if ( this.bonuses[index].available === 0 ){ //if bonus is not available
                    confirm({
                        title: "No bonus available",
                        message: "Get some in the store",
                        okButtonText: "Go to Store",
                        cancelButtonText: "Cancel"
                    }).then(result => {
                        console.log(result);
                         if (result === true)router.push('/search')

                    });
                }else{
                    this.bonuses[index].isActivated = !this.bonuses[index].isActivated
                    this.bonuses[index].isActivated === true ? this.reduceAmountAvailable(index) : this.upAmountAvailable(index);
                }
            },
            reduceAmountAvailable( index ){
                this.bonuses[index].available = this.bonuses[index].available - 1
            },
            upAmountAvailable( index ){
                this.bonuses[index].available = this.bonuses[index].available + 1
            }
        }
    }
</script>

<style scoped>
    .findgame{
        margin-top: 3%;
        padding: 5% 25% 10% 25%;
        background-color: #F0F0F0;
        text-align: center;
    }
    .title{
        font-size: 15px;
    }
    .big{
        font-size: 32px;
    }
    .bonus{
        padding:5%;
        text-align: left;
    }
    .start{
        width:80%;
        background-color: #2D9CDB;
        color: white;
        font-size: 32px;
    }

</style>
