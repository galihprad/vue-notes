<template>
  <div id="single-note" :style="style">
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
#cyan {
  outline: 2px solid cyan;
}
#magenta {
  outline: 2px solid magenta;
}
#yellow {
  outline: 2px solid yellow;
}
#teal {
  outline: 2px solid teal;
}
</style>