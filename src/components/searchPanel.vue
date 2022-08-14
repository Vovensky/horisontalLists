<template>
<div style='display: block; width: 100%; height: 100px'>
    <div class='headPanel'>
        <div class='inputPanel'>
            <input class='input' placeholder='Поиск по всем категориям'/>
            <div ref='filters' class='inputPanel__filters' @mouseenter='mouseOver'>
                <div class='inputPanel__filter' v-for='obj of buttonTitles' :key='obj.genre'> {{obj.title}} </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
// import { defineComponent } from '@vue/composition-api'

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
            target.addEventListener('wheel', function(e) {
                let delta = e.deltaY
                target.scrollLeft = target.scrollLeft + delta
                e.preventDefault ? e.preventDefault() : (e.returnValue = false);
            })
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
    padding: 20px
    padding-bottom: 0
    box-sizing: border-box
    margin: 0
    @media screen and (max-width: 1000px)
        width: 100%; 
        padding: 0;
        margin: 0;

.inputPanel
    display: relative
    width: 60%;
    padding-bottom: 30px
    display: block;
    @media screen and (max-width: 1000px)
        width: 100%; 

.input
    text-align: left
    width: 90%
    padding: 10px 10px
    border-radius: 10px
    border: none
    
.inputPanel__filters
    width: 90%
    margin-left: auto
    margin-right: auto
    display: flex;
    flex: 1
    justify-content: left;
    align-items: left;
    color: white
    margin-top: 20px
    overflow-x: auto
    @media screen and (max-width: 1000px)
        width: 100%; 

.inputPanel__filters::-webkit-scrollbar
    display: none;

.inputPanel__filter
    margin: 0px 5px
    margin-bottom: 20px
    border-radius: 10px
    display: flex
    flex: 1
    padding: 5px;
    justify-content: center;
    align-items: center;
    border: .5px solid white;
    box-sizing: border-box
    &:hover
        cursor: pointer
        background: #1bead9
        border-color: rgba(0, 0, 0, 0)
        color: white
    
    

    
</style>
