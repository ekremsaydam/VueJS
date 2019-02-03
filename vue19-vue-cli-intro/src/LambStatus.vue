<template>
  <div>
    <p>Lamba Durumu : {{ status }}</p>
    <button @click="lampOpen">Lambayı Aç</button>
    <hr>
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
