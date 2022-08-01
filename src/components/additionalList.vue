<template>
<div style='width: 100%;'>
    <div class='title'>{{genre.title}}</div>
    <div class='horisontalCard' :ref='genre.genre' @mouseenter='mouseOver' @mouseleave='mouseOut' @scroll='scrollX'>
            <div v-if='reactions' class='horisontalList' >
                <div v-for='reaction of reactions' :key='reaction.kinopoiskId' style='display: block; margin: 0 5px; border-radius: 10px; width: 100%'  >
                    <div style='color: black'> {{reaction.original}} </div>
                    <div :style="{ backgroundImage: `url(${reaction.posterUrl})` }" class='imgContainer'></div>
                    <div class='film_information'>
                        <div class='film_info'> Название: <br>{{reaction.nameOriginal}} </div>
                        <div class='film_info'> Рейтинг IMDB: {{reaction.ratingImdb}} </div>
                        <div class='film_info'> Рейтинг KP: {{reaction.ratingKinopoisk}} </div>
                        <div class='film_info'> Год выпуска: {{reaction.year}} </div>
                    </div>
                </div>
            </div>
            <div v-else>
                Zdes nichego net
            </div> 
    </div>
</div>
</template>

<script>
// import { mapActions, mapGetters} from 'vuex'
import data from '@/data.js'


export default {
    name: 'additionalList',
    props: {
        genre: {
            type: Object
        },
    },
    methods: {
        // ...mapActions([
        //     'loadFilmsInfo'
        // ]),

        mouseOver(event) {
            let target = event.target
            target.addEventListener('wheel', function(e) {
            
                let delta = e.deltaY
               target.scrollLeft = target.scrollLeft + delta/2
               e.preventDefault ? e.preventDefault() : (e.returnValue = false);
            })
        },
        
    },
    created() {
        // this.$store.dispatch('loadFilmsInfo', this.genre);
        // this.loadFilmsInfo(this.genre)
    },
    computed: {
        // ...mapGetters([
        //     'getFilmsInfo'
        // ]),
       reactions() {
            // let vm = this
            // let store = vm.$store.state[vm.genre.genre]
            // if(store) {
            //     return store.items
            // } else {
            //     console.log('nothing')
            //     return 'nothing'
            // }
            return data.items
    }  
    }
}
</script>

<style lang='sass' scoped>

.title
    font-weight: bold
    font-size: 32px
    background: black
    color: white
    text-align: left
    padding: 50px 20px 20px 20px 

.horisontalCard
    overflow-x: auto
    border-radius: 10px
    width: 100%

.horisontalCard::-webkit-scrollbar
  display: none;

.horisontalList
    display: flex
    width: 100%
    flex: 1
    
.imgContainer
    width: 300px
    height: 400px
    background-size: 100% 100%
    background-repeat: no-repeat
    border-radius: 10px
    @media screen and (max-width: 400px) 
        padding: 0;
        margin: 0;
        display: flex
        width: 200px
        height: 300px
        flex: 1
    
    @media screen and (max-width: 300px) 
        padding: 0;
        margin: 0;
        width: 100px
        height: 200px
        display: flex
        flex: 1

.film_information
    color: white
    font-weight: bold
    text-align: left
    padding: 20px 0
    display: flex
    flex-direction: column
   
.film_info
    margin-bottom: 20px
    flex: 1  

    
    
</style>
