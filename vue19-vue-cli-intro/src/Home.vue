<template>
  <div>
    <p>Lamba Durumu : {{ status }}</p>
    <hr>
    <button @click="lambOpen">Lambayı Aç</button>
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
      lambOpen: function() {
        this.status = 'Açık'
      }
    }
  }
</script>
