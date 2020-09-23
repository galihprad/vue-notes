<template>
  <div id="single-note">
    <form v-if="showForm" @submit.prevent="post">
      <div>Title:</div>
      <input type="text" v-model="note.title" required />
      <div>Content:</div>
      <textarea v-model="note.content"></textarea>
      <div>Color:</div>
      <div id="radio">
        <input type="radio" name="color" value="magenta" v-model="note.color" id="magenta" required />
        <input type="radio" name="color" value="yellow" v-model="note.color" id="yellow" />
        <input type="radio" name="color" value="teal" v-model="note.color" id="teal" />
        <input type="radio" name="color" value="cyan" v-model="note.color" id="cyan" />
      </div>
      <button>Add Note</button>
    </form>
    <div v-if="!showForm" @click="handleShowForm">
      <h1>+</h1>
      <h3>Add New</h3>
    </div>
  </div>
</template>

<script>
// import { mapActions } from "vuex";
export default {
  data() {
    return {
      note: {
        title: "",
        content: "",
        color: "",
      },
      showForm: false,
    };
  },
  props: {},
  methods: {
    handleShowForm: function () {
      this.showForm = true;
    },
    post: function () {
      this.showForm = false;
      this.$store.dispatch("addNote", this.note);
      this.note = {
        title: "",
        content: "",
        color: "",
      };
    },
  },
};
</script>

<style scoped>
#single-note {
  width: 200px;
  border: 2px solid grey;
  height: 200px;
  margin: 20px;
}
#cyan {
  outline: 5px solid cyan;
}
#magenta {
  outline: 5px solid magenta;
}
#yellow {
  outline: 5px solid yellow;
}
#teal {
  outline: 5px solid teal;
}
</style>