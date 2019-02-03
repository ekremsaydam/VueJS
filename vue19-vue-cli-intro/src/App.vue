<template>
  <div>
    <h1>Sunucu Durumu : {{status}}</h1>
    <lamb-component></lamb-component>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      status: "Pasif"
    };
  }
};
</script>

