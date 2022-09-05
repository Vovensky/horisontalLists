<template>
<div style='display: block; width: 100%; height: 100px'>
    <div class='headPanel'>
        <div class='headpanel-content'>
            <div class='input-panel'>
                <input class='input' placeholder='Поиск по всем категориям'/>
            </div>
            <div class='inputPanel__filters' @mouseenter='mouseOver'>
                <div class='filters-container' ref='filters'>
                    <div class='inputPanel__filter' v-for='button of buttonTitles' :key='button.genre' style='display: flex'> 
                            <div :class='icons(button.genre)' style='flex: 1'></div>
                            <div style='flex: 1; text-align: center'>{{button.title}}</div>
                            <div style='flex: 1'></div>
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
            let parent = this.$refs.filters
            let child = document.querySelector('.inputPanel__filter')
            return new Scroller(this, child, parent)
        },
    }
}

</script>
