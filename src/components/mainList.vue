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
                    title: 'Комедии',
                    mask: 13,
                    genre: 'Comedy',},
                {
                    genre:'Dramatic',
                    mask: 2,
                    title: 'Драмы'}
                ],
        }
    },
}
</script>