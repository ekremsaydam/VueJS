<template>
  <div>
    <p>Lamba Durumu : {{ status }}</p>
    <hr>
    <button @click="lampOpen">Lambayı Aç</button>
  </div>
</template>
<script>
  export default {
    data: function() {
      return {
        status:'Pasif'
      }
    },
    methods: {
      lampOpen: function() {
        this.status = 'Açık'
      }
    }
  }
</script>
