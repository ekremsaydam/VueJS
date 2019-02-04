<template>
  <div class="wcol-md-6">
    <h3>Child Component 1</h3>
    <p>Ben User.vue isimli Parent Component'in içerisindeki bir Child componentim</p>
    <p>Kullanıcı Adı : {{ name }}</p>
    <p>Kullanıcı Adı : {{ switchName() }}</p>
    <p>Kullanıcı Yaşı : {{age}}</p>
    <button @click="sendToParent">Child componentten root yada parenta gönder.</button>
  </div>
</template>
<script>
import { eventBus } from "../main.js";
export default {
  props: {
    name: {
      type: String,
      // required: true,
      default: "Burası default değeri."
    },
    age: [Number]
  },
  methods: {
    switchName() {
      return this.name
        .split("")
        .reverse()
        .join("");
    },
    sendToParent: function() {
      this.$emit("data", "child componentten gelen.");
    }
  },
  created() {
    eventBus.$on("ageWasEdited", age => {
      this.age = age;
    });
  }
};
</script>
<style scoped>
div {
  background-color: lightcoral;
  padding: 20px;
  border: 1px solid #666;
  display: inline-block;
}
</style>
