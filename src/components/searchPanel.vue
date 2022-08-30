<template>
<div style='display: block; width: 100%; height: 100px'>
    <div class='headPanel'>
        <div class='headpanel-content'>
            <div class='input-panel'>
                <input class='input' placeholder='Поиск по всем категориям'/>
            </div>
            <div class='inputPanel__filters' @mouseenter='mouseOver'>
                <div class='filters-container' ref='filters'>
                    <div class='inputPanel__filter' v-for='button of buttonTitles' :key='button.genre'> 
                        <div :class='icons(button.genre)' style='display: flex;'></div>
                        <div style='display: flex; flex: 2; justify-content: center;'>{{button.title}}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</div>
</template>

<script>
import Scroller from '@/plugins/wheeller.js'

export default {
    name: 'SearchPanel',
    props: ['buttonTitles'],
    data() {
        return {
            prevScrollpos: 0,
        }
    },
    created() {
        window.addEventListener('scroll', () => {
            let vm = this;
            let filtersPanel = vm.$refs.filters
            var currentScrollPos = window.pageYOffset;
            if (currentScrollPos > vm.prevScrollpos) {
                filtersPanel.style.display = 'none';
            } else {
                filtersPanel.style.display = 'flex';
            }
            vm.prevScrollpos = currentScrollPos;
        })
    },
    methods: {
        mouseOver(event) {
            let target = event.target
            target.addEventListener('wheel', this.scroller)
        },

        icons(arg) {
            return "_icon-" + arg
        }
    },

    computed: {
        scroller() {
            let child = document.querySelector('.inputPanel__filter')
            let parent = this.$refs.filters
            return new Scroller(this, child, parent)
        },
    }
}

</script>

<style lang='sass' scoped>
.headPanel
    z-index: 9999
    width: 100%
    background-color: #143861
    position: fixed
    display: flex
    justify-content: center
    align-items: center
    padding-bottom: 0
    box-sizing: border-box
    margin: 0;
    background-color: #2c3e50

.headpanel-content
    display: relative
    width: 60%;
    display: block;
    @media screen and (max-width: 1368px)
        width: 100%; 

.input-panel
    padding: 20px 0px

.input
    text-align: left
    width: 100%
    padding: 10px 10px
    border-radius: 10px
    border: none
    box-sizing: border-box
    
.inputPanel__filters
    width: 100%
    text-align: left
    color: white;
    overflow-x: auto
    padding-bottom: 20px
    &::-webkit-scrollbar
        display: none
    @media screen and (max-width: 1368px)
        width: 100%;

.filters-container
    display: flex
    transition: transform 250ms

.inputPanel__filter
    margin: 0px 5px
    border-radius: 10px
    font:
        size: 14px
        family: Arial 
    display: flex
    justify-content: space-evently
    align-items: center
    flex: 1
    padding: 5px;
    border: .5px solid white;
    box-sizing: border-box
    &:hover
        cursor: pointer
        background: #1bead9
        border-color: rgba(0, 0, 0, 0)
        color: white
    
    

    
</style>
