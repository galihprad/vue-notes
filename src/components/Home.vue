<template>
  <div id="home">
    <AddNote />
    <SingleNote
      :key="item.title"
      v-for="item in allnotes"
      :title="item.title"
      :color="item.color"
      :content="item.content"
    />
  </div>
</template>

<script>
import SingleNote from "./SingleNote.vue";
import AddNote from "./AddNote";
import { datas } from "../data.js";

export default {
  data() {
    return { datas };
  },
  components: { SingleNote, AddNote },
  computed: {
    allnotes: function () {
      return this.$store.state.allNotes;
    },
  },
};
</script>

<style scoped>
#home {
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
}
</style>