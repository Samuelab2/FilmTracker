<template>
  <main id="app">
    <MHeader></MHeader>
    <router-view />
    <MFooter />
  </main>
</template>

<script>
import MHeader from "@/components/MHeader";
import MFooter from "@/components/MFooter";

export default {
  components: { MHeader, MFooter }
};
</script>

<style lang="scss">
html,
body {
  padding: 0;
  margin: 0;
  font-family: Helvetica, sans-serif;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
