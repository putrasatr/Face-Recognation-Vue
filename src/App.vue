<template>
  <div id="app">
    <TopBar/>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #a066ec;
    }
  }
}
</style>

<script lang="ts">
import Vue from "vue"
import TopBar from "../src/components/TopBar.vue"

export default Vue.extend({
  name : "App",
  components:{
    TopBar
  },
})
</script>
