<template>

<div class='horisontal-list'>
    <div class='title'>
        <span>{{genre.title}}</span>
    </div>
    <div class='horisontal-list-content' ref='listContent' @mouseenter='mouseOver'
    v-if='films'>
        <div class='film-gallery' ref='gallery'>
            <div class='film-gallery_card' v-for='film of films' :key='film'>
                <div class='filmCard-imageWrapper'>
                    <img :src='film.posterUrl'/>
                </div>
                <div class='film-gallery_filmInformation'>
                    <div class='filmCard-filmInformation-film_info filmName'> Название: {{film.nameOriginal}} </div>
                    <div class='filmCard-filmInformation-film_info'> Рейтинг IMDB: {{film.ratingImdb}} </div>
                    <div class='filmCard-filmInformation-film_info'> Рейтинг KP: {{film.ratingKinopoisk}} </div>
                    <div class='filmCard-filmInformation-film_info'> Год выпуска: {{film.year}} </div>
                </div>
            </div>
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
            let vm = this
            let position = 0;
            let target = event.target
            target.addEventListener('wheel', function(e) {
               let filmCardOffsetWidth = document.querySelector('.film-gallery_card').offsetWidth;
               let filmGallery = vm.$refs.gallery.offsetWidth
               let filmList = vm.$refs.listContent.offsetWidth
               if(e.deltaY > 0) {
                position -= filmCardOffsetWidth + 20
                position = Math.max(-(filmGallery-filmList), position)
                vm.$refs.gallery.style.transform = `translateX(${position + 'px'})`
               } else {
                position += filmCardOffsetWidth + 20
                position = Math.min( 0, position)
                vm.$refs.gallery.style.transform = `translateX(${position + 'px'})`
               }
               e.preventDefault ? e.preventDefault() : (e.returnValue = false);
            })
        },
        
    },
    created() {
        // this.$store.dispatch('loadFilmsInfo', this.genre);
        // this.loadFilmsInfo(this.genre
    },
    computed: {
        // ...mapGetters([
        //     'getFilmsInfo'
        // ]),
       films() {
            // let vm = this
            // let store = vm.$store.state[vm.genre.genre]
            // if(store) {
            //     return store.items
            // } else {
            //     console.log('nothing')
            //     return 'nothing'
            // }
            return data.items
        },
    }
}
</script>

<style lang='sass' scoped>
.horisontal-list
    display: block;
    position: relative;
    width: 100%;
    z-index: 0;
    overflow-x: hidden

    .title
        color: white
        text-align: left 
        font:
            weight: bold
            size: 32px
        padding: 20px 0px

    .horisontal-list-content
        width: 100%
        box-sizing: border-box
        display: flex
        text-align: left
        flex-wrap: nowrap
        position: relative
        overflow-x: auto
        &::-webkit-scrollbar
            display: none

    .film-gallery
        display: flex
        margin-left: 0
        transition: transform 250ms
        
    .film-gallery_card
        position: relative
        display: inline-block
        box-sizing: border-box
        padding: 5px
        margin: 10px
        
    .filmCard-imageWrapper
        width: calc(14vw - 30px)
        height: calc(14vw - 30px)
        max-height: 400px
        max-width: 400px
        display: block
        position: relative
        @media screen and (max-width: 1368px)
            width: calc(14vw - 15px*2)
            height: calc(14vw - 15px*2)
        @media screen and (max-width: 1200px)
            width: calc(25vw - 15px*2)
            height: calc(25vw - 15px*2)
        @media screen and (max-width: 768px)
            width: calc(50vw - 15px*2)
            height: calc(50vw - 15px*2)

    .filmCard-imageWrapper img
        width: 100%
        height: 100%
        display: block

    .film-gallery_filmInformation
        display: block
        color: white
        font:
            weight: normal
            size: 14px
            family: Arial
        text-align: left
        @media screen and (max-width: 400px)
            font-size: 5vw

    .filmCard-filmInformation-film_info
        padding: 10px 0px


.filmName::-webkit-scrollbar-thumb
    background-color: #843465;
    border-radius: 9em;
    box-shadow: inset 1px 1px 10px #f3faf7;

.filmName::-webkit-scrollbar-thumb:hover
    background-color: #253861;



    
    
</style>
