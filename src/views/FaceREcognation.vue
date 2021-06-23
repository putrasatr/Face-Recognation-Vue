<template>
  <div class="container">
    <div class="home">
      <img id="Vue-logo" alt="Vue logo" src="../assets/logo.png" />
      <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import HelloWorld from "../components/HelloWorld.vue"; // @ is an alias to /src
import TopBar from "../components/TopBar.vue";

export default Vue.extend({
  name: "Home",
  components: {
    TopBar,
    HelloWorld,
  },
});
</script>

<style>
#Vue-logo {
  border-radius: 50%;
  width: 200px;
  height: 200px;
  animation-name: spin;
  animation-duration: 10000ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
