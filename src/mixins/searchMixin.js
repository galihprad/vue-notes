export default {
  computed: {
    selectedNote: function() {
      return this.allnotes.filter((note) => {
        return (
          note.title.toUpperCase().match(this.search.toUpperCase()) ||
          note.content.toUpperCase().match(this.search.toUpperCase())
        );
      });
    },
  },
};
