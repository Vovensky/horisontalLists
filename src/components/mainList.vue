<template>
    <searchPanel :buttonTitles='genres'/>
    <div class='container_mainList' @scroll='showFilters'>
        <additionalList v-for='genre of genres' :key='genre.mask' :genre='genre' />
    </div>
</template>

<script>
import additionalList from './additionalList'
import searchPanel from './searchPanel'

export default {
    name: 'mainList',
    components: {
        additionalList,
        searchPanel
    },
    data() {
        return {
            genres: [
                {
                    mask: 17,
                    genre: 'horror',
                    title:'Ужасы', },
                {
                    genre: 'Criminal',
                    mask: 3,
                    title:'Криминал', },
                {
                    genre: 'Melodramma',
                    mask: 4,
                    title:'Мелодраммы', },
                {
                    genre: 'Thriller',
                    mask: 1,
                    title: 'Триллеры'}, 
                {
                    title: 'Боевики',
                    mask: 11,
                    genre: 'Boeviki',},
                {
                    title: 'Комедия',
                    mask: 13,
                    genre: 'Comedy',},
                {
                    genre:'Dramatic',
                    mask: 2,
                    title: 'Драмы'}
                ],
        }
    },
    methods: {
    },
    created() {
    }   
}
</script>

<style lang='scss'>
.container_mainList {
    border: 1px solid black;
    width: 60vw;
    height: 100%;
    margin: 0 auto;
    background-color: black;
    padding: 50px;
    box-sizing: border-box;
    overflow-y: auto;
    border: none;

    @media screen and (max-width: 1200px) {
        width: 100vw; 
        margin: 0;
        padding: 0;
    }
}



</style>
