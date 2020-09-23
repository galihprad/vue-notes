<template>
  <div>
    <input type="text" v-model="search" placeholder="search note" />
    <div id="home">
      <AddNote />
      <SingleNote
        :key="item.title"
        v-for="item in selectedNote"
        :title="item.title"
        :color="item.color"
        :content="item.content"
      />
    </div>
  </div>
</template>

<script>
import SingleNote from "./SingleNote.vue";
import AddNote from "./AddNote";
import searchMixin from "../mixins/searchMixin";

export default {
  data() {
    return { search: "" };
  },
  components: { SingleNote, AddNote },
  computed: {
    allnotes: function () {
      return this.$store.state.allNotes;
    },
  },
  mixins: [searchMixin],
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