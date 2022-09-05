<template>

<div class='horisontal-list'>
    <div class='title'>
        <span>{{genre.title}}</span>
    </div>
    <div class='horisontal-list-content' ref='listContent' @mouseenter='mouseOver' @mouseleave='mouseLeave'
    v-if='films'>
        <div class='film-gallery' :id='genre.mask' ref='gallery'>
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
import Scroller from '@/plugins/wheeller.js'

export default {
    name: 'additionalList',
    props: {
        genre: {
            type: Object
        },
    },
    data() {
        return {
            poistion: 0,
        }
    },
    methods: {
        // ...mapActions([
        //     'loadFilmsInfo'
        // ]),
        mouseOver(event) {
            let target = event.target;
            target.addEventListener('wheel', this.scroller)
        },
        mouseLeave(event) {
            event.target.removeEventListener('wheel', this.scroller)
        },
    },
    created() {
        // this.$store.dispatch('loadFilmsInfo', this.genre);
        // this.loadFilmsInfo(this.genre
        this.actGenre = this.genre.genre
        
    },
    computed: {
        // ...mapGetters([
        //     'getFilmsInfo'
        // ]),

        scroller() {
            let parent = document.getElementById(`${this.genre.mask}`)
            let child = parent.querySelector('.film-gallery_card')
            return new Scroller(this, child, parent)
        },
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