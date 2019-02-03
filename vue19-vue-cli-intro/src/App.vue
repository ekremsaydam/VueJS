<template>
  <div>
    <h1>Sunucu Durumu : {{status}}</h1>
    <lamp-component></lamp-component>
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

