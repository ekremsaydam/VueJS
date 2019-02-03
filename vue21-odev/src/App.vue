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
import Header from "./components/Common/Header";
import Servers from "./components/server/Servers";
import ServerStatus from "./components/server/ServerStatus";
import Footer from "./components/Common/Footer";

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
