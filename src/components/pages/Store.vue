<template>
    <Page class="page" actionBarHidden="true">

        <StackLayout>
            <fc5topbar></fc5topbar>


            <WrapLayout class="store" orientation="vertical" horizontalAlignment="center">
                <Image src="~/store/ribbon.png" stretch="none" horizontalAlignment="center"/>

                <ListView for="item in storeItems"
                          class="storeitems"
                          @itemTap="onItemTap">
                    <v-template>
                        <!-- Shows the list item label in the default color and stye. -->
                        <GridLayout columns="*,auto,*" rows="auto,auto" class="card">
                            <Image col="0" colspan="2" row="0" :src="item.image" stretch="none" verticalAlignment="center"/>
                            <Label col="1" row="0" :text="item.title" horizontalAlignment="center"  class="bold"/>
                            <TextView editable="false" col="1" row="1" :text="item.description" class="description" />
                            <WrapLayout col="2" row="0" colspan="2" verticalAlignment="center" horizontalAlignment="center">
                                <Label  :text="item.value"  />
                                <Image  src="~/store/smallCoin.png" stretch="none" />
                            </WrapLayout>
                        </GridLayout>
                    </v-template>
                </ListView>

            </WrapLayout>
        </StackLayout>
    </Page>
</template>

<script>

    import fc5topbar from './../fc5Topbar.vue'
    import router from './../../router/index'


    export default {
        router,
        name: "store",
        components: {fc5topbar},
        data(){
            return{
                "storeItems": [
                    {
                        "id": 1,
                        "title":"Premium mode",
                        "value": 2.99,
                        "fc5buyable": false,
                        "description": "Delete all commercials from the app for ever",
                        "image": "~/store/coin1.png"
                    },
                    {
                        "id": 2,
                        "title":"Buy 1 referee",
                        "value": 100,
                        "fc5buyable": true,
                        "description": "The referee is 30% more likely to signal a foul for your side",
                        "image": "~/store/coin1.png"
                    },
                    {
                        "id": 3,
                        "title":"Buy 10 referee",
                        "value": 1000,
                        "fc5buyable": true,
                        "description": "Gives you 1 free referee. so smooth",
                        "image": "~/store/coin1.png"
                    },
                    {
                        "id": 4,
                        "title":"Buy 100 referee",
                        "value": 10000,
                        "fc5buyable": true,
                        "description": "Gives you 10 free referees. gimme all the referees",
                        "image": "~/store/coin1.png"
                    },
                    {
                        "id": 5,
                        "title":"Buy 300",
                        "value": 0.99,
                        "fc5buyable": false,
                        "description": "Buy 300 FC5 Coin",
                        "image": "~/store/coin1.png"
                    },
                    {
                        "id": 6,
                        "title":"Buy 1300",
                        "value": 3.99,
                        "fc5buyable": false,
                        "description": "Buy 1300 FC5 Coin",
                        "image": "~/store/coin1.png"
                    },
                    {
                        "id": 7,
                        "title":"Ronaldo's Haircut",
                        "value": 100,
                        "fc5buyable": true,
                        "description": "All your player gets Ronaldo's haircut which gives you 10% more swagger score for the next 10 games",
                        "image": "~/store/coin1.png"
                    },
                    {
                        "id": 8,
                        "title":"Messi's touch",
                        "value": 100,
                        "fc5buyable": true,
                        "description": "You team gain Messi's touch which gives it 10% dribbling skill upgrade for the next 10 games",
                        "image": "~/store/coin1.png"
                    }
                ]
            }
        },
        methods:{
            onItemTap(){
                confirm({
                    title: "Buy it",
                    message: "Buyyyy",
                    okButtonText: "Buy",
                    cancelButtonText: "Cancel"
                }).then(result => {
                    console.log(result);
                });
            }
        }
    }
</script>

<style scoped>
    .card{
        background-color: #F0F0F0;
        /*margin: 2% 0% 2% 0%;*/
        padding: 2% 2% 2% 2%;
    }
    .description{
        width:50%;
        word-wrap: break-word;
        background-color: #F0F0F0;
    }
    .storeitems{
    }
</style>