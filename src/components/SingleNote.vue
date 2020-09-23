<template>
  <div id="single-note" :style="style">
    <h2>{{title}}</h2>
    <div>{{content}}</div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    color: String,
    content: String,
  },
  computed: {
    style() {
      return "background-color:" + this.color;
    },
  },
};
</script>

<style>
#single-note {
  width: 200px;
  border: 2px solid grey;
  height: 200px;
  margin: 20px;
}
</style>