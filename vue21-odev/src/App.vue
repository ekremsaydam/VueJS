<template>
  <div class="container">
    <app-header></app-header>
    <hr>
    <div class="row">
      <app-servers></app-servers>
      <app-server-status></app-server-status>
    </div>
    <hr>
    <app-footer></app-footer>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import Header from "./Header";
import Servers from "./Servers";
import ServerStatus from "./ServerStatus";
import Footer from "./Footer";

export default {
  name: "app",
  components: {
    appHeader: Header,
    appServers: Servers,
    appServerStatus: ServerStatus,
    appFooter: Footer
  }
};
</script>

<style>

</style>
