<template>
  <div>
    <lamp-status v-for="lamp in 5"></lamp-status>
  </div>
</template>
<script>
import LambStatus from "./LambStatus";
export default {
  components: {
    "lamp-status": LambStatus
  }
};
</script>