<template>
  <mainList/>
</template>

<script>
import mainList from '@/components/mainList.vue'

export default {
  name: 'App',
  components: {
    mainList
  },
  created() {
    
  },
  methods: {

  }
}
</script>

<style lang='scss'>
body {
  width: 100%;
  height: 100%;
  background: black
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
}

* {
  padding: 0;
  margin: 0;
}

body::-webkit-scrollbar {
    width: 2px;
    height: 8px ;
    background-color: black;
}

body::-webkit-scrollbar-thumb {
    background-color: #843465;
    border-radius: 9em;
    box-shadow: inset 1px 1px 10px black;
}

body::-webkit-scrollbar-thumb:hover {
    background-color: #253861;
}



</style>
