<template>
  <div id="app">
    <router-link :to="{name :'test1'}" style="font-size:20px">test1</router-link>
    <span>{{`         `}}</span>
    <router-link :to="{name :'test2'}" style="font-size:20px">test2</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App",
  mounted() {
    function checkIE() {
      return (
        "-ms-scroll-limit" in document.documentElement.style &&
        "-ms-ime-align" in document.documentElement.style
      );
    }
    if (checkIE()) {
      window.addEventListener(
        "hashchange",
        () => {
          var currentPath = window.location.hash.slice(1);
          if (this.$route.path !== currentPath) {
            this.$router.push(currentPath);
          }
        },
        false
      );
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
